package com.loki.user.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class InternalApiKeyFilter extends OncePerRequestFilter {

    @Value("${internal.api.key}")
    private String internalApiKey;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getRequestURI().equals("/internal/users");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterchain)
            throws ServletException, IOException {
        System.out.println("Internal API filter reached");
        System.out.println("Request URI: " + request.getRequestURI());
        System.out.println("Header present: "
                + (request.getHeader("X-Internal-API-Key") != null));
        System.out.println("Internal API key matches: "
                + internalApiKey.equals(
                request.getHeader("X-Internal-API-Key")
        ));
        String provideKey = request.getHeader("X-Internal-API-Key");

        if (provideKey == null || !provideKey.equals(internalApiKey)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType(("application/json"));
            response.getWriter().write("{\"message\":\"Invalid internal API key\"}");
            return;
        }
        filterchain.doFilter(request, response);
    }
}

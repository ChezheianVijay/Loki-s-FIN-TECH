package com.loki.gateway.security;

import com.loki.gateway.service.JwtService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.Collections;

public class JwtAuthenticationFilter implements WebFilter {

    private final JwtService jwtService;

    public JwtAuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {

        String authHeader = exchange.getRequest()
                .getHeaders()
                .getFirst(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return chain.filter(exchange);
        }

        String token = authHeader.substring(7);

        if (!jwtService.isTokenValid(token)) {
            exchange.getResponse().setStatusCode(
                    HttpStatus.UNAUTHORIZED
            );

            return exchange.getResponse().setComplete();
        }

        String email = jwtService.extractEmail(token);
        String role = jwtService.extractRole(token);

        SimpleGrantedAuthority authority =
                new SimpleGrantedAuthority("ROLE_" + role);

        Authentication authentication =
                new UsernamePasswordAuthenticationToken(
                        email,
                        null,
                        Collections.singletonList(authority)
                );

        return chain.filter(exchange)
                .contextWrite(
                        ReactiveSecurityContextHolder
                                .withAuthentication(authentication)
                );
    }
}
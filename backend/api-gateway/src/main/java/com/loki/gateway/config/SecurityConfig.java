package com.loki.gateway.config;

import com.loki.gateway.security.JwtAuthenticationFilter;
import com.loki.gateway.service.JwtService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(
                List.of("http://localhost:3000")
        );

        configuration.setAllowedMethods(
                List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")
        );

        configuration.setAllowedHeaders(
                List.of("Authorization", "Content-Type")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(
            JwtService jwtService) {

        return new JwtAuthenticationFilter(jwtService);
    }

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(
            ServerHttpSecurity http,
            JwtAuthenticationFilter jwtAuthenticationFilter) {

        http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .addFilterAt(
                        jwtAuthenticationFilter,
                        SecurityWebFiltersOrder.AUTHENTICATION
                )

                .authorizeExchange(exchange -> exchange
                        .pathMatchers(
                                "/api/auth/signup",
                                "/api/auth/login"
                        ).permitAll()

                        .pathMatchers(
                                "/api/admin/**",
                                "/api/gateway/admin-test"
                        )
                        .hasRole("ADMIN")

                        .pathMatchers("/api/users/**")
                        .hasAnyRole("USER", "ADMIN")

                        .anyExchange().permitAll()
                );

        return http.build();
    }
}
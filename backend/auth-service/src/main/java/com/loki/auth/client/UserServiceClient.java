package com.loki.auth.client;

import com.loki.auth.dto.UserServiceRegistrationRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class UserServiceClient {

    private final RestClient restClient;
    private final String internalApiKey;

    public UserServiceClient(@Value("${user.service.base-url}") String baseurl
            , @Value("${internal.api.key}") String internalApiKey) {
        this.restClient = RestClient.builder().baseUrl(baseurl).build();
        this.internalApiKey = internalApiKey;
    }

    public void createuserProfile(UserServiceRegistrationRequest request) {
        restClient.post().uri("/internal/users").header("X-Internal-API-key", internalApiKey)
                .contentType(MediaType.APPLICATION_JSON).body(request).retrieve().toBodilessEntity();
    }
}

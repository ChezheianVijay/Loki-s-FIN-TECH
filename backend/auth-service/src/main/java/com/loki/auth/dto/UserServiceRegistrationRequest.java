package com.loki.auth.dto;

public class UserServiceRegistrationRequest {

    private Long authUserId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    public UserServiceRegistrationRequest() {

    }

    public UserServiceRegistrationRequest(Long authUserId, String firstName, String lastName, String email, String phone) {
        this.authUserId = authUserId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

    public Long getAuthUserId() {
        return authUserId;
    }

    public void setAuthUserId(Long authUserId) {
        this.authUserId = authUserId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

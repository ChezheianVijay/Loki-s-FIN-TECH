package com.loki.product.service;

import com.loki.product.dto.ProductRequest;
import com.loki.product.dto.ProductResponse;
import com.loki.product.entity.Product;
import com.loki.product.exception.ProductNotFoundException;
import com.loki.product.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductResponse createProduct(ProductRequest request) {
        Product product = new Product();

        product.setName(request.getName());
        product.setType(request.getType());
        product.setInterestRate(request.getInterestRate());
        product.setTenureMonths(request.getTenureMonths());
        product.setStatus(request.getStatus());

        Product savedResponse = productRepository.save(product);
        return mapToResponse(savedResponse);
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream().map(this::mapToResponse).toList();
    }

    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with id :" + id + " not found"));
        return mapToResponse(product);
    }

    public ProductResponse updateProduct (Long id,ProductRequest request){
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with id :" + id + " not found"));

        product.setName(request.getName());
        product.setType(request.getType());
        product.setInterestRate(request.getInterestRate());
        product.setTenureMonths(request.getTenureMonths());
        product.setStatus(request.getStatus());

        Product updatedProduct = productRepository.save(product);
        return mapToResponse(updatedProduct);

    }

    public void deleteProduct(Long id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with id :" + id + " not found"));

        productRepository.delete(product);
    }

    public ProductResponse mapToResponse(Product product) {
        return new ProductResponse(product.getId(), product.getName(), product.getType()
                , product.getInterestRate(), product.getTenureMonths(), product.getStatus());
    }
}

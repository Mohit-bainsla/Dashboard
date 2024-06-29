package com.Blackcoffer.dashboard.controller;

import com.Blackcoffer.dashboard.entity.Data;
import com.Blackcoffer.dashboard.repository.DataRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class DataController {

    @Autowired
    private DataRepository dataRepository;

    @GetMapping("/data/{id}")
    public ResponseEntity<Data> getDataById(@PathVariable Long id) {
        Optional<Data> data = dataRepository.findById(id);
        return data.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/test")
    public String testDatabaseConnection() {
        long count = dataRepository.count();
        return "Database connection is successful. Total records: " + count;
    }

    // Get all data
    @GetMapping("/all")
    public List<Data> getAllData() {
        return dataRepository.findAll();
    }

    // Filter by end_year
    @GetMapping("/end_year/{endYear}")
    public List<Data> getDataByEndYear(@PathVariable int endYear) {
        return dataRepository.findByEndYear(endYear);
    }


    // Filter by intensity
    @GetMapping("/intensity/{intensity}")
    public List<Data> getDataByIntensity(@PathVariable int intensity) {
        return dataRepository.findByIntensity(intensity);
    }

    // Filter by sector
    @GetMapping("/sector/{sector}")
    public List<Data> getDataBySector(@PathVariable String sector) {
        return dataRepository.findBySector(sector);
    }

    // Filter by topic
    @GetMapping("/topic/{topic}")
    public List<Data> getDataByTopic(@PathVariable String topic) {
        return dataRepository.findByTopic(topic);
    }



    // Filter by city
    @GetMapping("/city/{city}")
    public List<Data> getDataByCity(@PathVariable String city) {
        return dataRepository.findByCity(city);
    }


    // Filter by country
    @GetMapping("/country/{country}")
    public List<Data> getDataByCountry(@PathVariable String country) {
        return dataRepository.findByCountry(country);
    }


    // Filter by year
    // @GetMapping("/year/{year}")
    // public List<Data> getDataByYear(@PathVariable int year) {
    //     return dataRepository.findByYear(year);
    // }
    
}

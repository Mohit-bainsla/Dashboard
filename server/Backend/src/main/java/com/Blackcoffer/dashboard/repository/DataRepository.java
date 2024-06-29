// src/main/java/com/example/demo/repository/DataRepository.java
package com.Blackcoffer.dashboard.repository;

import com.Blackcoffer.dashboard.entity.Data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<Data, Long> {
@Query(value = "SELECT * FROM data WHERE end_year = ?;"  , nativeQuery = true )
    List<Data> findByEndYear(int endYear);

    @Query(value = "SELECT * FROM data WHERE intensity = ?;"  , nativeQuery = true )
     List<Data> findByIntensity(int intensity);

    @Query(value = "SELECT * FROM data WHERE sector = ?;"  , nativeQuery = true )
     List<Data> findBySector(String sector);

    @Query(value = "SELECT * FROM data WHERE topic = ?;"  , nativeQuery = true) 
     List<Data> findByTopic(String topic);

    @Query(value = "SELECT * FROM data WHERE city = ?;"  , nativeQuery = true )
     List<Data> findByCity(String city);

    @Query(value = "SELECT * FROM data WHERE country = ?;"  , nativeQuery = true )
     List<Data> findByCountry(String country);

    // @Query(value = "SELECT * FROM data WHERE year = ?;"  , nativeQuery = true )
    //  List<Data> findByYear(int year);
}

package com.niriic.neticodemobackend.repository;

import com.niriic.neticodemobackend.model.Battery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatteryRepository extends JpaRepository<Battery, Long> {

}

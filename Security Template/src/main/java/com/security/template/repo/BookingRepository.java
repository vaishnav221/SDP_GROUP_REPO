package com.security.template.repo;

import com.security.template.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BookingRepository extends JpaRepository<Booking,Long> {
    
}

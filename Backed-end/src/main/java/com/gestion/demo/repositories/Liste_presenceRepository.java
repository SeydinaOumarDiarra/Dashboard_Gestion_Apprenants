/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gestion.demo.repositories;

import com.gestion.demo.models.Liste_presence;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface Liste_presenceRepository extends JpaRepository <Liste_presence, Long> {
    
}

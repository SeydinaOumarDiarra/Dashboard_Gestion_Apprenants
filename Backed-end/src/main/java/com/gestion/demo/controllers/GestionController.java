/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gestion.demo.controllers;

import com.gestion.demo.models.Administrateur;
import com.gestion.demo.models.Apprenant;
import com.gestion.demo.models.Utilisateur;
import com.gestion.demo.services.GestionServiceImp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author seydinaoumar.diarra
 */
@CrossOrigin("*")
@Controller
@RequestMapping("/api")
public class GestionController {
    
    @Autowired
    GestionServiceImp gestionServiceImp;
    
   
    @GetMapping(value = "/connexion/{login}/{password}")
    @ResponseBody
    public Administrateur authentification
        (
            @PathVariable("login") String username,
            @PathVariable("password") String password
        ) 
    {
        String response = "Succes";
        return gestionServiceImp.authentification(username, password);
    }
        
    @GetMapping("/listAdmin")
    @ResponseBody
        public List<Administrateur> liste_admin() {
        return gestionServiceImp.list_admin();
    }
 
    @GetMapping("/listApprenant")
    @ResponseBody
        public List<Apprenant> liste_apprenant() {
        return gestionServiceImp.list_apprenant();
        }
        
    @PostMapping(value = "/addUser")
    @ResponseBody
    public Utilisateur save(@RequestBody Utilisateur user) {
        return gestionServiceImp.add_user(user);
    }
        
    @PostMapping(value = "/addApprenant")
    @ResponseBody
    public Apprenant save(@RequestBody Apprenant apprenant) {
        return gestionServiceImp.add_apprenant(apprenant);
    }
}

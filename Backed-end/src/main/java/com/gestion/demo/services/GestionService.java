/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gestion.demo.services;

import com.gestion.demo.models.Administrateur;
import com.gestion.demo.models.Apprenant;
import com.gestion.demo.models.Utilisateur;
import java.util.List;

/**
 *
 * @author seydinaoumar.diarra
 */
public interface GestionService {
    
    //Gestion apprenant
    public Apprenant add_apprenant(Apprenant apprenant);
    
    public Apprenant update_apprenant(Long id, Apprenant apprenant);

    public List<Apprenant> list_apprenant();

    public Apprenant afficher_apprenant_by_id(Long id);

    public void delete_apprenant(Long id);
    
   
    
    //Gestion administrateur
    public Administrateur add_admin(Administrateur administrateur);
    
    public Administrateur update_admin(Long id, Administrateur administrateur);

    public List<Administrateur> list_admin();

    public Administrateur afficher_admin_by_id(Long id);

    public void delete_admin(Long id);
    
     //Gestion apprenant
    public Utilisateur add_user(Utilisateur utilisateur);
    
    
    //Authentification
    public Administrateur authentification(String username, String password);
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gestion.demo.services;

import com.gestion.demo.models.Administrateur;
import com.gestion.demo.models.Apprenant;
import com.gestion.demo.models.Utilisateur;
import com.gestion.demo.repositories.AdministrateurRepository;
import com.gestion.demo.repositories.ApprenantRepository;
import com.gestion.demo.repositories.UtilisateurRepository;
import static java.lang.System.console;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author seydinaoumar.diarra
 */
@Service
public class GestionServiceImp implements GestionService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private ApprenantRepository apprenantRepository;
    @Autowired
    private AdministrateurRepository adminRepository;
    private EntityManager entityManager;
    
    
    @Override
    public Utilisateur add_user(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }
    
    @Override
    public Apprenant add_apprenant(Apprenant apprenant) {
         return apprenantRepository.save(apprenant);
    }

    @Override
    public Apprenant update_apprenant(Long id, Apprenant apprenant) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Apprenant> list_apprenant() {
        List<Apprenant> liste = new ArrayList<>();
        System.out.println("lise===============" );
        liste = apprenantRepository.findAll();
        System.out.println("lise===============" + liste);
        return liste;
    }

    @Override
    public Apprenant afficher_apprenant_by_id(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void delete_apprenant(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Administrateur add_admin(Administrateur administrateur) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Administrateur update_admin(Long id, Administrateur administrateur) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Administrateur> list_admin() {
          return adminRepository.findAll();
    }

    @Override
    public Administrateur afficher_admin_by_id(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void delete_admin(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Administrateur authentification(String username, String password) {
         try {
            Utilisateur user = utilisateurRepository.findOneByLoginAndPassword(username, password);
            Long id = user.getId();
            Administrateur admin =  adminRepository.findById(user.getId()).get();
           //System.out.println("Admin=================" + adminRepository.findById(user.getId()).get());
            
            return admin;
        } catch (NoResultException e) {
            return null;
        }
    }
    
}

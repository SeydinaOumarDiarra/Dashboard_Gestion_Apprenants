/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gestion.demo.models;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author seydinaoumar.diarra
 */
@Entity
@Table(name="Apprenant")
public class Apprenant implements Serializable  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "dateAdd")
    private Date dateAdd;
    @Column(name = "dateUpdate")
    private Date dateUpdate;
    
    @ManyToOne
    private Administrateur admin;
    
    @OneToOne
    private Utilisateur user;
    
    /* @OneToMany(mappedBy="app")
    private Collection <Liste_presence> listes;*/

    public Utilisateur getUser() {
        return user;
    }

    public void setUser(Utilisateur user) {
        this.user = user;
    }

    
    public Administrateur getAdmin() {
        return admin;
    }

    public void setAdmin(Administrateur admin) {
        this.admin = admin;
    }

            
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateAdd() {
        return dateAdd;
    }

    public void setDateAdd(Date dateAdd) {
        this.dateAdd = dateAdd;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
    }

    public Apprenant() {
    }

    public Apprenant(Date dateAdd, Date dateUpdate, Administrateur admin, Utilisateur user) {
        this.dateAdd = dateAdd;
        this.dateUpdate = dateUpdate;
        this.admin = admin;
        this.user = user;
    }
    
    
}

package br.com.artur.apilogin.controller;

import br.com.artur.apilogin.model.User;
import br.com.artur.apilogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
@CrossOrigin("*")
@RequestMapping(value = "api")
@RestController
public class HomeController {

    @Autowired
    UserService service;

    @PostMapping(value="/login")
    public ResponseEntity<User> logar(@RequestBody User usr){
        User usuario = service.getUsuario(usr.getEmail());

        if(usuario != null){
            if(usr.getEmail().equals(usuario.getEmail()) && usr.getSenha().equals(usuario.getSenha())){
                return ResponseEntity.ok().body(usuario);
            }
        } else {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(null);
    }
}

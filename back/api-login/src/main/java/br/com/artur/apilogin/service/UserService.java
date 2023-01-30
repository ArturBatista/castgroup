package br.com.artur.apilogin.service;

import br.com.artur.apilogin.model.User;
import br.com.artur.apilogin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    public User getUsuario(String email){
      User usuario = repository.findByEmail(email);
      return usuario;
    }

}

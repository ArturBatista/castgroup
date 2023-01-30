package br.com.artur.apilogin.repository;

import br.com.artur.apilogin.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}

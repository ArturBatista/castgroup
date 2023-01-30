import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:Login = {
    nome: "",
    email: "",
    senha: ""
  };

  constructor(private router: Router, private service: LoginServiceService) { }

  ngOnInit(): void {
    if(window.localStorage['login'] != null){
      this.router.navigate(['home']);
    }
  }


  enviarLogin() {
    if(this.login.email != "" && this.login.senha != ""){
      this.service.findByEmail(this.login).subscribe(retorno =>{
        console.log(retorno)
        if(retorno != null){
          localStorage.setItem('login', JSON.stringify(this.login));
          this.router.navigate(['home']);
        } else{
          alert("Email e/ou senha errado!")
        }
  
        //
       });
    }
     
  }

}


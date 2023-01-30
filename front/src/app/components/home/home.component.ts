import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tempoSessao:number = 3;

  constructor(private router: Router, private bnIdle: BnNgIdleService) { }
  
  ngOnInit(): void {

    if(window.localStorage['login'] == null){
      this.router.navigate(['login']);
    } else{
      this.bnIdle.startWatching(this.tempoSessao).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          this.limparUsuario();
        }
      });
    }

    
  }
  public limparUsuario(){
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}

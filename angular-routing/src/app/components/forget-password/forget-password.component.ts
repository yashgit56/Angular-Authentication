import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  faLock = faLock ;

  constructor(private auth: AuthService , private router: Router ) { }

  ngOnInit() : void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']) ;
    }
  }
}

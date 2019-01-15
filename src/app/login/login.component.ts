import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  destination: string;
  user = {
    email: '',
    password:''
  }
  fillAll:string

  constructor(
    private authService:AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.destination = this.router.url
    // console.log(this.destination)
  }
  ngOnDestory(){

  }

  onSubmit({valid}:{valid: boolean})  {
    console.log(valid)
    if(!valid) {
      console.log("Dosn't Work");
      this.fillAll = 'All fields must be filled.';
    }
    else{
      console.log('works')
      this.authService.login(this.user).then((user) => {
        this.router.navigate(['/index']);
      })

      .catch((err) => {
        console.log(err);
        if (err.error.code == 422){
          this.fillAll = 'Email or password is incorrect.'
        }
        else{
          this.fillAll = 'Sorry, but something went wrong.';
        }
      });
    }
  }
}

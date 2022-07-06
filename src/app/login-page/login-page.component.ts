import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router
  ) { }

  registerForm: any;

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "phoneNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  submitData() {
    console.log(this.registerForm.value);
    if(this.registerForm.valid) {
      alert(`Thank you ${this.registerForm.value.firstName}!`);
      let inputLogin = document.getElementById('user-login') as HTMLInputElement;
      inputLogin.value = this.registerForm.value.firstName;

      this.registerForm.reset();
      this.router.navigate(['/']);
    }
  }

  get firstname() { return this.registerForm.get('firstName'); }
  get lastname() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get phonenumber() { return this.registerForm.get('phoneNumber'); }
  
}

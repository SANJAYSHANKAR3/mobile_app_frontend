import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { LoginCustomer } from '../../model/LoginCustomer';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './login.component.html',
styleUrl: './login.component.css'
})
export class LoginComponent {
loginCustomer:LoginCustomer=new LoginCustomer();
alertService:any;
constructor(private customerService:CustomerService, private router:Router){}
login()
{
this.customerService.login(this.loginCustomer).subscribe(
{
next:(data)=>
{
console.log(data);

console.log("Login successful");
this.router.navigateByUrl("/product");
},
error:(err)=>
{
console.log(err);
alert(err.error);
}
}
)

}
}


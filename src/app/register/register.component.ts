 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Customer } from '../../model/registration';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../app/service/customer.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-register',
standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
templateUrl: './register.component.html',
styleUrl: './register.component.css'
})
export class RegisterComponent {
// newCustomer: User = {
// name: '',
// email: '',
// password: '',
// gender: '',
// // address: ''
// };
// success: string = '';
// errorMessage: string = '';

// registerForm: FormGroup;
// subscription!: Subscription;

// constructor(private formBuilder: FormBuilder, private adminService: AdminService) {
// this.registerForm = this.formBuilder.group({
// name: ['', Validators.required],
// email: ['', [Validators.required, Validators.email]],
// password: ['', Validators.required],
// gender: ['', Validators.required],
// // address: ['', Validators.required]
// });
// }

// createCustomer() {
// if (this.registerForm.valid) {
// this.subscription = this.adminService.createCustomer(this.newCustomer).subscribe({
// next: (data: any) => {
// console.log(data);
// this.success = 'Registration successful';
// this.errorMessage = '';
// },
// error: (error: any) => {
// console.error(error);
// this.errorMessage = 'An error occurred. Please try again.';
// this.success = '';
// }
// });
// } else {
// this.errorMessage = 'Please fill out all required fields correctly.';
// }
// }

// ngOnDestroy() {
// if (this.subscription) {
// this.subscription.unsubscribe();
// }
// }

newCustomer: Customer = new Customer();
constructor(
private customerService: CustomerService, private router: Router
) { }

createCustomer() {
this.customerService.createCustomer(this.newCustomer).subscribe(
{
next:(data)=>
{
console.log(data),
console.log("Register User Successful");
alert("Registration successful. Redirecting to the login page");
this.router.navigateByUrl("/login");
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


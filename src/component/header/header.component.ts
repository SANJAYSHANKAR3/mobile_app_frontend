import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  constructor(private router: Router) { }

  redirectLoginComponent() {
    this.router.navigateByUrl("/login"); // Replace 'new-component' with the actual path of your new component
  }
 
  redirectRegisterComponent() {
    this.router.navigate(['/register']); // Replace 'new-component' with the actual path of your new component
  }


    
}

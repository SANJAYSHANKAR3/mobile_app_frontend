import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { DataService } from '../../app/service/data.service';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',


})
export class PaymentComponent {
  Totalprice:any;
  paymentsuccess(){
    alert("Payment is successful");
  }
  constructor(private dataservice: DataService){  
  
  this.Totalprice=this.dataservice.myVariable;
  }
}
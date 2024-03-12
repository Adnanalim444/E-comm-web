import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

constructor(private seller:SellerService, private router:Router){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
signUp(data:SignUp):void {
  // console.log(data);
  // throw new Error('Method not implemented.');
this.seller.userSignUp(data).subscribe((result)=>{

  if (result) {
  this.router.navigate(['seller-home'])  
  } else {
    
  }

});
}

}

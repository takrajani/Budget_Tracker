// import { FinanceServiceService } from './../../shared/services/finance-service.service';
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {FormsModule } from '@angular/forms';
// import { IUserDeatils } from '../../shared/services/model/user-detail.model';

// @Component({
//   selector: 'app-details',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './details.component.html',
//   styleUrl: './details.component.css'
// })
// export class DetailsComponent {
//   userDetails: IUserDeatils= {
//   type: '',
//   amount: '',
//   date: ''
//   };

//   constructor(private financeService: FinanceServiceService)
//   {

//   }
//   onSubmit(userForm: any ){
//     //console.log(userForm);
//     if(userForm.valid)
//     {
//       this.userDetails= userForm.value;
//       console.log("THIS IS FOR CHECKING"+this.userDetails);
//       this.financeService.add(this.userDetails);
//     }
//     userForm.reset();
//   }
// }
import { FinanceServiceService } from './../../shared/services/finance-service.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserDetails } from '../../shared/services/model/user-detail.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  userDetails: IUserDetails = {
    type: '',
    amount: '',
    date: ''
  };

  constructor(private financeService: FinanceServiceService) {}

  onSubmit(userForm: any) {
    if (userForm.valid) {
      this.userDetails = userForm.value;
      console.log("Form submitted:", this.userDetails); // This will log form data to the console
      this.financeService.add(this.userDetails);
      userForm.reset();
    }
  }
}


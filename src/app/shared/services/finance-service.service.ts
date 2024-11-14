import { Injectable } from '@angular/core';
import { IUserDetails } from './model/user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class FinanceServiceService {

  private income: IUserDetails[]=[];
  private expense: IUserDetails[]=[];

  add(details: IUserDetails)
  {
    if(details.type==='income')
    {
      this.income.push(details);
    }
    else
    {
      this.expense.push(details);
    }

  }

  getIncome(): IUserDetails[]
  {
      return this.income;
  }
  getExpense() : IUserDetails[]
  {
     return this.expense;
  }
}

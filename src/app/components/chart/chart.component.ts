import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { FinanceServiceService } from '../../shared/services/finance-service.service';
import { ChartData, Point } from 'chart.js';
import { IUserDetails } from '../../shared/services/model/user-detail.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  lineChartData1: ChartData<'line'> = {
    labels: [], //Dates will be populated here
    datasets: [
      {
        data: [], //amount will be populated here
        label: 'Income (in Rs.)',
      },
    ],
  };
  lineChartData2: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [] as (number| Point |null)[],
        label: 'Expense (in Rs.)',
      },
    ],
  };

  constructor(private financeService: FinanceServiceService) {}

  ngOnInit(): void {
    this.loadIncomeData();
    this.loadExpenseData();

  }




  loadIncomeData():void{
    const incomeData= this.financeService.getIncome();
    console.log(incomeData);

   const dates= incomeData.map((item:IUserDetails)=>{item.date}); //Extract Dates
   const amounts : (number| Point |null)[]= incomeData.map((item:IUserDetails)=>{
      const amount = +item.amount;
    if (isNaN(amount)) {
      return null;  // If conversion failed, return null
    } else {
      return amount;  // Otherwise, return the valid number
    }
   }); //Extract Amount
    //Assign to chart data
   this.lineChartData1.labels=dates;
   this.lineChartData1.datasets[0].data = amounts;
  }


  loadExpenseData():void{
    const expenseData= this.financeService.getExpense();
    const dates= expenseData.map((item:IUserDetails)=>{item.date});
    const amounts= expenseData.map((item:IUserDetails)=>{
      const amount = +item.amount;
      if (isNaN(amount)) {
        return null;  // If conversion failed, return null
      } else {
        return amount;  // Otherwise, return the valid number
      }
    });
    console.log(amounts);
    this.lineChartData2.labels=dates;
    this.lineChartData2.datasets[0].data = amounts;
  }
}

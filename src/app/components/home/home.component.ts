// home.component.ts
import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expenses.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  expenses: Expense[];

  constructor(private expenseService: ExpenseService) {
    this.expenses = this.expenseService.getExpenses();
  }
}

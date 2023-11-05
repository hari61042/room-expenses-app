// expense.service.ts
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  resetExpenses() {
    this.expenses = [];
  }
}

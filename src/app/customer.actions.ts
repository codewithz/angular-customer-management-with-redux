import { Action } from '@ngrx/store';
import { Customer } from './customers/customer.model';

export enum CustomerActionTypes {
  LoadCustomers = '[Customer] Load Customers',
  LoadCustomersSuccess = '[Customer] Load Customers Success',
  LoadCustomersFailure = '[Customer] Load Customers Failure',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;
  constructor(public payload: { data: Customer[] }) { }
}

export class LoadCustomersFailure implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFailure;
  constructor(public payload: { error: string }) { }
}

export type CustomerActions = LoadCustomers | LoadCustomersSuccess | LoadCustomersFailure;


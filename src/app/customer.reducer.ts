import { Action } from '@ngrx/store';
import { Customer } from './customers/customer.model';


export const customerFeatureKey = 'customerState';

export interface State {

  customers:Customer[],
  error:string

};

export const initialState: State = {
  customers:[],
  error:''
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

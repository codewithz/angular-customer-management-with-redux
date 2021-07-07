import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomer from '../customer.reducer';


export interface State {

  [fromCustomer.customerFeatureKey]: fromCustomer.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCustomer.customerFeatureKey]: fromCustomer.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

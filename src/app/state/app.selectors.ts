import { AppRootState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAppRootFeatureState = createFeatureSelector<AppRootState>('applicationState');

export const getMessages = createSelector(
  getAppRootFeatureState,
  state => state.messages
);

export const getUser = createSelector(
  getAppRootFeatureState,
  state => state.user
);


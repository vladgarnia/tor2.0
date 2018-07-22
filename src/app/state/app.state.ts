import { FlashMessage, User } from '@app/models';

export interface AppRootState {
  messages: Array<FlashMessage>;
  user: User;
}

export interface AppState {
  applicationState: AppRootState;
}

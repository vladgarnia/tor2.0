export interface FlashMessage {
  message: string;
  duration: number;
  type: FlashMessageType;
}

export enum FlashMessageType {
  success = 'success',
  danger = 'danger',
  info = 'info',
  warning = 'warning'
}


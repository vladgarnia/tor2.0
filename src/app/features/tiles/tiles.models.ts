export enum AppTileTypes {
  Html = 'HTML'
}

export interface AppTileBase {
  title: string;
  subtitle: string;
  width: number;
  type: AppTileTypes;
}

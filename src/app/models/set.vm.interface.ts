import { Theme } from './theme.enum';

export interface SetVm {
  name: string;
  number: number;
  pieceCount: number;
  price: number;
  theme: Theme;
  wished: number;
  wishPrice: number;
}

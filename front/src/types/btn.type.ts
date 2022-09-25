import type { TcomponentParent } from './component-parent.type';

export type Tbtn = TcomponentParent & {
  click?: () => void;
  submit?: boolean;
  addClass?: string;
  textColor?: string;
  padding?: string;
  hoverBg?: string;
};

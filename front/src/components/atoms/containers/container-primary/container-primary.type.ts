/**
 * enum for selected the model of container
 */
export enum EmodelContainer {
  fit = 'fit',
  xs = '2s',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = '2xl',
  xxxl = '3xl',
  xxxxl = '4xl',
  xxxxxl = '5xl',
  xxxxxxl = '6xl',
}

export type TcontainerPrimary = {
  children: JSX.Element | JSX.Element[] | string | string[]
  model: EmodelContainer
  addClass?: string
  boxClass?: string
}

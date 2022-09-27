/**
 * type for input sample
 */
export type Tinput = {
  id?: string
  name?: string
  type?: string
  value: string
  disabled?: boolean
  placeholder: string
  required?: boolean
  setValueInput: React.Dispatch<React.SetStateAction<string>>
  classDefault?: string
  addClass?: string
  colors?: string
  border?: string
  radius?: string
  padding?: string
  textSize?: string
}

/**
 * type for input full
 */
export type TinputFull = Tinput & {
  activeReset?: boolean
  eye?: boolean
  icon?: JSX.Element | JSX.Element[]
}

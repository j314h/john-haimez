/**
 * type for input full
 */
export type TinputFull = {
  id?: string
  name?: string
  type?: string
  value: string
  setValueInput: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  padding?: string
  activeReset?: boolean
  eye?: boolean
  icon?: JSX.Element | JSX.Element[]
  addClass?: string
}

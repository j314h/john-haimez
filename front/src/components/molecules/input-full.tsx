import { BtnIcon } from '@atoms/btns/btn-icon'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { EyeCloseIcon } from '@atoms/icons/eye-close-icon'
import { EyeOpenIcon } from '@atoms/icons/eye-open-icon'
import { Input } from '@atoms/inputs/input'
import { TinputFull } from '@types-app/input.type'
import React, { useState } from 'react'

/**
 * input
 * @param id?: string,
 * @param name?: string,
 * @param type?: string,
 * @param value: string,
 * @param disabled?: boolean,
 * @param placeholder: string,
 * @param required?: boolean,
 * @param setValueInput: React.Dispatch<React.SetStateAction<string>>,
 * @param classDefault?: string,
 * @param addClass?: string,
 * @param colors?: string,
 * @param border?: string,
 * @param radius?: string,
 * @param padding?: string,
 * @param textSize?: string,
 * @param activeReset?: boolean,
 * @param eye?: boolean,
 * @param icon?: JSX.Element | JSX.Element[],
 * @returns
 */
function InputFull({
  id,
  name,
  value,
  type,
  disabled,
  placeholder,
  required,
  setValueInput,
  classDefault,
  addClass,
  colors,
  border,
  radius,
  padding,
  textSize,
  activeReset,
  eye,
  icon,
}: TinputFull) {
  const [typeInput, setTypeInput] = useState(type)

  /**
   * change type text a to password
   */
  const changeTypeInput = () => {
    if (typeInput === 'text') {
      setTypeInput('password')
    } else {
      setTypeInput('text')
    }
  }

  /**
   * reset value input
   */
  const resetValue = () => {
    setValueInput('')
  }

  return (
    <div className='relative'>
      {/* btn reset */}
      {activeReset ? (
        value ? (
          <BtnIcon
            padding='p-0'
            addClass='absolute right-3 top-2.5'
            hoverBg='hover:bg-transparent dark:hover:bg-transparent'
            click={resetValue}>
            <CrossIcon size='w-5 h-5' />
          </BtnIcon>
        ) : null
      ) : null}

      {/* btn see password */}
      {eye ? (
        <BtnIcon
          padding='p-0'
          addClass='absolute right-3 top-2.5'
          hoverBg='hover:bg-transparent dark:hover:bg-transparent'
          click={changeTypeInput}>
          {typeInput === 'text' ? (
            <EyeOpenIcon size='w-5 h-5' />
          ) : (
            <EyeCloseIcon size='w-5 h-5' />
          )}
        </BtnIcon>
      ) : null}

      {/* icon input */}
      {icon ? <div className='absolute left-4 top-2'>{icon}</div> : null}

      {/* input */}
      <Input
        placeholder={placeholder}
        value={value}
        setValueInput={setValueInput}
        addClass={addClass}
        border={border}
        classDefault={classDefault}
        colors={colors}
        disabled={disabled}
        id={id}
        name={name}
        padding={
          padding ?? (icon && (activeReset || eye))
            ? 'pr-12 py-2 pl-12'
            : activeReset || eye
            ? 'pr-12 py-2 pl-4'
            : icon
            ? 'pr-4 py-2 pl-12'
            : ''
        }
        radius={radius}
        required={required}
        textSize={textSize}
        type={typeInput}
      />
    </div>
  )
}

export default InputFull

import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { EyeCloseIcon } from '@atoms/icons/eye-close-icon'
import { EyeOpenIcon } from '@atoms/icons/eye-open-icon'
import { InputPrimary } from '@atoms/inputs/input-primary/input-primary'
import React, { useState } from 'react'
import { TinputFull } from './input-full.type'

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
 * @param padding?: string,
 * @param activeReset?: boolean,
 * @param eye?: boolean,
 * @param icon?: JSX.Element | JSX.Element[],
 * @returns
 */
export function InputFull({
  id,
  name,
  value,
  type,
  disabled,
  placeholder,
  required,
  setValueInput,
  padding,
  activeReset,
  eye,
  icon,
  addClass,
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
    <div className={`relative ${addClass}`}>
      {/* btn reset or not */}
      {activeReset ? (
        value ? (
          <BtnIconPrimary
            inputFull
            textColorHover='hover:text-error'
            click={resetValue}>
            <CrossIcon size='w-5 h-5' />
          </BtnIconPrimary>
        ) : null
      ) : null}

      {/* btn see password or not */}
      {eye ? (
        <BtnIconPrimary inputFull click={changeTypeInput}>
          {typeInput === 'text' ? (
            <EyeOpenIcon size='w-5 h-5' />
          ) : (
            <EyeCloseIcon size='w-5 h-5' />
          )}
        </BtnIconPrimary>
      ) : null}

      {/* icon input or not */}
      {icon ? <div className='absolute left-4 top-2'>{icon}</div> : null}

      {/* input */}
      <InputPrimary
        placeholder={placeholder}
        value={value}
        setValueInput={setValueInput}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        type={typeInput}
        padding={
          padding ?? (icon && (activeReset || eye))
            ? 'pr-12 py-2 pl-12'
            : activeReset || eye
            ? 'pr-12 py-2 pl-4'
            : icon
            ? 'pr-4 py-2 pl-12'
            : ''
        }
      />
    </div>
  )
}

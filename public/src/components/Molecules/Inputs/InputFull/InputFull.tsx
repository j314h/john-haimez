import { Component, createSignal, Match, Show, Switch } from 'solid-js'
import { EinputType, IinputFull } from '../../../../types/Input.type'
import { IconCross } from '../../../Atoms/Icons/IconCross'
import { IconEye } from '../../../Atoms/Icons/IconEye'
import { IconEyeClose } from '../../../Atoms/Icons/IconEyeClose'
import { IconLock } from '../../../Atoms/Icons/IconLock'
import { IconUserAvatar } from '../../../Atoms/Icons/IconUserAvatar'
import { Input } from '../../../Atoms/Inputs/Input/Input'
import './InputFull.css'

export const InputFull: Component<IinputFull> = props => {
  const [typeValue, setTypeValue] = createSignal(props.type)

  /**
   * change type for input password
   */
  const seePassword = () => {
    if (typeValue() === 'password') {
      setTypeValue('text')
    } else {
      setTypeValue('password')
    }
  }

  return (
    <div class={`input-full-div ${props.addClass}`}>
      {/* icons front */}
      <div class='input-full-position-icon-front'>
        <Switch fallback={<div></div>}>
          <Match when={props.typeOfInput === EinputType.ID}>
            <IconUserAvatar addClass='text-high' />
          </Match>
          <Match when={props.typeOfInput === EinputType.PASSWORD}>
            <IconLock addClass='text-high' />
          </Match>
        </Switch>
      </div>

      {/* input */}
      <Input
        id={props.id}
        type={typeValue()}
        placeholder={props.placeholder ?? 'Placeholder'}
        name={props.name}
        value={props.value}
        setValue={props.setValue}
        required={props.required}
        disabled={props.disabled}
        padding={
          props.typeOfInput !== EinputType.RESET &&
          props.typeOfInput !== undefined
            ? 'pl-12 pr-12'
            : 'pl-4 pr-12'
        }
      />

      {/* icons back */}
      <div class='input-full-position-icon-back'>
        <Switch fallback={<div></div>}>
          {/* button for delete text of input */}
          <Match
            when={
              props.value !== '' &&
              (props.typeOfInput === EinputType.RESET ||
                props.typeOfInput === EinputType.ID)
            }>
            <button
              type='button'
              class='hover:text-error pt-0.5'
              onClick={() => props.setValue('')}>
              <IconCross size='w-5 h-5' />
            </button>
          </Match>

          {/* button see password */}
          <Match
            when={
              props.value !== '' && props.typeOfInput === EinputType.PASSWORD
            }>
            <button
              type='button'
              class='hover:text-action pt-0.5'
              onClick={seePassword}>
              {/* if type text, see eye close etc .. */}
              <Show
                when={typeValue() !== 'password'}
                fallback={<IconEyeClose size='w-5 h-5' />}>
                <IconEye size='w-5 h-5' />
              </Show>
            </button>
          </Match>
        </Switch>
      </div>
    </div>
  )
}

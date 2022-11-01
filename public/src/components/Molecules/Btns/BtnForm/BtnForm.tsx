import { Component, Show } from 'solid-js'
import { IbtnForm } from '../../../../types/Btn.type'
import { BtnPrimary } from '../../../Atoms/Btns/BtnPrimary/BtnPrimary'
import { SpinnerCircle } from '../../../Atoms/Spinners/SpinnerCircle/SpinnerCircle'
import './BtnForm.css'

export const BtnForm: Component<IbtnForm> = props => {
  return (
    <BtnPrimary type='submit' addClass='btn-form'>
      <Show when={props.loading}>
        <SpinnerCircle />
      </Show>
      {props.children}
    </BtnPrimary>
  )
}

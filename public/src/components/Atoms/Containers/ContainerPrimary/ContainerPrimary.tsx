import { Component } from 'solid-js'
import { EcontainerType, Icontainer } from '../../../../types/Container.type'
import './ContainerPrimary.css'

export const ContainerPrimary: Component<Icontainer> = props => {
  return (
    <section
      class={`container-primary ${props.addClass}`}
      classList={{
        s: props.typeOfContainer === EcontainerType.S,
        m: props.typeOfContainer === EcontainerType.M,
        l: props.typeOfContainer === EcontainerType.L,
        xl: props.typeOfContainer === EcontainerType.XL,
        xl2: props.typeOfContainer === EcontainerType.XL2,
      }}>
      {props.children}
    </section>
  )
}

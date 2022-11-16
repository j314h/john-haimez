import React from 'react'
import { TcontainerPrimary } from '../../../../types/ContainerType'
import './ContainerPrimary.css'

export function ContainerPrimary({
  children,
  typeContainer,
}: TcontainerPrimary) {
  /**
   * selected type container
   * @returns string
   */
  function selectedTypeContainer() {
    switch (typeContainer) {
      case 'small-xl':
        return 'container-primary-small-xl'
      case 'small':
        return 'container-primary-small'
      case 'medium-xl':
        return 'container-primary-medium-xl'
      case 'medium':
        return 'container-primary-medium'
      case 'large-xl':
        return 'container-primary-large-xl'
      case 'large':
        return 'container-primary-large'
      default:
        break
    }
  }

  return (
    <section className={`container-primary ${selectedTypeContainer()}`}>
      {children}
    </section>
  )
}

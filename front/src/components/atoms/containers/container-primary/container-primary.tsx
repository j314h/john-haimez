import React from 'react'
import { EmodelContainer, TcontainerPrimary } from './container-primary.type'
import './container-primary.css'

export function ContainerPrimary({
  children,
  model,
  addClass,
  boxClass,
}: TcontainerPrimary) {
  return (
    <section
      className={`
      container-primary
    ${boxClass ?? 'container-box'}
    ${addClass}
    ${model === EmodelContainer.fit ? 'container-fit' : 'container-default'}
    ${model === EmodelContainer.xs ? 'container-xs container-small' : null}
    ${model === EmodelContainer.s ? 'container-s container-small' : null}
    ${model === EmodelContainer.m ? 'container-m container-basic' : null}
    ${model === EmodelContainer.l ? 'container-l container-basic' : null}
    ${model === EmodelContainer.xl ? 'container-xl container-large' : null}
    ${model === EmodelContainer.xxl ? 'container-xxl container-large' : null}
    ${model === EmodelContainer.xxxl ? 'container-xxxl container-large' : null}
    ${
      model === EmodelContainer.xxxxl ? 'container-xxxxl container-large' : null
    }
    ${
      model === EmodelContainer.xxxxxl
        ? 'container-xxxxxl container-large'
        : null
    }
    ${
      model === EmodelContainer.xxxxxxl
        ? 'container-xxxxxxl container-large'
        : null
    }
    `}>
      {children}
    </section>
  )
}

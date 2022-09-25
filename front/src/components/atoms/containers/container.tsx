import { EmodelContainer, Tcontainer } from '@types-app/container.type'
import React from 'react'

const fit = `
w-fit px-2 py-5 
rounded-2xl md:rounded-3xl`

const xs = `
w-full md:max-w-xs 
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const s = `
w-full md:max-w-sm
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const m = `
w-full md:max-w-md
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const l = `
w-full md:max-w-lg
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xl = `
w-full md:max-w-xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xxl = `
w-full md:max-w-2xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xxxl = `
w-full md:max-w-3xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xxxxl = `
w-full md:max-w-4xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xxxxxl = `
w-full md:max-w-5xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

const xxxxxxl = `
w-full md:max-w-6xl
px-2 py-5 sm:px-4 md:px-8 md:py-8
`

export default function Container({ children, model, addClass }: Tcontainer) {
  return (
    <section
      className={`
        ${model === EmodelContainer.fit ? fit : null}
        ${model === EmodelContainer.xs ? xs : null}
        ${model === EmodelContainer.s ? s : null}
        ${model === EmodelContainer.m ? m : null}
        ${model === EmodelContainer.l ? l : null}
        ${model === EmodelContainer.xl ? xl : null}
        ${model === EmodelContainer.xxl ? xxl : null}
        ${model === EmodelContainer.xxxl ? xxxl : null}
        ${model === EmodelContainer.xxxxl ? xxxxl : null}
        ${model === EmodelContainer.xxxxxl ? xxxxxl : null}
        ${model === EmodelContainer.xxxxxxl ? xxxxxxl : null}
        ${addClass}
        ${
          model === EmodelContainer.fit
            ? 'rounded-2xl md:rounded-3xl'
            : `
            rounded-none
            sm:rounded-2xl
            md:rounded-3xl`
        }
        bg-fond2_claire
        dark:bg-fond2_dark`}>
      {children}
    </section>
  )
}

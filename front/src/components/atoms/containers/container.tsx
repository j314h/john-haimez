import { EmodelContainer, Tcontainer } from '@types-app/container.type'
import React from 'react'

const paddingSmall = 'px-4 py-5 sm:px-8 md:px-12 md:py-8'
const paddingBasic = 'px-4 py-5 sm:px-8 md:px-12 md:py-8'
const paddingLarge = 'px-4 py-5 sm:px-8 md:px-12 md:py-8'

const fit = `
min-w-max px-2 py-5 
rounded-2xl md:rounded-3xl`

const xs = `
w-full sm:max-w-xs 
${paddingSmall}
`

const s = `
w-full sm:max-w-sm
${paddingSmall}
`

const m = `
w-full sm:max-w-md
${paddingBasic}
`

const l = `
w-full sm:max-w-lg
${paddingBasic}
`

const xl = `
w-full md:max-w-xl
${paddingBasic}
`

const xxl = `
w-full md:max-w-2xl
${paddingLarge}
`

const xxxl = `
w-full md:max-w-3xl
${paddingLarge}
`

const xxxxl = `
w-full md:max-w-4xl
${paddingLarge}
`

const xxxxxl = `
w-full md:max-w-5xl
${paddingLarge}
`

const xxxxxxl = `
w-full md:max-w-6xl
${paddingLarge}
`

/**
 * container or card or box
 * @param children: string | JSX.Element | JSX.Element[]
 * @param addClass?: string | undefined;
 * @param model: EmodelContainer
 * @returns
 */
export default function Container({
  children,
  model,
  addClass,
  boxClass,
}: Tcontainer) {
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
          boxClass ??
          `drop-shadow-md
          dark:drop-shadow-none
          dark:border-2
          dark:border-zinc-900`
        }
        ${
          model === EmodelContainer.fit
            ? 'rounded-2xl md:rounded-3xl'
            : `
            rounded-2xl
            sm:rounded-2xl
            md:rounded-3xl`
        }
        bg-fond2_claire
        dark:bg-fond2_dark`}>
      {children}
    </section>
  )
}

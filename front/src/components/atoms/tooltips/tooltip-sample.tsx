import { Ttooltip } from '@types-app/tooltip.type'
import React from 'react'

/**
 * tooltip basic design
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @param dataTip: string | null;
 * @param positionTip: string | null;
 * @returns
 */
export function TooltipBasic({ children, dataTip, positionTip }: Ttooltip) {
  return (
    <div
      className={`${dataTip ? `tooltip ${positionTip}` : null}`}
      data-tip={dataTip}>
      {children}
    </div>
  )
}

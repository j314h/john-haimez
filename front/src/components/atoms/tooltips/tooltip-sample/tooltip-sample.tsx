import React from 'react'
import { TtooltipSample } from './tooltip-sample.type'

/**
 * tooltip basic design
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @param dataTip: string | null;
 * @param positionTip: string | null;
 * @returns
 */
export function TooltipBasic({
  children,
  dataTip,
  positionTip,
  addClass,
}: TtooltipSample) {
  return (
    <div
      className={`${dataTip ? `tooltip ${positionTip} ${addClass}` : null}`}
      data-tip={dataTip}>
      {children}
    </div>
  )
}

import React from 'react'
import { TtitlePrimary } from '../../../../types/TitleType'
import './TitlePrimary.css'

export function TitlePrimary({
  typeTitlePrimary,
  children,
  addClass,
}: TtitlePrimary) {
  function getTitle() {
    switch (typeTitlePrimary) {
      case 'h1':
        return <h1 className={`${addClass}`}>{children}</h1>
      case 'h2':
        return <h2 className={`${addClass}`}>{children}</h2>
      case 'h3':
        return <h3 className={`${addClass}`}>{children}</h3>
      case 'h4':
        return <h4 className={`${addClass}`}>{children}</h4>
      case 'h5':
        return <h5 className={`${addClass}`}>{children}</h5>
      default:
        break
    }
  }

  return <>{getTitle()}</>
}

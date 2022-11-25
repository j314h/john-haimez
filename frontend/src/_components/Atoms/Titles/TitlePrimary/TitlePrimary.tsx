import React from 'react'
import { TtitlePrimary } from '../../../../types'
import './TitlePrimary.css'

export function TitlePrimary({
  typeTitlePrimary,
  children,
  addClass,
}: TtitlePrimary) {
  function getTitle() {
    switch (typeTitlePrimary) {
      case 'h1':
        return <h1 className={`h1 ${addClass}`}>{children}</h1>
      case 'h2':
        return <h2 className={`h2 ${addClass}`}>{children}</h2>
      case 'h3':
        return <h3 className={`h3 ${addClass}`}>{children}</h3>
      case 'h4':
        return <h4 className={`h4 ${addClass}`}>{children}</h4>
      case 'h5':
        return <h5 className={`h5 ${addClass}`}>{children}</h5>
      default:
        break
    }
  }

  return <>{getTitle()}</>
}

import React from 'react'

/**
 * interface for model setting
 */
export interface Isetting {
  id?: number
  copyright: string
}

/**
 * type for response get setting
 */
export type TsettingResponse = {
  data: Isetting
}

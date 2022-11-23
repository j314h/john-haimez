import { useEffect, useState } from 'react'
import { BehaviorSubject, map, mergeMap } from 'rxjs'
import { SettingApi, SettingService } from '..'
import { EventService } from '../../shared/EventService'
import { EeventModel, IerrorApp, Isetting } from '../../types'

export const SettingStore = {
  // all settings
  settings$: new BehaviorSubject<Isetting[]>([]),
  // setting selected by user
  settingSelected$: new BehaviorSubject<Isetting>({} as Isetting),
}

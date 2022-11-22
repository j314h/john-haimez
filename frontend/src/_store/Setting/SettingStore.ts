import { useEffect, useState } from 'react'
import { BehaviorSubject, map, mergeMap } from 'rxjs'
import { SettingApi, SettingService } from '..'
import { EventService } from '../../shared/EventService'
import { EeventModel, IerrorApp, Isetting } from '../../types'

export const SettingStore = {
  settings$: new BehaviorSubject<Isetting[]>([]),
  settingsLoading$: new BehaviorSubject(false),
  settingsError$: new BehaviorSubject<IerrorApp>({
    active: false,
    message: null,
  }),
}

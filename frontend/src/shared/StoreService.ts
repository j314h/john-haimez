import { useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

/**
 * create a sample hook for observable sample
 * @param obser observable
 * @returns
 */
export function createHook<T>(obser: BehaviorSubject<T>, valueInit: T) {
  return () => {
    const [val, setVal] = useState<T>(valueInit)

    useEffect(() => {
      obser.subscribe(value => setVal(value))
    }, [])

    return val!
  }
}

/**
 * create a sample hook for observable object
 * @param obser observable
 * @returns
 */
export function createHookObject<T>(obser: BehaviorSubject<T>) {
  return () => {
    const [val, setVal] = useState<T>({} as T)

    useEffect(() => {
      obser.subscribe(value => setVal({ ...value }))
    }, [])

    return val!
  }
}

/**
 * create a sample hook for observable array
 * @param obser observable
 * @returns
 */
export function createHookArray<T>(obser: BehaviorSubject<T[]>) {
  return () => {
    const [val, setVal] = useState<T[]>([])

    useEffect(() => {
      obser.subscribe(value => setVal([...value]))
    }, [])

    return val!
  }
}

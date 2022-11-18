import { useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

export function createHook<T>(obser: BehaviorSubject<T>) {
  return () => {
    const [val, setVal] = useState<T>()

    useEffect(() => {
      obser.subscribe(value => setVal(value))
    }, [val])

    return val!
  }
}

export function createHookObject<T>(obser: BehaviorSubject<T>) {
  return () => {
    const [val, setVal] = useState<T>()

    useEffect(() => {
      obser.subscribe(value => setVal({ ...value }))
    }, [val])

    return val!
  }
}

export function createHookArray<T>(obser: BehaviorSubject<T[]>) {
  return () => {
    const [val, setVal] = useState<T[]>()

    useEffect(() => {
      obser.subscribe(value => setVal([...value]))
    }, [val])

    return val!
  }
}

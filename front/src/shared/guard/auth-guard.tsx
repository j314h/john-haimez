import { store } from '@store/store'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

/**
 * guard for route of backoffice
 * @returns
 */
export function AuthGuard() {
  const token = store.token.useTokenUserCurrent()

  return !localStorage.getItem('nekto') && token === '' ? (
    <Navigate to='/login' replace />
  ) : (
    <Outlet />
  )
}

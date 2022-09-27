import { store } from '@store/store'
import React from 'react'

export function InfoUserMenuAvatar() {
  const user = store.user.useUserCurrent()

  return (
    <section className='px-4'>
      <p className='font-bold uppercase text-gray-700 dark:text-gray-300 text-lg'>
        {user.name}
      </p>
      <p className='mt-4 mb-2 font-thin italic text-gray-600 dark:text-gray-200'>
        {user.email}
      </p>
      <p className='font-thin text-gray-600 dark:text-gray-200'>
        Statu :
        <span className='italic font-medium'>
          {user.role ? ` ${user.role.libelle}` : ''}
        </span>
      </p>
    </section>
  )
}

import { T1 } from '@atoms/titles/t1'
import MenuUserCurrent from '@molecules/menu-user-current'
import { SectionSetting } from '@organisms/section-setting/section-setting'
import { store } from '@store/store'
import React from 'react'

export function DashboardPage() {
  const userCurrent = store.user.useUserCurrent()

  return (
    <section>
      <T1 addClass='text-center mb-8 md:mb-16'>
        {userCurrent.id ? `Bienvenu ${userCurrent.name!}` : ''}
      </T1>
      <SectionSetting />
    </section>
  )
}

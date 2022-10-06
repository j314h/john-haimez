import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { PencilIcon } from '@atoms/icons/pencil-icon'
import { store } from '@store/store'
import React from 'react'

export default function SettingBtnAction() {
  const displayForm = store.setting.useDisplayForm()

  return (
    <section className='flex justify-end'>
      <BtnIconPrimary
        click={() => store.setting.switchDisplayForm(displayForm)}>
        {displayForm ? (
          <CrossIcon color='text-red-500' />
        ) : (
          <PencilIcon color='text-action' size='w-6 h-6' />
        )}
      </BtnIconPrimary>
    </section>
  )
}

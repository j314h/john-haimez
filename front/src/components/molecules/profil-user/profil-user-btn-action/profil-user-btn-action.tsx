import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { PencilIcon } from '@atoms/icons/pencil-icon'
import { TrashIcon } from '@atoms/icons/trash-icon'
import { TooltipBasic } from '@atoms/tooltips/tooltip-sample/tooltip-sample'
import { store } from '@store/store'
import React from 'react'

export default function ProfilUserBtnAction() {
  const displayForm = store.profilUser.useDisplayForm()

  return (
    <section className='flex justify-end'>
      {/* btn update */}
      <BtnIconPrimary
        addClass='mr-3'
        click={() => store.profilUser.switchDisplayForm(displayForm)}>
        {displayForm ? (
          <CrossIcon color='text-red-500' />
        ) : (
          <PencilIcon color='text-action' size='w-6 h-6' />
        )}
      </BtnIconPrimary>

      {/* btn delete account */}
      <TooltipBasic
        dataTip='Supprimer mon compte'
        positionTip='tooltip-top'
        addClass='tooltip-error'>
        <BtnIconPrimary>
          <TrashIcon color='text-error' />
        </BtnIconPrimary>
      </TooltipBasic>
    </section>
  )
}

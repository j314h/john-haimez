import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { T3 } from '@atoms/titles/t3'
import SettingBtnAction from '@molecules/setting/setting-btn-action/setting-btn-action'
import { SettingForm } from '@molecules/setting/setting-form/setting-form'
import { SettingInfo } from '@molecules/setting/setting-info/setting-info'
import { store } from '@store/store'
import React from 'react'

export function SectionSetting() {
  const displayForm = store.setting.useDisplayForm()

  return (
    <ContainerPrimary model={EmodelContainer.s}>
      {/* btn action */}
      <SettingBtnAction />

      {/* title */}
      <T3 color='text-high' addClass='mb-8'>
        Règlages app
      </T3>

      {/* form setting or info setting */}
      {displayForm ? <SettingForm /> : <SettingInfo />}
    </ContainerPrimary>
  )
}

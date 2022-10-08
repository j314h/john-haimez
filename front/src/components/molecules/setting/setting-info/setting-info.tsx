import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TextInfoModel } from '@atoms/text-info-model/text-info-model'
import { store } from '@store/store'
import React from 'react'

export function SettingInfo() {
  const { setting } = store.setting.useSetting()

  return (
    <section>
      {setting.id ? (
        <div>
          {/* info copyright */}
          <LabelPrimary>Copyright : </LabelPrimary>
          <TextInfoModel>{setting.copyright}</TextInfoModel>
        </div>
      ) : (
        <TextInfoModel>Aucun réglage défini</TextInfoModel>
      )}
    </section>
  )
}

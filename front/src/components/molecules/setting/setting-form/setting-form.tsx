import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { ErrorText } from '@atoms/errors/error-text/error-text'
import { TrashIcon } from '@atoms/icons/trash-icon'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { T4 } from '@atoms/titles/t4'
import { BtnForm } from '@molecules/btn-form/btn-form'
import { InputFull } from '@molecules/input-full/input-full'
import { store } from '@store/store'
import React from 'react'

export function SettingForm() {
  const { setting, error, loading, valueCopyright, setValueCopyright } =
    store.setting.useSetting()

  /**
   * create or update setting
   * @param e event
   */
  const handlerFormSetting = async (e: React.FormEvent) => {
    store.setting.activeLoading()
    e.preventDefault()
    if (setting.id) {
      await store.setting.update(setting.id!, { copyright: valueCopyright })
    } else {
      await store.setting.create({ copyright: valueCopyright })
    }
    store.setting.disabledLoading()
  }

  const handlerClickDeleteSetting = async () => {
    store.setting.activeLoading()
    await store.setting.delete(setting.id!)
    store.setting.disabledLoading()
  }

  return (
    <section>
      {/* title */}
      <T4 addClass='flex items-center'>
        <span className='mr-2'>Créer - Modifier settings</span>
        {setting.id ? (
          <BtnIconPrimary click={handlerClickDeleteSetting}>
            <TrashIcon size='w-5 h-5' color='text-error' />
          </BtnIconPrimary>
        ) : (
          <div></div>
        )}
      </T4>

      {/* form */}
      <form onSubmit={handlerFormSetting}>
        {/* inputs */}
        <div className='mt-4 mb-8'>
          {/* input copyright */}
          <LabelPrimary>Copyright :</LabelPrimary>
          <InputFull
            value={valueCopyright}
            setValueInput={setValueCopyright}
            name='copyright'
            placeholder='Copyright'
            type='text'
            required
          />
        </div>

        {/* error form */}
        <ErrorText position='text-center sm:text-left mb-4'>
          {error.message}
        </ErrorText>

        {/* btn envoyer */}
        <div className='flex justify-end'>
          <BtnForm loading={loading}>Envoyer</BtnForm>
        </div>
      </form>
    </section>
  )
}

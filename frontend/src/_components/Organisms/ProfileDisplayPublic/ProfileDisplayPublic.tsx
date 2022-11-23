import React from 'react'
import { TprofileDisplayPublic } from '../../../types'
import { ProfileService } from '../../../_store'
import { LinkText } from '../../Atoms/Links/LinkText/LinkText'
import { SpinnerCircle } from '../../Atoms/Spinners/SpinnerCircle/SpinnerCircle'
import './ProfileDisplayPublic.css'

export function ProfileDisplayPublic({}: TprofileDisplayPublic) {
  const { error, loading } = ProfileService.useProfilesCall()
  const profile = ProfileService.useProfile()

  return (
    <section>
      {error.active ? (
        <p>En construction</p>
      ) : (
        <>
          {loading && error.active === false ? (
            <div className='flex justify-center'>
              <SpinnerCircle size='w-12 h-12' />
            </div>
          ) : (
            <>
              <div className='profile-title-box'>
                <div className='cadre-profile-style'></div>
                <div>
                  <h1 className='profile-title'>{profile.title}</h1>
                </div>
              </div>
              <p className='profile-sub-title'>{profile.subTitle}</p>
              <div className='flex justify-center mt-4 md:mt-8'>
                <LinkText link='/contact' arrowD>
                  En savoir plus
                </LinkText>
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

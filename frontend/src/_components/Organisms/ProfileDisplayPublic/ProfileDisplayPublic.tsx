import React, { useEffect } from 'react'
import { EtitlePrimary, TprofileDisplayPublic } from '../../../types'
import { ProfileService } from '../../../_store'
import { LinkText, SpinnerCircle, TitlePrimary } from '../../'
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
          {loading && !error.active ? (
            <div className='flex justify-center h-40'>
              <SpinnerCircle size='w-12 h-12' />
            </div>
          ) : (
            <>
              <div className='profile-title-box'>
                <div className='cadre-profile-style'></div>
                <div>
                  <TitlePrimary
                    typeTitlePrimary={EtitlePrimary.H1}
                    addClass='profile-title'>
                    {profile.title}
                  </TitlePrimary>
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

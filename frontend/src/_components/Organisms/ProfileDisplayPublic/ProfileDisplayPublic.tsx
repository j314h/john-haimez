import React, { useEffect } from 'react'
import { EtitlePrimary, TprofileDisplayPublic } from '../../../types'
import { AppService, ProfileService } from '../../../_store'
import { LinkText, TitlePrimary } from '../../'
import './ProfileDisplayPublic.css'

export function ProfileDisplayPublic({}: TprofileDisplayPublic) {
  ProfileService.useProfilesCall()
  const profile = ProfileService.useProfile()

  return (
    <section>
      {!profile ? (
        <div>Aucun profile</div>
      ) : (
        <>
          <div className='profile-title-box'>
            <div className='cadre-profile-style'></div>
            <div>
              <TitlePrimary
                typeTitlePrimary={EtitlePrimary.H1}
                addClass='profile-title'>
                {profile!.title}
              </TitlePrimary>
            </div>
          </div>
          <p className='profile-sub-title'>{profile!.subTitle}</p>
          <div className='flex justify-center mt-4 md:mt-8'>
            <LinkText link='/contact' arrowD>
              En savoir plus
            </LinkText>
          </div>
        </>
      )}
    </section>
  )
}

import { BriefCaseIcon } from '@atoms/icons/briefcase-icon'
import { DashboardIcon } from '@atoms/icons/dashboard-icon'
import { ProfilIcon } from '@atoms/icons/profil-icon'
import { SocialIcon } from '@atoms/icons/social-icon'
import { StudentIcon } from '@atoms/icons/student-icon'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { ElinkModel } from '@atoms/links/link-primary/link-primary.type'
import { store } from '@store/store'
import React from 'react'

export function MenuSide() {
  const stateMenuSide = store.app.useMenuSideActivate()

  return (
    <ul className='mt-4'>
      <li className='mb-6'>
        {stateMenuSide ? (
          <LinkPrimary link='/dashboard' model={ElinkModel.SEC}>
            Home
          </LinkPrimary>
        ) : (
          <LinkPrimary link='/dashboard' model={ElinkModel.ICON}>
            <DashboardIcon />
          </LinkPrimary>
        )}
      </li>
      <li className='mb-6'>
        {stateMenuSide ? (
          <LinkPrimary link='/dashboard/profile' model={ElinkModel.SEC}>
            Profil
          </LinkPrimary>
        ) : (
          <LinkPrimary link='/dashboard/profile' model={ElinkModel.ICON}>
            <ProfilIcon />
          </LinkPrimary>
        )}
      </li>
      <li className='mb-6'>
        {stateMenuSide ? (
          <LinkPrimary link='/dashboard/competence' model={ElinkModel.SEC}>
            Compétences
          </LinkPrimary>
        ) : (
          <LinkPrimary link='/dashboard/competence' model={ElinkModel.ICON}>
            <StudentIcon />
          </LinkPrimary>
        )}
      </li>
      <li className='mb-6'>
        {stateMenuSide ? (
          <LinkPrimary link='/dashboard/project' model={ElinkModel.SEC}>
            Projets
          </LinkPrimary>
        ) : (
          <LinkPrimary link='/dashboard/project' model={ElinkModel.ICON}>
            <BriefCaseIcon />
          </LinkPrimary>
        )}
      </li>
      <li className='mb-6'>
        {stateMenuSide ? (
          <LinkPrimary link='/dashboard/social' model={ElinkModel.SEC}>
            Réseaux
          </LinkPrimary>
        ) : (
          <LinkPrimary link='/dashboard/social' model={ElinkModel.ICON}>
            <SocialIcon />
          </LinkPrimary>
        )}
      </li>
    </ul>
  )
}

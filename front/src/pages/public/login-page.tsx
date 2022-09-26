import { SectionLogin } from '@organisms/section-login'
import { store } from '@store/store'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  return (
    <section>
      <SectionLogin />
    </section>
  )
}

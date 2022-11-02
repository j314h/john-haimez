import { Component, Match, onMount, Show, Suspense, Switch } from 'solid-js'
import { profileResource } from '../../../store/profile/profile.resource'
import { profileStore } from '../../../store/profile/profile.store'
import { SpinnerCircle } from '../../Atoms/Spinners/SpinnerCircle/SpinnerCircle'

export const SectionProfilePublic: Component<{}> = props => {
  onMount(() => {
    profileResource.getAllProfiles()
  })
  return (
    <section>
      <div>
        {/* info profile */}
        <div>
          <p>{profileStore.profile.title}</p>
          <p>{profileStore.profile.subTitle}</p>
          <p>{profileStore.profile.description}</p>
        </div>

        {/* image profile */}
        <div>
          <img src='' />
        </div>
      </div>
    </section>
  )
}

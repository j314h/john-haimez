import { Component } from 'solid-js'
import { LinkBrand } from '../../Atoms/Links/LinkBrand/LinkBrand'
import './LinkBrandFooter.css'

export const LinkBrandFooter: Component<{}> = props => {
  return (
    <div class='link-brand-footer'>
      {/* title */}
      <LinkBrand />

      {/* sub title */}
      <p class='sub-title-footer'>Développeur web</p>
    </div>
  )
}

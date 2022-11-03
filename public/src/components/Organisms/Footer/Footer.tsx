import { Component } from 'solid-js'
import { Copyright } from '../../Atoms/Copyright/Copyright'
import { LinkBrandFooter } from '../../Molecules/LinkBrandFooter/LinkBrandFooter'
import { NavFooter } from '../../Molecules/NavFooter/NavFooter'
import './Footer.css'

export const Footer: Component<{}> = props => {
  return (
    <footer class='footer-public'>
      <div class='link-footer'>
        {/* brand footer */}
        <LinkBrandFooter />

        {/* menu footer */}
        <NavFooter />
      </div>

      {/* copyright */}
      <Copyright />
    </footer>
  )
}

import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Sheda House Orogun Ibadan</p>
        <p className='p__opensans'>+234 810-795-1217</p>
        <p className='p__opensans'>+234 813-943-1050</p>
      </div>

      <div className='app__footer-links_logo'>
        <h1 style={{ color: 'var(--color-golden)' }}>AJ Baby</h1>
        <p className='p__opensans'>
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className='spoon__img'
          style={{ marginTop: 15 }}
        />
        <div className='app__footer-links_icons'>
          <a
            href='https://www.facebook.com/ajibola.adeyemo.969'
            target="_blank"
          >
            <FiFacebook />
          </a>
          <a href='https://twitter.com/Blinks_Crib' target="_blank">
            <FiTwitter />
          </a>
          <a href='https://www.instagram.com/blinks_crib/' target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>10:00 am - 7:00 pm</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>&#169; 2022 AJ Baby. All Rights reserved.</p>
    </div>
  </div>
)

export default Footer

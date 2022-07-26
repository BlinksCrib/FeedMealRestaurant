import React from 'react';

import { SubHeading} from '../../components'
import images from '../../constants/images'
import { wines, cocktails } from '../../constants'


import './Laurels.css';

const Laurels = () => (
  <div className='app__bg app__wrapper  section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />
    </div>
    <div className='app__wrapper_img'></div>
  </div>
)

export default Laurels;

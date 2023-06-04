import { USER_FIRST_NAME, USER_LAST_NAME } from '../../../constants/header.constant';
import { WHO_AM_I } from '../../../constants/greeting.constant';

import Typewriter from 'typewriter-effect';

import './Introduction.scss';

const Introduction = () => {
  return (
    <div className='introduction'>
      <div className='timeline'>
        <div className='dot'/>
        <div className='line'/>
      </div>
      <div className='description'>
        <div className='nav-item'>Start{'/>'}</div>
        <div>
          <div className='description-name'>Hi, my name is <span className='user-name'>{USER_FIRST_NAME} {USER_LAST_NAME}</span></div>
          <div className='description-type'>
            i am a
            <Typewriter
              options={{
                strings: WHO_AM_I,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className='extra'>
          Let me show You...
        </div>
      </div>
    </div>
  );
};

export default Introduction;

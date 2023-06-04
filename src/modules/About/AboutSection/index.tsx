import AboutDetails from '../AboutDetails';
import './AboutSection.scss';
import { ABOUT } from '../../../constants/about.constant';

const AboutSection = () => {
  return (
    <div className='about-section'>
      <div className='heading'>ABOUT {'/>'}</div>
      <div className='timeline'>
        <div className='line'/>
      </div>
      <div className='about-section-details'>
        <AboutDetails
          { ...ABOUT }
        />
      </div>
    </div>
  );
};

export default AboutSection;

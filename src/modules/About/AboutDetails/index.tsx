import './AboutDetails.scss';
interface IDetail {
  timeline: string;
  location: string;
}

interface IAboutDetails {
  username: string;
  dob: string;
  email: string;
  workExperiences: IDetail[];
  educations: IDetail[];
  skills: string[];
}

const AboutDetails = ({ username, dob, email, workExperiences, educations, skills }: IAboutDetails) => {
  return (
    <div className='about-details'>
      <div className='highlight'><span className='purple'>class</span> <span className='yellow'>{username}</span>{' {'}</div>
      <div className='highlight'><span className='dot'>··</span><span className='comment'>// I did, because I can.</span></div>
      <div><span className='dot'>··</span><span className='comment'>// My vast variety of skills is continuously expanding.</span></div>
      <div>
        <div><span className='dot'>..</span><span className='purple'>constructor</span>() {'{'}</div>
        <div><span className='dot'>....</span><span className='this'>this</span>.<span className='green'>name</span> <span className='this'>=</span> <span className='neon'>{`'${username}'`}</span>;</div>
        <div><span className='dot'>....</span><span className='this'>this</span>.<span className='green'>dayOfBirthTimestamp</span> <span className='this'>=</span> <span className='orange'>{`${dob}`}</span>; <span className='dot'></span><span className='comment'>// UNIX Timestamp.</span></div>
        <div><span className='dot'>....</span><span className='this'>this</span>.<span className='green'>email</span> <span className='this'>=</span> <span className='neon'>{`'${email}'`}</span>;</div>
        <div><span className='dot'>··</span>{'}'}</div>
      </div>
      <div>
        <div><span className='dot'>..</span><span className='yellow'>workExperience</span>() {'{'}</div>
        <div><span className='dot'>....</span><span className='purple'>return</span> {'['}</div>
        {
          workExperiences.map( wE => (
            <div><span className='dot'>......</span>{'{'} <span className='neon'>{`'${wE.timeline}'`}</span> : <span className='neon'>{`'${wE.location}'`}</span> {'},'}</div>
          ))
        }
        <div><span className='dot'>....</span>{'];'}</div>
        <div><span className='dot'>..</span>{'}'}</div>
      </div>
      <div>
        <div><span className='dot'>..</span><span className='yellow'>education</span>() {'{'}</div>
        <div><span className='dot'>....</span><span className='purple'>return</span> {'['}</div>
        {
          educations.map( education => (
            <div><span className='dot'>......</span>{'{'} <span className='neon'>{`'${education.timeline}'`}</span> : <span className='neon'>{`'${education.location}'`}</span> {'},'}</div>
          ))
        }
        <div><span  className='dot'>....</span>{'];'}</div>
        <div><span className='dot'>..</span>{'}'}</div>
      </div>
      <div>
        <div><span className='dot'>..</span><span className='yellow'>skills</span>() {'{'}</div>
        <div><span className='dot'>....</span><span className='purple'>return</span> {'['}</div>
        {
          skills.map( skill => (
            <div><span className='dot'>......</span><span className='neon'>{`'${skill}'`}</span>{','} </div>
          ))
        }
        <div><span className='dot'>....</span>{'];'}</div>
        <div><span className='dot'>..</span>{'}'}</div>
        <div>{'}'}</div>
      </div>
    </div>
  );
};

export default AboutDetails;

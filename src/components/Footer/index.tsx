import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='timeline'>
          <div className='line'/>
          <div className='dot'/>
      </div>
      <div className='footer-content'>
        <span className='end'>End{'/>'}</span> &copy; Made with {'</>'} by Rahul, {currentYear}.
      </div>
    </div>
  );
};

export default Footer;

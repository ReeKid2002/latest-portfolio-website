import './Header.scss'

interface INavItem {
  label: string;
  link: string;
}

interface IHeader {
  name: string;
  navItems: INavItem[];
}

const Header = ({ name, navItems }: IHeader) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  return (
    <div className="header">
      <div className="header-name" onClick={() => handleScroll('start')}>
        <span className="header-name-start">
          {'<'}
        </span>
        <span className="header-name-mid">
          {name}
        </span>
        <span className="header-name-end">
          {' />'}
        </span>
      </div>
      <div className="header-navs">
        {
          navItems.map( navItem => {
            return <div className='header-nav' onClick={() => handleScroll(navItem.link)}>
                {navItem.label}
                <span className='header-nav-symbol'>{'/>'}</span>
              </div>
          })
        }
      </div>
    </div>
  );
};

export default Header;

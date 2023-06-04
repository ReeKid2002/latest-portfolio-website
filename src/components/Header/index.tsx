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
  return (
    <div className="header">
      <div className="header-name">
        <a href='#'>
          <span className="header-name-start">
            {'<'}
          </span>
          <span className="header-name-mid">
            {name}
          </span>
          <span className="header-name-end">
            {' />'}
          </span>
        </a>
      </div>
      <div className="header-navs">
        {
          navItems.map( navItem => {
            return <a href={navItem.link}>
              <div className='header-nav'>
                {navItem.label}
                <span className='header-nav-symbol'>{'/>'}</span>
              </div>
            </a>
          })
        }
      </div>
    </div>
  );
};

export default Header;

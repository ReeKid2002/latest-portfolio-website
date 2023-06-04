import './Start.scss';
import { USER_FIRST_NAME, NAV_LINKS } from "../../constants/header.constant";
import { Header } from "../../components";
import Introduction from './Introduction';

const Start = () => {
  return (
    <div className="start" id='start'>
      <Header
        name={USER_FIRST_NAME}
        navItems={NAV_LINKS}
      />
      <Introduction />
    </div>
  );
};

export default Start;

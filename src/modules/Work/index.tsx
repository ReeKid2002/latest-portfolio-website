import './Work.scss';
import { WORKS } from '../../constants/work.constants';
import WorkCardHolder from './WorkCardHolder';

const Work = () => {
  return (
    <div className="work" id='work'>
      <WorkCardHolder
        works={WORKS}
      />
    </div>
  )
}

export default Work;

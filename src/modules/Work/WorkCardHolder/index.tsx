import './WorkCardHolder.scss';
import { WorkCard } from '../../../components';
import { IWorkCard } from '../../../components/WorkCard';
import MacBook from '../../../components/WorkCard/MacBook';


interface IWorkCardHolder {
  works: IWorkCard[]
}

const WorkCardHolder = ({ works }: IWorkCardHolder) => {
  return (
    <div className='work-card-holder'>
      <div className='heading'>WORK {'/>'}</div>
      <MacBook />
      <div className='work-cards'>
        {
          works.map(work => (
            <WorkCard
              image={work.image}
              title={work.title}
              link={work.link}
            />
          ))
        }
      </div>
    </div>
  );
};

export default WorkCardHolder;

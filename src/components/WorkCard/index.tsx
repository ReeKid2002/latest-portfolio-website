import './WorkCard.scss';

interface IWorkCard {
  title: string;
  image: string;
  link: string;
}

const WorkCard = ({title, image, link}: IWorkCard) => {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <div className='work-card' >
        <div className='work-card-title'>
          <div className='title'>{title}</div>
          <div className='underline'/>
        </div>
        <div className='work-card-image'>
          <img alt={title} src={image} height='100%' width='100%'/>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;

export { type IWorkCard };

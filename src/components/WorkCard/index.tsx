import './WorkCard.scss';

interface IWorkCard {
  title: string;
  image: string;
  link: string;
}

const WorkCard = ({title, image, link}: IWorkCard) => {
  return (
      <div className='work-card'>
        <div className='work-card-image'>
          <img alt={title} src={image} height='100%' width='100%'/>
        </div>
        <div className='work-card-title'>
          <div className='title'>{title}</div>
          <a href={link} target='_blank' rel="noreferrer"><div className='button'>GitHub</div></a>
        </div>
      </div>
  );
};

export default WorkCard;

export { type IWorkCard };

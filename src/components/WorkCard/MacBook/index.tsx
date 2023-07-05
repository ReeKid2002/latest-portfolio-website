import './macBook.scss';
import macBook from '../../../assets/icons/svg/macbook.svg';
const MacBook = (): JSX.Element => {
  return (
    <div className='macbook'>
      <img src={macBook} alt="macbook"/>
      <div className='macbook-content'>
        <img src={require('../../../assets/images/work/project1.png')}/>
      </div>
    </div>
  );
};

export default MacBook;

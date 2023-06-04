import { useState, useEffect } from "react";
import { GREETING } from "../../constants/greeting.constant";
import './Loading.scss';

interface ILoading {
  index: number;
}

const Loading = ({ index }: ILoading) => {
  return (
    <div className={`loading ${ index === GREETING.length - 1 ? 'remove-loader' : '' }`}>
      <div className='greeting'><div className="dot" />{GREETING[index]}</div>
    </div>
  );
};

export default Loading;

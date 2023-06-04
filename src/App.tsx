import './App.css';
import { useEffect, useState } from 'react';

import { About, Contact, Loading, Start, Work } from './modules';
import { GREETING } from './constants/greeting.constant';

function App() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index >= GREETING.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 300);
  }, [index]);

  useEffect(() => {
    document.title = 'Rahul Behera';
  }, []);

  return (
    <div className={`App ${index < GREETING.length - 1 ? 'not-scroll' : ''}`}>
      <Loading
        index={index}
      />
      <Start />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;

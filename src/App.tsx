import './App.css';
import { Footer } from './components';

import { About, Contact, Start, Work } from './modules';

function App() {
  return (
    <div className="App">
      <Start />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;

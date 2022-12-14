import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Page } from '../src/stories/Page';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex w-full justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="mb-10 block">Vite + React</h1>
      <div className="card mb-10">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="text-gray-400 mb-4">
        Click on the Vite and React logos to learn more
      </p>
      <Page />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EntrySection from './components/EntrySection/EntrySection';
import Scheduler from './components/Scheduler/Scheduler';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="1" element={<EntrySection />} />
          <Route path="2" element={<Scheduler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

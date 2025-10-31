import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntroMain from './pages/IntroMain';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IntroMain />} />
    </Routes>
  </BrowserRouter>
);

export default App;

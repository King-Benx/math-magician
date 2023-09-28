import {
  Route, BrowserRouter, Routes, Navigate,
} from 'react-router-dom';
import { Calculator } from './components/Calculator';
import FetchQuotes from './components/FetchQuotes';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<FetchQuotes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

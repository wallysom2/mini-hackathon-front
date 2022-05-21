import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home';

import Questions from './Questions';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>)
}

export default App;

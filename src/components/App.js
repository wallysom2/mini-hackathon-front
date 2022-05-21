import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home';
import Questions from './Questions';
import AddQuestion from './AddQuestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/add-question" element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>)
}

export default App;

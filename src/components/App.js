import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from './Login'
=======
import Home from './Home';

import Questions from './Questions';
>>>>>>> 9c28536841bc5c4906ae840381d89f6dc34be784

function App() {
  return(
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
=======
        <Route path="/questions" element={<Questions />} />
>>>>>>> 9c28536841bc5c4906ae840381d89f6dc34be784
      </Routes>
    </BrowserRouter>)
}

export default App;

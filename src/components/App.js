import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Questions from './Questions';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>)
}

export default App;

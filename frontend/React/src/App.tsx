import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import CreateBook from './components/Create.tsx';
import UpdateBook from './components/Update.tsx';
import ReadBook from './components/Read.tsx';
import Delete from './components/Delete.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/update/:id' element={<UpdateBook />} />
        <Route path='/read/:id' element={<ReadBook />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

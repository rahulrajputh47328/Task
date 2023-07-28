import React,{BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import './App.css';

import Student from './components/Student';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link className='stud' to="/Student">student</Link>
        <Link className='book' to="/Book">book</Link>
      </nav>
      <Routes>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/book" element={<Book></Book>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;



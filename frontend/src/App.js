import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './components/CreateStudent';
import AllStudents from './components/AllStudents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (


    <Router>

      <div>
        <Header />

        <Routes>
          <Route path="/add" element={<CreateStudent />} />
          <Route path="/" element={<AllStudents />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
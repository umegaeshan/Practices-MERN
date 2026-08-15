import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './components/CreateStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (


    <Router>

      <div>
        <Header />

        <Routes>
          <Route path="/add" element={<CreateStudent />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
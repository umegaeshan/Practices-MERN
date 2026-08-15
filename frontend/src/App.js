import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './components/CreateStudent';


function App() {
  return (
    // Container eken page eka center karanawa
   <div>
      <Header />
      <CreateStudent />
   </div>
  );
}

export default App;
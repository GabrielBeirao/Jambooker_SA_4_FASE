import React from 'react';
import ReactDOM from 'react-dom/client';

import Map from './Map';
import Studios from './Studios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Map />} />
        <Route path='/studios/:studiosId' element={<Studios />} />
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);




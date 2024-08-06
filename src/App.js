import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail/:id" element={<Mail />} /> {/* Dynamic route for Mail */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

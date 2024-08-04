// import React from 'react';

// import './App.css';
// import Header from "./Header";
// import Sidebar from './Sidebar';
// import Mail from './Mail';
// import EmailList from './EmailList';
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



// function App() {
//   return (
//     <Router>
//     <div className="app">
//       <Header />

//       <div className="app__body">
//       <Sidebar/>
//       <Switch>
//         <Route path ="/mail">
//         <Mail/>
//         </Route>
//         <Route path="/">
//         <EmailList/>
//         </Route>
//       </Switch>
//       </div>
//     </div>
//     </Router>
//   );
// }

// export default App;

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
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

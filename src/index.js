import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (

  <Router>
    <Switch> 
      <Route path="/" component={App} />
    </Switch>
  </Router>

)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

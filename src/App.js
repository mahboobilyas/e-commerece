import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="app">
<Switch>
<Route path="/checkout">
<h1>checkout</h1>
</Route>
<Route path="/login">
<h1>login</h1>
</Route>
<Route path="/">
<h1>home</h1>
</Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/userContext/userContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div className="app">
      <UserProvider>
      <Router>
        <Switch>
        <Route path="/create/">
            <Create></Create>
          </Route>
          <Route path="/edit/:id">
            <Edit></Edit>
          </Route>
          <Route path="/read/:id">
            <Read></Read>
          </Route>
          <Route path="/delete/:id">
            <Delete></Delete>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserProvider>
      
    </div>
  );
}

export default App;

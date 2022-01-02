import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CategoryResults from './pages/CategoryResult/CategoryResults';
import Home from './pages/Home/Home';



function App() {
  return (
    <>
      <Router>
         <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/products/:category">
              <CategoryResults/>
            </Route>
         </Switch>
      </Router>
    </>
  );
}

export default App;

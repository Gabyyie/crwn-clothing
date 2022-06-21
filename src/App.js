import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import shopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={shopPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

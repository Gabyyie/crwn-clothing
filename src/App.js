import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import shopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './header/header.component';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={shopPage}/>
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

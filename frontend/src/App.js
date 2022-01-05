
import './App.css';
import Login from './components/login';
import {Route } from 'react-router-dom' ; 
import Register from './components/register';
function App() {
  return (
    <div >
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </div>
  );
}

export default App;

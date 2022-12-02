import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PageLayout from './components/PageLayout'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' render={()=> <PageLayout /> } />
      </Switch>      
    </>
  );
}

export default App;

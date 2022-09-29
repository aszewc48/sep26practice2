import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Greeting firstName='Bob' location={{ city: 'Unknown',state: 'Unknown'}}/>
      </NavBar>
      <Greeting firstName='Dustin' week={6} location={{ city: 'Miami', state: 'FL'}}/>
      <hr />
      <Greeting firstName='Amanda' week={10} location={{ city: 'Miami', state: 'MO'}}/>
      <hr />
      <Greeting firstName='Drew' lastName='Habinger' week={3} location={{ city: 'Miami', state: 'PA'}}/>
      <hr />
    </div>
  );
}

export default App;

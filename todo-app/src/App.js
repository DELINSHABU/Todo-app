import Profile from './profile.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
     <h1>Todo list</h1>
      <img src={Profile} alt='profile-img'></img>
      </div>
      <div className='Todo-list'>
        <ul>
          <li>Buy groceries</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

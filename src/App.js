
import logo from './logo.svg';
import './App.css';
import MyNavbar from './component/MyNavbar';
import MyButton from './component/MyButton';
import { useState } from 'react';

const App = () => {
  
  const [getNavbar, setNavbar] = useState("");
  const addName = () => {
      setNavbar("andi muafak");
  }


  return (
    <div className='app'>
      <MyNavbar navText={getNavbar}/>
      <MyButton onClick={addName}/>
    </div>
  );
}

export default App;

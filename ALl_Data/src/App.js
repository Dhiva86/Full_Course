import { useSelector } from 'react-redux';
import './App.css';
import Loginform from './Components/Loginform';
import NavBar from './Components/NavBar';
import Theme from './Components/Theme';

function App() {
  const color = useSelector(state=>state.themeInfo.data)
  
  return (
    <div className={color}>
      <Theme/>
    <NavBar/>
    <Loginform/>
    </div>
  );
}

export default App;

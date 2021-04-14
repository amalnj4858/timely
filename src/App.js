import './App.css';
import Header from './components/Header/Header.js';
import Signinpage from './pages/Signinpage/Signinpage.js';

const App =()=> {
  return (
    <div className="App">
      <Header/>
      <Signinpage/>
    </div>
  );
}

export default App;

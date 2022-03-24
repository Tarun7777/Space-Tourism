import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Home from './components/home/organisms/index'
import './App.css';

function App() {
  return (
    <div id='app'>
      <NavigationBar isMain />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' />
        <Route path='/crew' />
        <Route path='/technology' />
        <Route path='*' />
      </Routes>
    </div>
  );
}

export default App;

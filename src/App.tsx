import './App.css';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div className='website'>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='flex  '>
        <Sidebar />
        <div className=' bg-blue-800'></div>
      </div> 
    </div>
  );
}

export default App;

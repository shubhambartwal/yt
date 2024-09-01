import './App.css';
import Body from './Components/Body';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Watch from './Components/Watch';
import Feed from './Components/Feed';
const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
      {
    path:"/watch",
    element:<Watch/>
    }]
  }
])
function App() {
  return (<div>
   <Navbar/>
   <RouterProvider router={appRouter} />
  </div>
  );
}

export default App;

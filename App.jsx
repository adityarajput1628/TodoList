import './App.css';
import TodoList from './TodoList';
import TopHeader from './components/TopHeader';

/*import {
  createBrowserRouter,
  RouterProvider,
  Route,
  link,
} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import ContactUs from './pages/ContactUs';*/

/*const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact-us",
    element: <ContactUs/>,
  },
]);*/


function App() {


  return (
    /*<RouterProvider router={router} />*/
    <>
    <TodoList/>
      
    </>
  );
}

export default App;

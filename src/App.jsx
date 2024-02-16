import { RouterProvider } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import { router } from "./Routes/Router";


function App() {

  return <RouterProvider router={router} />;
}

export default App;

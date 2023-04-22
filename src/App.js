
import { About } from "./components/About";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { HomePage } from "./components/HomePage";

const router = createBrowserRouter([
  { path: '/about', element: <About /> },
  { path: '/', element: <ProductPage /> },
  { path: '/home', element: <HomePage /> }
])

function App() {


  return (
    <>

      <RouterProvider router={router} />

    </>
  );
}

export default App;

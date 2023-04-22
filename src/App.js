
import { About } from "./components/About";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";

const router = createBrowserRouter([
  { path: '/about', element: <About /> },
  { path: '/', element: <ProductPage /> }
])

function App() {


  return (
    <>

      <RouterProvider router={router} />

    </>
  );
}

export default App;

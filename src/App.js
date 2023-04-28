import { About } from "./components/About";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { HomePage } from "./components/HomePage";
import { Contact } from "./components/Contact";




function App() {


  return (
    <>

      <Route exact path='/'>
        <ProductPage />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/home'>
        <HomePage />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>


    </>
  );
}

export default App;
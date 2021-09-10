import { Fragment } from 'react';
import Crud from './components/Crud/Crud';
import Persona from './components/Persona/Index';
import Producto from "./components/Producto/Index"
import IndexSubCategoria from './components/SubCategoria/IndexSubCategoria';


function App() {
  
  
  return (
    <Fragment>
        {/* <Crud/> */}
        {/* <Producto/> */}
        {/* <Persona/> */}
        <IndexSubCategoria/>
    </Fragment>
  );
}

export default App;

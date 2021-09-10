import React,{Fragment,useState} from 'react'
import FormSubCategoria from './FormSubCategoria';
import TableSubCategoria from './TableSubCategoriaRow';

const initState = [];


const IndexSubCategoria = () => {

    const [data, setData] = useState(initState)
    const [dataToEdit, setDataToEdit] = useState(null)


    const createSubCategoria = (newSubCategoria) => {
        setData([...data,newSubCategoria]);
    }

    const updateSubCategoria = (subCategoria) => {
        let newData = data.map((element)=> data.id === subCategoria.id ? subCategoria : element )
        setData(newData);
    }
    
    const deleteSubCategoria = (id) => {
        
    }
    
    return (
        <Fragment>
             <FormSubCategoria
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                updateSubCategoria={updateSubCategoria}
                createSubCategoria={createSubCategoria}
             />   
             <TableSubCategoria 
                setDataToEdit={setDataToEdit}
                deleteSubCategoria={deleteSubCategoria}
                data={data}
             />       
        </Fragment>
    )
}

export default IndexSubCategoria

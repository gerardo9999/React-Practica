import React,{useState} from 'react'
import TableForm from './TableForm'
import TablePersona from './TablePersona'

const initData = [
    { id : 1, nombre : 'Rodrigo', apellidos : 'Sanchez Cahvez', telefono : '76554323',direccion : 'Calle/Bolivar #233'}
]

const Persona = () => {
    const [dbData, setDbData] = useState(initData)
    const [dataToEdit, setDataToEdit] = useState(null)


    const createPersona = (data) => {
        data.id = Date.now();
        setDbData([...dbData,data]);
        console.log(data);
        console.log("Guardar");
    }

    const updatePersona = (data) => {
        let newData = dbData.map(elemento=> data.id === elemento.id ? data : elemento);
        setDbData(newData);
    }

    const deletePersona = (id) => {
        console.log(id);
    }

    return (
        <div>
            <TablePersona 
                data={dbData}
                setDataToEdit={setDataToEdit}
                deletePersona={deletePersona}
            />
            <TableForm
               dataToEdit={dataToEdit}
               setDataToEdit={setDataToEdit}
               createPersona={createPersona}
               updatePersona={updatePersona} 
            />
        </div>
    )
}

export default Persona

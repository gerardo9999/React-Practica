import React, { useState } from 'react'

import CrudTable from './CrudTable'
import CrudForm from './CrudForm'


const initialDB = [
    { id: 1, name: "React", type: "FrontEnd" },
    { id: 2, name: "Angular", type: "BackEnd" },
    { id: 3, name: "Laravel", type: "BackEnd" },
    { id: 4, name: "Synfony", type: "BackEnd" },
    { id: 5, name: "Vue", type: "FrontEnd" },
    { id: 6, name: "Livewire", type: "FullStack" },
    { id: 7, name: "Ionic", type: "FrontEnd" }
];

const Crud = props => {

    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    

    const createData = (data) => {
        data.id = Date.now();
        console.log(data);
        setDb([...db,data]);
    }

    const updateData = (data) => {
        
    }

    const deleteData = (id) => {
        console.log(id);
    }

    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm 
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}                
            />
            <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    )
}

export default Crud
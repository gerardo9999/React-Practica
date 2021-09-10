import React from 'react'

function TablePersonaRow({elemento,setDataToEdit,deletePersona}) {
    return (
        <tr>
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.apellidos}</td>
            <td>{elemento.telefono}</td>
            <td>{elemento.direccion}</td>
            <td>
                <button onClick={()=> {setDataToEdit(elemento)}}>Editar</button>                
                <button onClick={()=> {deletePersona(elemento.id)}}>Eliminar</button>                
            </td>
        </tr>
    )
}

export default TablePersonaRow

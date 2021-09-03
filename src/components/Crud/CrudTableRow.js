import React, { Fragment } from 'react';

const CrudTableRow = ({ el , setDataToEdit, deleteData}) => {
    let {name, type,id} = el

    return (
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                    <button type="button" onClick={()=>setDataToEdit(el)}>Editar</button>
                    <button type="button" onClick={()=>deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </Fragment>
    )
}

export default CrudTableRow
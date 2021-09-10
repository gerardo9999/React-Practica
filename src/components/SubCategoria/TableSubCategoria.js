import React, { Fragment } from 'react'
import TableSubCategoriaRow from './TableSubCategoriaRow'

const TableSubCategoria = ({data,setDataToEdit,deleteSubCategoria}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SUB CATEGORIA</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <Fragment>

                        </Fragment>
                    ) : (
                       data.map((element) => {
                           return (
                                <TableSubCategoriaRow 
                                    key={element.id}
                                    element={element}
                                    setDataToEdit = {setDataToEdit}
                                    deleteSubCategoria={deleteSubCategoria}
                                />
                           )
                       })
                    )
                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableSubCategoria

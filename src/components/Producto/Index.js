import React from 'react'
import TableProducto from '../Producto/Table'
import {useState} from 'react';
import FormProducto from './Form';


const initProductoDb = [
    {id : 1, name: "RADIO", precio : 100 , descripcion : "sin descripcion"},
    {id : 2, name: "RADIO", precio : 200 , descripcion : "sin descripcion"},
    {id : 3, name: "USB", precio : 350 , descripcion : "sin descripcion"},
    {id : 4, name: "MEMORY", precio : 200 , descripcion : "sin descripcion"},
    {id : 5, name: "BLUE RAY", precio : 200 , descripcion : "sin descripcion"},
    {id : 6, name: "TV", precio : 300 , descripcion : "sin descripcion"},
    {id : 7, name: "CELULAR", precio : 170 , descripcion : "sin descripcion"}
];

const IndexProducto = () => {
    const [dataProducto, setDataProducto] = useState(initProductoDb);
    const [isEdit, setIsEdit] = useState(false);

    const createProducto = (data) => {
        data.id = Date.now();
        console.log(data);
        setDataProducto([...dataProducto,data]);
    }

    const updateProducto = (data) =>{

    }

    const deleteProducto = (id) => {
        alert(id);
    }

    return (
        <div>
            <TableProducto 
                data ={dataProducto}
                deleteProducto={deleteProducto}
            />
            <FormProducto 
                createProducto={createProducto}
                updateProducto={updateProducto}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
            />
        </div>
    )
}

export default IndexProducto

import React,{useState,useEffect, Fragment} from 'react'

const initForm = {
    id : null,
    nombre : ""
}


const FormSubCategoria = ({setDataToEdit,dataToEdit,createSubCategoria,updateSubCategoria}) => {
    const [form, setform] = useState(initForm)
    
    useEffect(() => {
        if (dataToEdit) {
            setform(dataToEdit)
        } else {
            setform(initForm)
        }        

    }, [dataToEdit]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (form.id == null){
            createSubCategoria(form);
        }else{
            updateSubCategoria(form);
        }
        handleReset();
    }

    const handleChange = (e) => {
        setform({
            ...form, 
            [e.target.name] : [e.target.value]
        });
    }
    const handleReset = () => {
        setform(initForm);
        setDataToEdit=null;
    }
    
    return (
        <Fragment>
            <form onSubmit={handleOnSubmit}> 
                <input name="nombre" type="text" onChange={handleChange} value={form.nombre}/>
               <button type="submit">
                   Guardar
               </button>
            </form>
        </Fragment>
    )
}

export default FormSubCategoria

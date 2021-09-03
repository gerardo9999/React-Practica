import React, {useState , useEffect} from "react";

const initForm = {
    name : "",
    type : "",
    id : null,
}



const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    const [form, setForm] = useState(initForm)

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name] : [e.target.value]
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if (!form.name  || !form.type ) {
            alert("Datis incompletos");
            return ;
        }

        if (form.id === null) {
            // console.log(form);
            createData(form);
        }else{
            updateData(form)
        }
        handleReset();
    }
    
    const handleReset = (e) => {
        setForm(initForm);
        setDataToEdit(null);
    }

    

    return (
        <>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={form.name} name="name" placeholder="Nombre"/>
                <input type="text" onChange={handleChange} value={form.type} name="type" placeholder="tipo"/>
                <input type="submit" value="enviar"onClick={handleSubmit}/>
                <input type="reset" value="limpiar" onClick={handleReset}/>
            </form>
        </>
    )
}

export default CrudForm;
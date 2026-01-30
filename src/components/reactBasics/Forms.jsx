import React, { useState } from 'react';

const Forms = () => {
    
const [data, setData] = useState({
    mail:"",
    password:"",
    address:""
});

const handleSave = (e) => {
    e.preventDefault();
    console.log(data)
}

const handleChange = (e) => {
     const { name, value } = e.target;
    setData( prevData => ({...prevData,[name]:value }))
}
    
return(<>
    <form onSubmit={handleSave}>
        <input type="mail" 
                value={data.mail}
                onChange={handleChange}
                name='mail'

        />
        <input type="password" 
                value={data.password}
                onChange={handleChange}
                name="password"

        />
          <input type="text" 
                value={data.address}
                onChange={handleChange}
                name="address"

        />
        <button type="submit">Submit</button>

    </form>
    </>)
};

export default Forms;
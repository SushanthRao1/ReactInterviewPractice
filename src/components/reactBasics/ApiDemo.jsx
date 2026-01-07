import React, {useEffect, useState} from 'react';

const APIDemo = () =>{

    const [dataList, SetDataList] = useState([]);    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp => resp.json())
        .then(data => SetDataList(data));
    }, [])

    const deleteList = (id) => {
        const updatedList = dataList.filter(data => data.id !== id);
        console.log(updatedList);
        SetDataList(updatedList);
    }

    return <>
        {dataList.map( (list) => (
            <li key={list.id} onClick={() => deleteList(list.id)}>{list.title}</li>
        ))
        }
    </>
}

export default APIDemo;
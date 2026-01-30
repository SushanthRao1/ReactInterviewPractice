import React, { useState, useEffect } from 'react';

const useCustomeHook = (url, dataPath) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fectDetails = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                const data = await response.json();
                setData(dataPath(data));
            }
            catch (error) {
                console.log('Something Went Wrong');
            }
        }
        fectDetails();
    }, [url, dataPath]);

    return data;
};


const CustomeHook = () => {
    const [filterValues, setFilterValues] = useState([]);
    const datalist = useCustomeHook('https://dummyjson.com/products', res112 => res112.products);

    const searchVlues=(e) =>{
    const itemlist = e.target.value;
    const filterdItems = datalist.filter(data => data.title.includes(itemlist));
    setFilterValues(filterdItems);
    }

    const renderList = filterValues.length ? filterValues : datalist
    return (<div>
        <input type='text'
           onChange={searchVlues}
        />
        {renderList.map(list => <p key={list.id}>{list.title}</p>)}
    </div>)
};

export default CustomeHook;
import React, { useState, useEffect } from 'react';
import useAPIFectch from './CustomeHook/FetchAPIHook'

const CustomeHook = () => {
    const [filterValues, setFilterValues] = useState([]);
    const datalist = useAPIFectch('https://dummyjson.com/products', res112 => res112.products);

    const searchVlues = (e) => {
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
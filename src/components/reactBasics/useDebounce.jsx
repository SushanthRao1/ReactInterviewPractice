import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash.debounce';

const Debounce = () => {
    const [inputValue, setInputValue] = useState('');
    const [APIData, setAPIData] = useState([]);
    const [loading, setLoading] = useState(false);

    const APICall = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setAPIData(data));
        setLoading(false);
    }

    useEffect(() => {
        if (inputValue !== "") {
            const timer = setTimeout(() => {
                APICall()
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [inputValue])

    console.log(APIData)
    const triggerAPI = (value) => {
        setInputValue(value)
    }

    return <>
        <input style={{ padding: '10px', margin: '10px' }}
            type='text'
            value={inputValue}
            onChange={(e) => triggerAPI(e.target.value)}
            placeholder='Enter min 3 vlaues' >
        </input>
        <div>
            <ul style={{ padding: '10px', margin: '10px' }}>user name</ul>
            {loading && 'API is loading'}
            <ul>{APIData.map((data) => (data.name))}</ul>
        </div>
    </>
}

export default Debounce
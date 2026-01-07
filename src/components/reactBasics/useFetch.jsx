import { useEffect, useState } from 'react';
import axios from 'axios';

//Custom Hook
export default function UseFectch(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data));
    });
    return data;
}
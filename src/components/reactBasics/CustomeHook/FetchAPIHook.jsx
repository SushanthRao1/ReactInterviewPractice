import React, { useState, useEffect } from 'react';

const useAPIFectch = (APIurl, responsePath) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        const { signal } = controller;

        const fetchAPI = async () => {
            try {
                const response = await fetch(APIurl, { signal });
                const APIData = await response.json();
                const APIJSON = responsePath ? responsePath(APIData) : APIData

                setData(APIJSON);
            } catch (error) {
                console.log('Something went Wrong');
            }
        }
        fetchAPI();
        return () => {
            controller.abort();
        };
    }, [APIurl, responsePath])

    return data;
};

export default useAPIFectch;

// const useCustomeHook = (url, dataPath) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fectDetails = async () => {
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error('Something went wrong')
//                 }
//                 const data = await response.json();
//                 setData(dataPath(data));
//             }
//             catch (error) {
//                 console.log('Something Went Wrong');
//             }
//         }
//         fectDetails();
//     }, [url, dataPath]);

//     return data;
// };





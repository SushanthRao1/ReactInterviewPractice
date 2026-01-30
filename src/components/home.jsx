import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePageComp = () => {

    const navgate = useNavigate();
    const list = ['TodoList','APIDemo', 'Calculator', 'Classcomp', 'Eventchange', 'Movie', 'Debounce', 'UseReducer', 'PromisesAsyncAwait', 'EHome', 'Ecart', 'Forms', 'CustomeHook'];

    const handlerRecirect = (item) =>{
        navgate(`/${item}`)
    }

    return (<>
        {list.map((item, index) => 
            <button style={{padding:'10px', margin: '10px'}} key={index} onClick={() => handlerRecirect(item)} > {item}</button>
        )
        }
    </>
    )

}
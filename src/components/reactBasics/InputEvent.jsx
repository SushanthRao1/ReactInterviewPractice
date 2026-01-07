import React, {useState} from 'react';

const EveneChange = () => {

        const [givenNumber, setGivenNumber] = useState(0);
        const [findcase, setFindCase] = useState("");

    const EventValufn = (e) =>{
        setGivenNumber(e.target.value)
        if(e.target.value % 2 === 0) {
            return setFindCase('Even')
        }
        else {
            return setFindCase('Odd')
        }
    }
    
    return <>
    <input onChange={(e) => EventValufn(e)} type='Number' value={givenNumber}></input>
    'This is event component' {findcase}
    </>
}

export default EveneChange
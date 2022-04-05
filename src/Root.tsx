import React, {useEffect, useState} from 'react';
import {RenderCountComponent} from './RenderCountComponent';

export const Root = (props: any) => {
    const [arr, setArr] = useState([0])

    useEffect(() => {
        setTimeout(() => {
            setArr(arr.map(el => el))
        }, 2000)
    }, [arr])

    return (
        <>
            <App arr={arr}/>
            <RenderCountComponent {...props}/>
        </>
    )
}


const App = (props: any) => {
    return (
        <>
            <RenderCountComponent {...props}/>
        </>
    )
}

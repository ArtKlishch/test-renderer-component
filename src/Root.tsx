import React, {useEffect, useState} from 'react';
import {useRenderCount} from './useRenderCount';
import {Stack} from '@mui/material';


export const Root = () => {
    const [arr, setArr] = useState([0])

    useEffect(() => {
        setTimeout(() => {
            setArr(a => [...a, 1])
        }, 1000)

    }, [arr])
    const render = useRenderCount()
    return (
        <>
            <App arr={arr}/>
            {render}
        </>
    )
}


const App = (props: any) => {
    const render = useRenderCount(props)
    return (
        <>
            {<Stack>
                Parent Render Count: {render}
            </Stack>}
        </>
    )
}

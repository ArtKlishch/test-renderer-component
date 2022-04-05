import {Count, RenderCount, StyledButton} from './styles';
import React, {useEffect, useState} from 'react';


export const RenderCountComponent = React.memo((props) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(c => c + 1)
    }, [props])

    return (
        <RenderCount>
            <Count>
                {count}
            </Count>
            <StyledButton
                variant="contained"
                color="success"
                onClick={() => setCount(c => c + 1)}
            >
                Render
            </StyledButton>
        </RenderCount>
    )
})
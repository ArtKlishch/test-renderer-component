import {Count, RenderCount, StyledButton} from './styles';
import React, {useEffect, useState} from 'react';


export const RenderCountComponent = React.memo((props) => {

    const [render, setRender] = useState(0)

    useEffect(() => {
        setRender(c => c + 1)
    }, [props])

    return (
        <RenderCount>
            <Count>
                {render}
            </Count>
            <StyledButton
                variant="contained"
                color="success"
                onClick={() => setRender(c => c + 1)}
            >
                Click to rerender
            </StyledButton>
        </RenderCount>
    )
})
import {Count, RenderCount, StyledButton} from './styles';
import React, {useEffect, useRef, useState} from 'react';

export const useRenderCount = (...values: any): number | React.ReactNode => {

    const state = JSON.stringify(values)

    const prevCountRef = useRef<any | undefined>();

    const [render, setRender] = useState({
        self: 0,
        parent: 0,
    })

    useEffect(() => {

        if (state.length !== prevCountRef.current) {
            setRender({
                ...render,
                parent: render.parent + 1
            })
        }
    }, [state, prevCountRef.current])

    useEffect(() => {
        prevCountRef.current = state.length;
    }, [values]);

    if (values.length) {
        return render.parent
    }

    return <RenderCount>
        <Count>
            {values.length ? render.parent : render.self}
        </Count>
        <StyledButton
            variant="contained"
            color="success"
            onClick={() => setRender({
                ...render,
                self: render.self + 1
            })}
        >
            Click to rerender
        </StyledButton>
    </RenderCount>
}
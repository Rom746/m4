import React, { FC, useEffect, useRef, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 100;
const MIN = 0;
const MAX = 100000;

interface RangeSliderProps {
    valuesGlobal: number[];
    setValuesGlobal: (values: number[]) => void;
}

const RangeSlider: FC<RangeSliderProps> = ({ setValuesGlobal, valuesGlobal }) => {
    const [values, setValues] = useState(valuesGlobal);
    const lastRan = useRef(Date.now());

    useEffect(()=> {
        setValues(valuesGlobal)
    },[valuesGlobal])

    const setHandler = (value: number[]) => {
        setValues(value);

        if (Date.now() - lastRan.current >= 300) {
            setValuesGlobal(value);
            lastRan.current = Date.now();
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => {
                    setHandler(values);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '13px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '3px',
                                width: '100%',
                                background: getTrackBackground({
                                    values,
                                    colors: ['#E6E6E6', '#C93E33', '#E6E6E6'],
                                    min: MIN,
                                    max: MAX,
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '21px',
                            width: '21px',
                            borderRadius: '50%',
                            backgroundColor: '#C93E33',
                            border: '3px solid #FFFFFF'
                        }}
                    >

                    </div>
                )}
            />
        </div>
    );
};

export default RangeSlider;
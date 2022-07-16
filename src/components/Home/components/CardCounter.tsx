import { ChangeEvent, FC, MouseEvent } from 'react';
import { validNumber } from 'utils/validate';

interface CardCounterProps {
    count: number;
    setCount: (value: number) => void;
}

const CardCounter: FC<CardCounterProps> = ({count, setCount}) => {

    const inc = (event: MouseEvent): void => {
        event.preventDefault();
        setCount(count + 1);
    }

    const dec = (event: MouseEvent): void => {
        event.preventDefault();
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const change = (event: ChangeEvent<HTMLInputElement>):void => {
        
        // console.log(error)const error = validNumber.test(event.target.value);
        // if(error) {
            
        //     // setCount(1);
        //     return
        // }
        // console.error(error)
        // // console.log(event.target.value)
        // setCount(Number(event.target.value));
    }

    return (
        <div
            className={"count-card"}>
            <button className="count-card__inc" onClick={inc}>+</button>
            <input type="text" className="count-card__input" value={count} onChange={change}/>
            <button className="count-card__dec" onClick={dec}>-</button>
        </div>
    );
};

export default CardCounter;
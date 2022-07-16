import { ChangeEvent, FC, MouseEvent } from 'react';

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
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const change = (event: ChangeEvent<HTMLInputElement>):void => {
        setCount(Number(event.target.value));
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
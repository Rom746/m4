import React, { FC } from 'react';

interface EmptyProps {
    title: string;
}

const Empty: FC<EmptyProps> = ({title}) => {
   return (
       <div>
            <h1>Заглушка {title} </h1>
       </div>
   );
};

export default Empty;
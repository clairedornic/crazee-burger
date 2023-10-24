import React from 'react';
import {createContext} from 'react';

interface OrderContextProps {
    isModeAdmin: boolean;
    setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export default OrderContext;
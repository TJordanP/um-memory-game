import { createContext } from 'react';
import type { AppModel } from '../App';


interface AppModelContext{
    state: AppModel;
    setState: React.Dispatch<React.SetStateAction<AppModel>>;
};

const AppModelContext = createContext<AppModelContext | null>(null);

export default AppModelContext;

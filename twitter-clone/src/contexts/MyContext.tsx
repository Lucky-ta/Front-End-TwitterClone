import { Context, createContext } from 'react'

const initialValue = {
    token: '',
    setToken: () => {}
}

export interface IUserContext {
    token: string,
    setToken: (token: string) => void;
}

export const MyContext = createContext<IUserContext>(initialValue);
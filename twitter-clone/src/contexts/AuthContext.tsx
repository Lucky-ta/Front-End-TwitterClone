import { createContext } from 'react';
import { User } from '../types/User';

export interface IAuthContext {
    user: User | null;
    signin: (email: string, password: string) => Promise<any>;
}

export const AuthContext = createContext<IAuthContext>(null!);

import { createContext } from 'react';
// import { User } from '../types/User';

// export type Tweet = {
//     tweet: string,
//     User: {
//         name: string
//     }
// }

// export interface IAuthContext {
//     user: User | null;
//     signin: (email: string, password: string) => Promise<any>;
//     tweet: Tweet[];
// }

export const AuthContext = createContext<any>(null!);

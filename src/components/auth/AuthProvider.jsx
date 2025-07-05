import React from 'react';
import AuthContext from './AuthContext';
import { app } from '../shared/firebase_auth';
import { getAuth } from 'firebase/auth';
const AuthProvider = ({children}) => {
    const auth=getAuth(app)



    const AuthInfo={auth,}
    return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
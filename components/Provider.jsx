"use client"
import React from 'react';

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children , session}) => {
    return (
        <SessionProvider sesssion={session}>
            {children}
        </SessionProvider>
    );
};

export default Provider;

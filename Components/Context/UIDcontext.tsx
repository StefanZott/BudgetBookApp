import React, { createContext, useContext } from 'react';

export type UidContent = {
    uid: string
    setUID: (c: string) => void
}

export const UidContentContext = createContext<UidContent>({
    uid: '',
    setUID: () => {}
});

export const useUidContentContext = () => useContext(UidContentContext)
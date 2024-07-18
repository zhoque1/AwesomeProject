import React from 'react';

export const InternalizationContext = React.createContext<{
    locale: string;
    currency: number;
}>({
    locale: '',
    currency: 0,
});

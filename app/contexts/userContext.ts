import React, {Context} from 'react';
import {AuthorizeResult, RefreshResult} from 'react-native-app-auth';

export const UserContext = React.createContext<any>({
    user: null,
    updateUser: (user: AuthorizeResult | RefreshResult | null) => {},
});

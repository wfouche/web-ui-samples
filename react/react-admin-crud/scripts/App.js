// in src/App.js
import * as React from "react";

import { Admin, Resource } from 'react-admin';
import { PspList , PspEdit, PspCreate} from './psps';
import { WhitelistList , WhitelistEdit, WhitelistCreate} from './whitelist';

import postgrestRestProvider from '@raphiniert/ra-data-postgrest';

import authProvider from './authProvider';

import Dashboard from './Dashboard';

const dataProviderRest= postgrestRestProvider('http://localhost:4000');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProviderRest}>
        <Resource name="psp" list={PspList} edit={PspEdit} create={PspCreate} />
        <Resource name="whitelist" list={WhitelistList} edit={WhitelistEdit} create={WhitelistCreate} />
    </Admin>
);

export default App;
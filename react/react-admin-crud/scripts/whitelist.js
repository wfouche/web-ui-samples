// in src/whitelist.js
import * as React from "react";
import { List, Datagrid, NumberField, TextField } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput, EditButton } from 'react-admin';
import { Create } from 'react-admin';
import { Filter } from 'react-admin';

const WhitelistTitle = ({ record }) => {
    return <span>{record ? `Name:  ${record.name}` : ''}</span>;
};

const WhitelistFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by IP" source="ip" alwaysOn />
    </Filter>
);

export const WhitelistList = props => (
    <List filters={<WhitelistFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="merchant_name" />
            <TextField source="merchant_id" />
            <TextField source="ip" />
			 <EditButton />
        </Datagrid>
    </List>
);

export const WhitelistEdit = props => (
    <Edit  title={<WhitelistTitle />} {...props}>
        <SimpleForm>
            <NumberField disabled source="id" />
            <TextField source="merchant_name" />
            <TextField source="merchant_id" />
            <TextInput source="ip" />
        </SimpleForm>
    </Edit>
);

export const WhitelistCreate = props => (
    <Create  {...props}>
        <SimpleForm>
            <NumberInput  source="id" />
            <TextField source="merchant_name" />
            <TextField source="merchant_id" />
            <TextInput source="ip" />
        </SimpleForm>
    </Create>
);

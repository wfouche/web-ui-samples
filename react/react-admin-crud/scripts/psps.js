// in src/psps.js
import * as React from "react";
import { List, Datagrid, NumberField, TextField, BooleanField } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput, EditButton } from 'react-admin';
import { Create } from 'react-admin';
import { Filter } from 'react-admin';

const PspTitle = ({ record }) => {
    return <span>{record ? `Name:  ${record.name}` : ''}</span>;
};

const PspFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Name" source="name" alwaysOn />
    </Filter>
);

export const PspList = props => (
    <List filters={<PspFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="uuid" />
            <TextField source="name" />
            <TextField source="password" />
            <TextField source="mode" />
			<BooleanField source="is_unit_test" />
			 <EditButton />
        </Datagrid>
    </List>
);

export const PspEdit = props => (
    <Edit  title={<PspTitle />} {...props}>
        <SimpleForm>
            <NumberField disabled source="id" />
            <TextInput source="uuid" />
            <TextInput source="name" />
            <TextInput source="password" />
            <TextInput source="mode" />
			<BooleanInput source="is_unit_test" />
        </SimpleForm>
    </Edit>
);

export const PspCreate = props => (
    <Create  {...props}>
        <SimpleForm>
            <NumberInput  source="id" />
            <TextInput source="uuid" />
            <TextInput source="name" />
            <TextInput source="password" />
            <TextInput source="mode" />
			<BooleanInput source="is_unit_test" />
        </SimpleForm>
    </Create>
);

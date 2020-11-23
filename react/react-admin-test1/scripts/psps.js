// in src/psps.js

import * as React from "react";

import { List, Datagrid, NumberField, TextField, BooleanField } from 'react-admin';

import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput, EditButton } from 'react-admin';

import { Create } from 'react-admin';

import { Filter } from 'react-admin';

//import { PspShow } from './pspShow'

const PspTitle = ({ record }) => {

    return <span>{record ? `Name:  ${record.name}` : ''}</span>;

};



const PspFilter = (props) => (

    <Filter {...props}>

        <TextInput label="Search by PSP Name" source="name" alwaysOn />
        <TextInput label="Search by Connector Type" source="type" alwaysOn />
        <TextInput label="Search by Response Code" source="rsp_code" alwaysOn />

    </Filter>

);



export const PspList = props => (

    <List perPage={25} filters={<PspFilter />} {...props}>

        <Datagrid rowClick="expand" >

            <NumberField label="Row Id" source="id" />

            <TextField label="PSP Name" source="name" />

            <TextField label="Connector Type" source="type" />

            <TextField source="status" />

            <TextField source="approved" />

            <TextField source="declined" />

        </Datagrid>

    </List>

);


export default PspList;
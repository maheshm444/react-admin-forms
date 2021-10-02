import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  DateField,
  ArrayInput,
  ImageInput,
  ShowButton,
  ImageField,
  required,
  Pagination,
  DeleteButton,
  RadioButtonGroupInput,
  SimpleFormIterator,
} from 'react-admin'

const farmerFilters = [
  <TextInput source='mobileNumber' label='Search for Employees' alwaysOn />,
]

export const EmployeeCreate = (props) => {
  return (
    <Create title='Create a Employee' {...props}>
      <EmployeeForm />
    </Create>
  )
}

export const EmployeeEdit = (props) => {
  return (
    <Edit title='Edit a Employee' {...props}>
      <EmployeeForm />
    </Edit>
  )
}

export const EmployeeList = (props) => {
  return (
    <List
      {...props}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 50]} perPage={30} />}
      filters={farmerFilters}
    >
      <Datagrid>
        <ImageField source='pictures.src' label='Employee Image' />
        <TextField source='name' />
        <DateField
          source='createdate'
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
        <TextField source='aadharNumber' label='Aadhar Number' />
        <TextField source='mobileNumber' label='Mobile' />
        <ShowButton label='' />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

const EmployeeForm = (props) => (
  <SimpleForm {...props}>
    <ImageInput source='pictures' label='Employee pictures' accept='image/*'>
      <ImageField source='src' title='title' />
    </ImageInput>
    <TextInput source='name' fullWidth validate={[required()]} />
    <TextInput source='fatherName' fullWidth validate={[required()]} />
    <TextInput source='husbandName/spouseName' fullWidth />
    <DateInput source='dob' label='Date of Birth' fullWidth />
    <TextInput source='post' fullWidth validate={[required()]} />
    <TextInput source='address' fullWidth validate={[required()]} />
    <TextInput source='pincode' fullWidth validate={[required()]} />
    <TextInput source='mobileNumber' fullWidth validate={[required()]} />
    <TextInput source='workingPlace' fullWidth validate={[required()]} />
    <TextInput source='aadharNumber' fullWidth validate={[required()]} />
    <TextInput source='pan' fullWidth validate={[required()]} />
    <TextInput source='accountNumber' fullWidth validate={[required()]} />
    <TextInput source='employeeid' fullWidth validate={[required()]} />
    <DateInput source='joiningDate' label='Joining Date' fullWidth />
    <ArrayInput source='children'>
      <SimpleFormIterator>
        <TextInput source='name' label='Child Name' />
        <DateInput source='dob' label='Child DOB' />
      </SimpleFormIterator>
    </ArrayInput>
  </SimpleForm>
)

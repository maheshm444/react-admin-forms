import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  DateField,
  DateInput,
  NumberInput,
  ShowButton,
  NullableBooleanInput,
  required,
  Pagination,
  DeleteButton,
  RadioButtonGroupInput,
  ImageInput,
  ImageField,
} from 'react-admin'

const farmerFilters = [
  <TextInput source='mobileNumber' label='Search for Farmers' alwaysOn />,
]

export const FarmerCreate = (props) => {
  return (
    <Create title='Create a Farmer' {...props}>
      <FarmerForm />
    </Create>
  )
}

export const FarmerEdit = (props) => {
  return (
    <Edit title='Edit a Farmer' {...props}>
      <FarmerForm />
    </Edit>
  )
}

export const FarmerList = (props) => {
  return (
    <List
      {...props}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 50]} perPage={30} />}
      filters={farmerFilters}
    >
      <Datagrid>
        <ImageField source='pictures.src' label='Farmer Image' />
        <TextField source='beneficiaryName' />
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

const FarmerForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source='beneficiaryName' fullWidth validate={[required()]} />
    <TextInput source='fatherName' fullWidth validate={[required()]} />
    <TextInput source='husbandName' fullWidth validate={[required()]} />
    <TextInput source='mobileNumber' fullWidth validate={[required()]} />
    <TextInput source='aadharNumber' fullWidth validate={[required()]} />
    <TextInput source='panNumber' fullWidth validate={[required()]} />
    <TextInput source='accountNumber' fullWidth validate={[required()]} />
    <TextInput source='ifscNumber' fullWidth validate={[required()]} />
    <TextInput source='bankName' fullWidth validate={[required()]} />
    <TextInput source='branch' fullWidth validate={[required()]} />
    <DateInput source='dob' label='Date of Birth' fullWidth />
    <NumberInput source='age' fullWidth min={18} validate={[required()]} />
    <RadioButtonGroupInput
      source='gender'
      choices={[
        { id: 'M', name: 'Male' },
        { id: 'F', name: 'Female' },
        { id: 'O', name: 'Others' },
      ]}
    />
    <TextInput source='caste' fullWidth validate={[required()]} />
    <TextInput source='category' fullWidth validate={[required()]} />
    <TextInput source='nationality' fullWidth validate={[required()]} />
    <TextInput source='emailid' fullWidth validate={[required()]} />
    <TextInput source='subject' fullWidth validate={[required()]} />
    <TextInput source='completeAddress' fullWidth validate={[required()]} />
    <TextInput source='totalLand' fullWidth validate={[required()]} />
    <TextInput source='anyLoan' fullWidth validate={[required()]} />
    <ImageInput source='pictures' label='Farmer pictures' accept='image/*'>
      <ImageField source='src' title='title' />
    </ImageInput>
    <NullableBooleanInput
      label='Loan Free'
      source='loanfree'
      nullLabel='Either'
      falseLabel='No'
      trueLabel='Yes'
      fullWidth
      validate={[required()]}
    />
  </SimpleForm>
)

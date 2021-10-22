import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateField,
  NumberInput,
  ShowButton,
  ReferenceInput,
  required,
  Pagination,
  DeleteButton,
  SelectInput,
  RadioButtonGroupInput,
} from 'react-admin'

const employeeFilters = [
  <TextInput source='mobileNumber' label='Search for Projects' alwaysOn />,
]

export const ProjectCreate = (props) => {
  return (
    <Create title='Create a Project' {...props}>
      <ProjectForm />
    </Create>
  )
}

export const ProjectEdit = (props) => {
  return (
    <Edit title='Edit a Project' {...props}>
      <ProjectForm />
    </Edit>
  )
}

export const ProjectList = (props) => {
  return (
    <List
      {...props}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 50]} perPage={30} />}
      filters={employeeFilters}
    >
      <Datagrid>
        <TextField source='projectName' />
        <DateField
          source='createdate'
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
        <ShowButton label='' />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

const ProjectForm = (props) => (
  <SimpleForm {...props}>
    <h3>Create </h3>
    <TextInput source='registrationNo' fullWidth validate={[required()]} />
    <TextInput source='projectName' fullWidth validate={[required()]} />
    <NumberInput source='projectCost' fullWidth validate={[required()]} />
    <TextInput source='occupation' fullWidth validate={[required()]} />
    <ReferenceInput
      label='Select Beneficiary'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
    >
      <SelectInput optionText='beneficiaryName' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Select DOB'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='dob' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Husband Name'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='husbandName' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Mobile Number'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='mobileNumber' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Caste'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='caste' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Age'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='age' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Gender'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='gender' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Aadhar Number'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='aadharNumber' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='PAN Number'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='panNumber' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Account Number'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='accountNumber' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='IFSC Number'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='ifscNumber' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Bank Name'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='bankName' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Branch'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='branch' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Address'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='completeAddress' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Nationality'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='nationality' />
    </ReferenceInput>
    <ReferenceInput
      validate={[required()]}
      label='Email'
      source='beneficiaryId'
      reference='farmers'
      fullWidth
      disabled
    >
      <SelectInput optionText='emailid' />
    </ReferenceInput>

    <h3>Bank Details </h3>
    <RadioButtonGroupInput
      source='modeOfPayment'
      choices={[
        { id: 'cheque', name: 'Cheque' },
        { id: 'cash', name: 'Cash' },
        { id: 'dd', name: 'Demand Draft (DD)' },
      ]}
    />
    <NumberInput source='amount' fullWidth min={1} validate={[required()]} />
    <TextInput
      source='witness1'
      fullWidth
      validate={[required()]}
      label='Witness 1'
    />
    <TextInput
      source='witness2'
      fullWidth
      validate={[required()]}
      label='Witness 2'
    />
  </SimpleForm>
)

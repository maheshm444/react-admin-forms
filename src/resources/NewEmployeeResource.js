import React, { useState } from 'react'
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

import firebase from 'firebase'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  recordLiveValues: state.form['record-form'].values
});
const farmerFilters = [
  <TextInput source='mobileNumber' label='Search for Employees' alwaysOn />,
]

export const NewEmployeeCreate = (props) => {
  return (
    <Create title='Create a Employee' {...props}>
      <NewEmployeeForm />
    </Create>
  )
}

export const NewEmployeeEdit = (props) => {
  return (
    <Edit title='Edit a Employee' {...props}>
      <NewEmployeeForm />
    </Edit>
  )
}

export const NewEmployeeList = (props) => {
  let employeeUser = ''
  firebase.auth().onAuthStateChanged((user) => {
    getuser(user)
  })
  function getuser(user) {
    employeeUser = user
    // console.log('employeeUser', employeeUser)
  }
  return (
    <List
      {...props}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 50]} perPage={30} />}
      // filters={farmerFilters}
    >
      <Datagrid>
        <TextField source='email' />
        <DateField
          source='createdate'
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
      </Datagrid>
    </List>
  )
}

const NewEmployeeForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source='email' fullWidth validate={[required()]} />
    <TextInput source='password' fullWidth validate={[required()]} />
  </SimpleForm>
)

export default connect(mapStateToProps)(NewEmployeeForm);
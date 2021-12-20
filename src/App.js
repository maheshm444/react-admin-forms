import React, { useEffect, useState } from 'react'
import { Admin, Resource, Layout, AppBar } from 'react-admin'
import LoginPage from './Modules/Login/LoginPage'
import { createBrowserHistory as createHistory } from 'history'
import firebase from 'firebase'
// import { getFirestore } from "firebase/firestore"
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase'
import {
  FarmerCreate,
  FarmerEdit,
  FarmerList,
} from './resources/FarmerResource'
import {
  EmployeeCreate,
  EmployeeEdit,
  EmployeeList,
} from './resources/EmployeeResource'
import {
  NewEmployeeCreate,
  NewEmployeeEdit,
  NewEmployeeList,
} from './resources/NewEmployeeResource'
import {
  ProjectCreate,
  ProjectEdit,
  ProjectList,
} from './resources/ProjectResource'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAAPJPUNxcLTCh_sFku4njAjh07v1zg-LQ',
  authDomain: 'sargujamart-form.firebaseapp.com',
  projectId: 'sargujamart-form',
  storageBucket: 'sargujamart-form.appspot.com',
  messagingSenderId: '545836583910',
  appId: '1:545836583910:web:9419198adf86d8437d6427',
}
// const admin = require('firebase-admin')

const options = {}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProviderOrig = FirebaseAuthProvider(firebaseConfig)

const history = createHistory()

const theme = {
  palette: {
    type: 'light',
    primary: { main: '#404040', contrastText: '#fff' },
    secondary: { main: '#404040', contrastText: '#fff' },
  },
}

function App() {
  const [loggedUser, setloggedUser] = useState({})
  useEffect(() => {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .where('user', '==', user.email)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size > 0) {
              querySnapshot.forEach((snapshot) => {
                let userData = snapshot.data()
                setloggedUser({ role: userData.role, email: userData.user })
              })
            } else {
              db.collection('users')
                .add({ user: user.email, role: 'employee' })
                .then((res) =>
                  setloggedUser({ user: user.email, role: 'employee' })
                )
            }
          })
      }
    })
  }, [])
  return componentsToRender(loggedUser.role, loggedUser)
}
const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />
const CustomAppBar = ({ ...props }) => (
  <AppBar {...props}>
    {/* <Typography style={{ flex: 1 }}>{props.title}</Typography>
    <IconButton onClick={() => history.push('/support')}>
      <HelpOutline style={{ fill: '#fff' }} />
    </IconButton> */}
  </AppBar>
)

const componentsToRender = (role, loggedUser) => {
  if (role === 'admin') {
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProviderOrig}
        layout={CustomLayout}
        title='SargujaMart'
        history={history}
        theme={theme}
      >
        <Resource
          name='new_employees'
          options={{ label: 'Create New Employees' }}
          list={NewEmployeeList}
          create={NewEmployeeCreate}
          edit={NewEmployeeEdit}
        />
        <Resource
          name='employees'
          options={{ label: 'Employees' }}
          list={EmployeeList}
          create={EmployeeCreate}
          edit={EmployeeEdit}
        />
        <Resource
          name='farmers'
          options={{ label: 'Farmers' }}
          list={FarmerList}
          create={FarmerCreate}
          edit={FarmerEdit}
        />
        <Resource
          name='projects'
          options={{ label: 'Projects' }}
          list={ProjectList}
          create={ProjectCreate}
          edit={ProjectEdit}
        />
      </Admin>
    )
  } else if (role==='employee') {
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProviderOrig}
        layout={CustomLayout}
        title='SargujaMart Employee'
        history={history}
        theme={theme}
      >
        <Resource
          name='farmers'
          options={{ label: 'Farmers' }}
          list={FarmerList}
          create={FarmerCreate}
          edit={FarmerEdit}
        />
        <Resource
          name='projects'
          options={{ label: 'Projects' }}
          list={ProjectList}
          create={ProjectCreate}
          edit={ProjectEdit}
        />
      </Admin>
    )
  } else {
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProviderOrig}
        layout={CustomLayout}
        title='SargujaMart'
        history={history}
        theme={theme}
      >
        <Resource
          name='farmers'
          options={{ label: 'Farmers' }}
          list={FarmerList}
          create={FarmerCreate}
          edit={FarmerEdit}
        />
        <Resource
          name='projects'
          options={{ label: 'Projects' }}
          list={ProjectList}
          create={ProjectCreate}
          edit={ProjectEdit}
        />
      </Admin>
    )
  }
}

export default App

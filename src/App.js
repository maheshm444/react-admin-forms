import React, { useEffect } from 'react'
import { Admin, Resource, Layout, AppBar } from 'react-admin'
import LoginPage from './Modules/Login/LoginPage'
import { createBrowserHistory as createHistory } from 'history'
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
  useEffect(() => {
    const user = localStorage.getItem(
      'firebase:authUser:AIzaSyAAPJPUNxcLTCh_sFku4njAjh07v1zg-LQ:[DEFAULT]'
    )
    console.log('user', JSON.parse(user).email)
  })
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={dataProvider}
      authProvider={authProviderOrig}
      layout={CustomLayout}
      title='Mart'
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
        name='employees'
        options={{ label: 'Employees' }}
        list={EmployeeList}
        create={EmployeeCreate}
        edit={EmployeeEdit}
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
const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />
const CustomAppBar = ({ ...props }) => (
  <AppBar {...props}>
    {/* <Typography style={{ flex: 1 }}>{props.title}</Typography>
    <IconButton onClick={() => history.push('/support')}>
      <HelpOutline style={{ fill: '#fff' }} />
    </IconButton> */}
  </AppBar>
)

export default App

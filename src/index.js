import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// var request = window.indexedDB.open('firebaseLocalStorageDb', 3)

// request.onerror = function (event) {
//   // Do something with request.errorCode!
// }
// request.onsuccess = function (event) {
//   // Do something with request.result!
//   console.log('test', event)
// }

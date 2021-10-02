const authProvider = {
  login: ({ username, password }) => {
    /* ... */
  },
  checkError: (error) => {
    /* ... */
  },
  checkAuth: () => {
    /* ... */
  },
  logout: () => {
    /* ... */
  },
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'))
      return Promise.resolve({ id, fullName, avatar })
    } catch (error) {
      return Promise.reject(error)
    }
  },
  // ...
}

export default authProvider

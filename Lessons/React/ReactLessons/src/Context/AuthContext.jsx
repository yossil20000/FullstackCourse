import React from 'react'
const AuthContext = React.createContext({
    Authenticated: "false",
    Login: () => {}
})
export default AuthContext;
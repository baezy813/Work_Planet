import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const savedUser = localStorage.getItem('user')
        if(savedUser){
            try{
                setUser(JSON.parse(savedUser))
            }catch(error){
                console.error('사용자 데이터 파싱 오류', error)
                localStorage.removeItem('user')
            }
        }
    },[])

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
    const value = {
        user, logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth는 AuthProvider 내부서만 사용할 수 있습니다.')
    }
 return context
}
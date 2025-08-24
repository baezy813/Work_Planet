import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'

export default function Mypage(){
    const {user, logout} = useAuth()

    const navigate = useNavigate()
    const handleLogout = ()=>{
        logout()
        navigate('/')
    }

    return(
        <S.Container>
            <h1>My Page</h1>
            <p>Welcome, {user?.username || 'Guest'}</p>
            <p>ID: {user?.userid || 'Guest'}</p>
            <p>Created At: {user?.createdAt || 'N/A'}</p>

            <button onClick={handleLogout}>로그아웃</button>
        </S.Container>
    )
}

const S ={
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
}
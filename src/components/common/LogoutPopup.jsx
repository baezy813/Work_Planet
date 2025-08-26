import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import PropTypes from 'prop-types'

export default function LogoutPopup({ isLogoutPopupOpen, setIsLogoutPopupOpen }){
    const navigate = useNavigate()
    const {logout} = useAuth()
    
    const handleLogout = () => {
        logout()
        navigate('/login')
        setIsLogoutPopupOpen(false)
    }

    const handleCancel = () => {
        setIsLogoutPopupOpen(false)
    }

    if (!isLogoutPopupOpen) return null

    return(
        <S.Container>
            <S.Popup>
                <S.Header>
                    <S.HeaderTitle>로그아웃 확인</S.HeaderTitle>
                    <S.CloseButton onClick={handleCancel}>×</S.CloseButton>
                </S.Header>
                
                <S.Content>
                    <S.MainTitle>정말로 로그아웃 하시겠습니까?</S.MainTitle>
                    <S.Description>
                        로그아웃하시면 현재 작업 중인 내용이 저장되지 않을 수 있습니다.
                    </S.Description>
                    
                    <S.WarningBox>
                        <S.WarningIcon>⚠️</S.WarningIcon>
                        <S.WarningText>
                            로그아웃 후에는 다시 로그인해야 서비스를 이용할 수 있습니다.
                        </S.WarningText>
                    </S.WarningBox>
                </S.Content>

                <S.ButtonContainer>
                    <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
                    <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
                </S.ButtonContainer>
            </S.Popup>
        </S.Container>
    )
}

LogoutPopup.propTypes = {
    isLogoutPopupOpen: PropTypes.bool.isRequired,
    setIsLogoutPopupOpen: PropTypes.func.isRequired
}

const S = {
    Container: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 10000;
        backdrop-filter: blur(4px);
    `,

    Popup: styled.div`
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 480px;
        width: 90%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
    `,

    Header: styled.div`
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    `,

    HeaderTitle: styled.h2`
        color: white;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        letter-spacing: 0.5px;
    `,

    CloseButton: styled.button`
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        transition: all 0.2s ease;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }
    `,

    Content: styled.div`
        padding: 32px 24px 24px;
        flex: 1;
    `,

    MainTitle: styled.h3`
        font-size: 20px;
        font-weight: 700;
        color: #1a202c;
        margin: 0 0 16px 0;
        text-align: center;
        line-height: 1.4;
    `,

    Description: styled.p`
        font-size: 15px;
        color: #4a5568;
        margin: 0 0 24px 0;
        text-align: center;
        line-height: 1.6;
    `,

    WarningBox: styled.div`
        background: #fff5f5;
        border: 1px solid #fed7d7;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 8px;
    `,

    WarningIcon: styled.span`
        font-size: 18px;
        flex-shrink: 0;
        margin-top: 2px;
    `,

    WarningText: styled.p`
        font-size: 14px;
        color: #c53030;
        margin: 0;
        line-height: 1.5;
        font-weight: 500;
    `,

    ButtonContainer: styled.div`
        display: flex;
        gap: 12px;
        padding: 24px;
        background: #f7fafc;
        border-top: 1px solid #e2e8f0;
    `,

    CancelButton: styled.button`
        flex: 1;
        background: white;
        color: #4a5568;
        border: 2px solid #e2e8f0;
        padding: 14px 20px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            border-color: #cbd5e0;
            background: #f7fafc;
            transform: translateY(-1px);
        }
    `,

    LogoutButton: styled.button`
        flex: 1;
        background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
        color: white;
        border: none;
        padding: 14px 20px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(229, 62, 62, 0.4);
        }

        &:active {
            transform: translateY(0);
        }
    `
}
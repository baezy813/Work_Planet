 
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'
import { formatDate } from '../../utils'
import CalenderUI from '../../components/Profile/Calender'
// import Timer from '../../components/Profile/Timer'

export default function Mypage(){
   // const [profileSettingPopup, setProfileSettingPopup] = useState(false)
    const {user} = useAuth()
 
    const handleProfileSetting = ()=>{
       
    }
    const infoDetailData = [
        {
            label: '사용자명',
            value: user?.username || 'Guest',
        },
        {
            label: '아이디',
            value: user?.userid || 'Guest',
        },
        
        {
            label: '가입일',
            value: formatDate(user?.createdAt),
        },
        
        {
            label: '직업',
            value: user?.job || 'Guest',
        },
    ]
    return(
        <S.Container>
            <S.Header>
                <S.WelcomeSection>
                    <S.Avatar>👤</S.Avatar>
                    <S.UserInfo>
                        <S.Greeting>안녕하세요, {user?.username || 'Guest'}님!</S.Greeting>
                        <S.UserId>@{user?.userid || 'guest'}</S.UserId>
                    </S.UserInfo>
                </S.WelcomeSection>
                <S.LogoutButton onClick={handleProfileSetting}>
                    프로필 세팅하기
                </S.LogoutButton>
            </S.Header>

            <S.Content>
                <S.MainSection>
                    <S.Card>
                        <S.CardTitle>📊 계정 정보</S.CardTitle>
                        <S.InfoGrid>
                            {infoDetailData.map((item)=>(
                                <S.InfoItem key={item.label}>
                                    <S.InfoLabel>{item.label}</S.InfoLabel>
                                    <S.InfoValue>{item.value}</S.InfoValue>
                                </S.InfoItem>
                            ))}
                            
                        </S.InfoGrid>
                    </S.Card>

                    <S.Card>
                        <S.CardTitle>🎯 활동 통계</S.CardTitle>
                        {/* <Timer/> */}
                       
                    </S.Card>
                </S.MainSection>

                <S.SideSection>
                    <S.Card>
                        <S.CardTitle> 📅  캘린더</S.CardTitle>
                        <S.ActionButtons>
                           <CalenderUI/>
                        </S.ActionButtons>
                    </S.Card>

                    <S.Card>
                        <S.CardTitle>📝 최근 활동</S.CardTitle>
                        <S.ActivityList>
                            <S.ActivityItem>
                                <S.ActivityIcon>🍜</S.ActivityIcon>
                                <S.ActivityText>맛집 메뉴를 찜했습니다</S.ActivityText>
                                <S.ActivityTime>방금 전</S.ActivityTime>
                            </S.ActivityItem>
                            <S.ActivityItem>
                                <S.ActivityIcon>💭</S.ActivityIcon>
                                <S.ActivityText>명언을 복사했습니다</S.ActivityText>
                                <S.ActivityTime>1시간 전</S.ActivityTime>
                            </S.ActivityItem>
                            <S.ActivityItem>
                                <S.ActivityIcon>🏠</S.ActivityIcon>
                                <S.ActivityText>홈페이지를 방문했습니다</S.ActivityText>
                                <S.ActivityTime>2시간 전</S.ActivityTime>
                            </S.ActivityItem>
                        </S.ActivityList>
                    </S.Card>
                </S.SideSection>
            </S.Content>
        </S.Container>
    )
}

const S = {
    Container: styled.div`
        padding: 40px;
        max-width: 1400px;
        margin: 0 auto;
        background: #f8fafc;
        min-height: 100vh;
    `,

    Header: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        padding: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        color: white;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    `,

    WelcomeSection: styled.div`
        display: flex;
        align-items: center;
        gap: 20px;
    `,

    Avatar: styled.div`
        font-size: 48px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    `,

    UserInfo: styled.div``,

    Greeting: styled.h1`
        font-size: 28px;
        font-weight: 700;
        margin: 0 0 8px 0;
    `,

    UserId: styled.p`
        font-size: 16px;
        margin: 0;
        opacity: 0.9;
    `,

    LogoutButton: styled.button`
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);

        &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
    `,

    Content: styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
    `,

    MainSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
    `,

    SideSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
    `,

    Card: styled.div`
        background: white;
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
    `,

    CardTitle: styled.h2`
        font-size: 20px;
        font-weight: 700;
        color: #1a202c;
        margin: 0 0 25px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    `,

    InfoGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    `,

    InfoItem: styled.div``,

    InfoLabel: styled.p`
        font-size: 14px;
        color: #718096;
        margin: 0 0 8px 0;
        font-weight: 500;
    `,

    InfoValue: styled.p`
        font-size: 16px;
        color: #1a202c;
        margin: 0;
        font-weight: 600;
    `,

    StatusBadge: styled.span`
        background: ${props => props.active ? '#10b981' : '#ef4444'};
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
    `,

    StatsGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    `,

    StatItem: styled.div`
        text-align: center;
        padding: 20px;
        background: #f8fafc;
        border-radius: 16px;
        transition: all 0.3s ease;

        &:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }
    `,

    StatIcon: styled.div`
        font-size: 32px;
        margin-bottom: 12px;
    `,

    StatNumber: styled.div`
        font-size: 28px;
        font-weight: 800;
        color: #667eea;
        margin-bottom: 8px;
    `,

    StatLabel: styled.div`
        font-size: 14px;
        color: #718096;
        font-weight: 500;
    `,

    ActionButtons: styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `,

    ActionButton: styled.button`
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 16px 20px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }
    `,

    ActivityList: styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `,

    ActivityItem: styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background: #f8fafc;
        border-radius: 12px;
        transition: all 0.3s ease;

        &:hover {
            background: #e2e8f0;
        }
    `,

    ActivityIcon: styled.div`
        font-size: 20px;
        background: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `,

    ActivityText: styled.p`
        flex: 1;
        font-size: 14px;
        color: #1a202c;
        margin: 0;
        font-weight: 500;
    `,

    ActivityTime: styled.span`
        font-size: 12px;
        color: #718096;
        font-weight: 500;
    `
}
import styled from 'styled-components' 
import TopTrackCard from '../../components/PlayList/TopTrackCard'
import { useNavigate } from 'react-router-dom'


export default function PlayList(){
    const musicType =['출근송', '퇴근송','야근송', '업무 많을때', '집중', '휴식', '월급날', '혼났을때', '지옥철']
    const navigate = useNavigate()
    return(
        <S.Container>
            <div>Trending</div>
            <TopTrackCard/>
            <S.MusicTypeContainer>
                {  musicType.map((item)=>(
                    <S.MusicType key={item} onClick={()=>{navigate(`/playlist/musicdetail/${item}`)}}>{item}</S.MusicType>
                ))}
            </S.MusicTypeContainer>
        </S.Container>
    )
}

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    Title: styled.h1`
        font-size: 24px;
        font-weight: 600;
    `,
    MusicTypeContainer: styled.div`
    width: 500px;
    height: 500px;
    background-color: 
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    `,
    MusicType: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
}
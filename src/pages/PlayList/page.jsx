import styled from 'styled-components'
import SearchInput from '../../components/Restaurant/SearchInput'

export default function PlayList(){
    return(
        <S.Container>
            <SearchInput placeholder='원하시는 음악을 입력해주세요' padding='16px 16px 16px 48px'/>

            <div>Weekly Top Tracksyarn add zustand
            </div>
        </S.Container>
    )
}

const S = {
    Container: styled.div`
     
    `
}
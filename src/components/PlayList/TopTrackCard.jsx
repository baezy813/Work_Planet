import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../Restaurant/SearchInput";
import { useSlideStore } from "../../stores/useSlider";
import { tracksItemData } from "../../data/tracksItemData";
import { filterData } from "../../utils/filteredSearchData";
export default function TopTrackCard(){
    const {currentIndex, next, prev}= useSlideStore()
   const [searchQuery, setSearchQuery] = useState('')
   const handleSearch = (e)=>{
    setSearchQuery(e.target.value)
   }
   const filteredMusic = filterData(tracksItemData, searchQuery, ['title', 'artist'])
    return(
        <S.Container>
             <SearchInput placeholder='원하시는 음악을 입력해주세요' padding='16px 16px 16px 48px' value={searchQuery} onChange={handleSearch}/>
            <S.ButtonContainer>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </S.ButtonContainer>

                <S.CardContainer style={{transform: `translateX(-${currentIndex * 150}px)`}}>
                
                {filteredMusic.length > 0 ? (
                    filteredMusic.map((item)=>(
                <S.Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <div>{item.title}</div>
                        <div>{item.artist}</div>
                    </div>
                </S.Card>
            ))
            ) : (
                <S.NoResults>검색 결과가 없습니다.</S.NoResults>
            )}

            </S.CardContainer>
        </S.Container>
    )
}

const S = {
    ButtonContainer: styled.div`
        display: flex;
        gap: 16px;
        justify-content: flex-end;
    `,
    Container: styled.div` 
         flex-direction: column;
         gap: 16px;
       
    `,
    CardContainer: styled.div`
        display: flex;
        flex-direction: row;
        gap: 16px;
         width: 100% 
        overflow: hidden;
        transition: transform 0.3s ease-in-out;
    `,
    Card: styled.div`
        display: flex; 
        flex-direction: column;
        gap: 16px;
        width: 500px;
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        &:hover{
            cursor: pointer;
            transition: 0.3s;
            transform: scale(1.2);
        }
    `,
    NoResults: styled.div`
        font-size: 16px;
        font-weight: 600;
        color: #888;
    `,
}
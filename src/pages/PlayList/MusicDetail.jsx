import styled from "styled-components";
import { musicTypeInfo } from "../../data/tracksItemData";
import SearchInput from "../../components/Restaurant/SearchInput";
import { filterData } from "../../utils/filteredSearchData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function MusicDetail(){
   const [searchQuery, setSearchQuery] = useState('')
   const {type} = useParams()
   const navigate = useNavigate()
   const filteredType = musicTypeInfo.filter((item) => item.type === type)
const filteredMusic = filterData(filteredType, searchQuery, ['title', 'singer'])
    return(
        <S.Container>
           <S.BackButton onClick={()=> navigate(-1)}>◀️</S.BackButton>
            <S.Title>{type}</S.Title>
            <SearchInput placeholder="Search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} padding="16px 16px 16px 48px" />
            <S.Banner>
                 {`${type} 목록`}
            </S.Banner>
            <S.MusicContainer>
               {filteredMusic.map((item)=>(
                <S.MusicItem key={item.type}>
                    <S.MusicImage src={item.image} alt={item.title} />
                    <S.MusicTitle>{item.title}</S.MusicTitle>
                    <S.MusicSinger>{item.singer}</S.MusicSinger>
                </S.MusicItem>
               ))}
               {filteredMusic.length === 0 && <S.NoResults> 검색 결과가 없습니다.</S.NoResults>}
            </S.MusicContainer>
        </S.Container>
    )
}

const S = {   
    BackButton: styled.div`
      
    `,
    Container: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    Title: styled.h1`
        font-size: 24px;
        font-weight: 600;
    `,
    Banner: styled.div`
        font-size: 24px;
        font-weight: 600;
        color: #888;
        padding: 16px;
        background-color: #f0f0f0;
        border-radius: 8px;
        margin-bottom: 16px;
    `,
    MusicContainer: styled.div` 
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    MusicItem: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    MusicImage: styled.img`
        width: 100px;
        height: 100px;
    `,
    MusicTitle: styled.div`
        font-size: 16px;
        font-weight: 600;
    `,
    MusicSinger: styled.div`
        font-size: 14px;
        color: #666;
    `,
    NoResults: styled.div`
        font-size: 16px;
        font-weight: 600;
        color: #888;
    `,
}
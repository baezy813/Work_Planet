import styled from "styled-components";
import { useSlideStore } from "../../stores/useSlider";
import { tracksItemData } from "../../data/tracksItemData";
export default function TopTrackCard(){
    const {currentIndex, next, prev}= useSlideStore()
   
    
    return(
        <S.Container>
            <S.ButtonContainer>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </S.ButtonContainer>

                <S.CardContainer style={{transform: `translateX(-${currentIndex * 150}px)`}}>
                {tracksItemData.map((item)=>(
                <S.Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <div>{item.title}</div>
                        <div>{item.artist}</div>
                    </div>
                </S.Card>
            ))}
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
}
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function SnakeBar({message}){

    return(
        <S.Container>
            <S.Message>{message}</S.Message>
        </S.Container>
    )
}

SnakeBar.propTypes = {
    message: PropTypes.string.isRequired
}

const S = {
    Container: styled.div`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `,

    Message: styled.span`
        font-size: 14px;
        font-weight: 500;
    `
}
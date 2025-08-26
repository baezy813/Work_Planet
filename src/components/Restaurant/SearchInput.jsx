import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function SearchInput({ value, onChange, placeholder = "메뉴를 검색해보세요!" ,style, padding}) {
    return (
        <S.SearchContainer style={style}>
            <S.SearchIcon>🔍</S.SearchIcon>
            <S.SearchInput
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{padding: padding}}
            />
        </S.SearchContainer>
    )
}

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    padding: PropTypes.string
}

const S = {
    SearchContainer: styled.div`
        position: relative;
        max-width: 600px;
    `,

    SearchIcon: styled.span`
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #718096;
        z-index: 10;
    `,

    SearchInput: styled.input`
        width: 100%;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 16px;
        background: white;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

        &:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
            transform: translateY(-2px);
        }

        &::placeholder {
            color: #a0aec0;
        }
    `
}
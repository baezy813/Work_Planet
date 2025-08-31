import styled from "styled-components"; 
import PropTypes from "prop-types";
export default function FilterSelectBox({options, value, onChange}){
    return(
        <S.FilterSelect>
            <select style={{cursor:"pointer"}}>
            {options.map((option)=>(
                <option key={option} value={value} onChange={onChange}>{option}</option>
            ))}
        </select>
        </S.FilterSelect>
    )
}

FilterSelectBox.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

const S = {
    FilterSelect: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
}
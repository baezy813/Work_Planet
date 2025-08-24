import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function InputField({
    type = 'text', 
    placeholder, 
    name,
    register, 
    errors,
    validation = {},
    ...props
}) {
    return (
        <S.InputGroup>
            <input 
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                {...props}
            />
            {errors && errors[name] && (
                <S.ErrorMessage>{errors[name].message}</S.ErrorMessage>
            )}
        </S.InputGroup>
    )
}

InputField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    validation: PropTypes.object,
    message: PropTypes.string,
  };

const S = {
    InputGroup: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        
        input {
            padding: 12px;
            border: 2px solid #e1e8ed;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s ease;
            
            &:focus {
                outline: none;
                border-color: #667eea;
            }
        }
    `,
    ErrorMessage: styled.span`
        color: #e74c3c;
        font-size: 14px;
        margin-top: 5px;
        font-weight: 500;
    `
}
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import InputField from '../../components/Login/inputField'
import { Link } from 'react-router-dom'


export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            userid:'',
            userpw:''
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>로그인</S.FormTitle>

            <InputField
                type='text'
                placeholder='아이디를 입력해주세요'
                name='userid'
                register={register}
                errors={errors}
                validation={{required: '아이디를 입력해주세요'}}
            />

            <InputField
                type='password'
                placeholder='비밀번호를 입력해주세요'
                name='userpw'
                register={register}
                errors={errors}
                validation={{required: '비밀번호를 입력해주세요'}}
            />

            <S.SubmitButton type='submit'>로그인</S.SubmitButton>
            <S.LinkButton to='/join'>회원가입</S.LinkButton>
        </S.FormContainer>
    )
}

const S = {
    FormContainer: styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 40px;
        max-width: 400px;
        margin: 0 auto;
    `,
    FormTitle: styled.h2`
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
    `,
    SubmitButton: styled.button`
        background-color: #667eea;
        color: #fff;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #5a6fd8;
        }
    `,
    LinkButton: styled(Link)`
        color: #667eea;
        text-decoration: none;
        font-size: 14px;
        margin-top: 10px;
    `
}   
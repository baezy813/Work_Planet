import styled from 'styled-components'
import { useForm, useWatch } from 'react-hook-form'
import InputField from '../../components/Login/inputField'
import { useNavigate } from 'react-router-dom'
export default function JoinForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues:{
            username:'',
            userid:'',
            userpw:'',
            userpwConfirm:''
        }
    })

    const userpw = useWatch({
        control: control,
        name: 'userpw'
    })
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        navigate('/login')
    }

    return(
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>회원가입</S.FormTitle>
            
            <InputField
                type="text"
                placeholder="이름을 입력해주세요"
                name="username"
                register={register}
                errors={errors}
                validation={{ required: '이름을 입력해주세요' }}
            />

            <InputField
                type="text"
                placeholder="아이디를 입력해주세요"
                name="userid"
                register={register}
                errors={errors}
                validation={{ required: '아이디를 입력해주세요' }}
            />

            <InputField
                type="password"
                placeholder="비밀번호를 입력해주세요"
                name="userpw"
                register={register}
                errors={errors}
                validation={{ 
                    required: '비밀번호를 입력해주세요',
                    minLength: {
                        value: 8,
                        message: '비밀번호는 8자 이상이어야 합니다.'
                    }
                }}
            />

            <InputField
                type="password"
                placeholder="비밀번호를 확인해주세요"
                name="userpwConfirm"
                register={register}
                errors={errors}
                validation={{
                    required: '비밀번호 확인을 입력해주세요',
                    validate: (value) => {
                        if (value !== userpw) {
                            return '비밀번호가 일치하지 않습니다'
                        }
                        return true
                    }
                }}
            />

            <S.SubmitButton type='submit'>회원가입</S.SubmitButton>
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
    `
}
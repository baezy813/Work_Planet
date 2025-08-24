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
        const existingUsers = JSON.parse(localStorage.getItem('users')||'[]')

        // 중복 아이디 체크
        const isDuplicateId = existingUsers.some(user => user.userid === data.userid) 
        if(isDuplicateId){
            alert('이미 존재하는 아이디입니다.')
            return
        }

        const newUser = {
            username: data.username,
            userid: data.userid,
            createdAt: new Date().toISOString()
        }

       existingUsers.push(newUser);
       alert('회원가입이 완료되었습니다.')
       localStorage.setItem('users', JSON.stringify(existingUsers))        
        console.log(existingUsers)
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
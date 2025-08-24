import styled from 'styled-components'
import { useState } from 'react'
import { fetchGetRandomQuote } from '../../api/random-quote'

export default function RandomQuote(){
    const [quote, setQuote] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchRandomQuote = async () => {
        setLoading(true)
        setError(null)
        
       try{
        const data = await fetchGetRandomQuote()
        setQuote(data)}catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    return(
        <S.Container>
            <h1>랜덤 명언</h1>
            
            <S.QuoteButton 
                onClick={fetchRandomQuote}
                disabled={loading}
            >
                {loading ? '명언 가져오는 중...' : '랜덤 명언 가져오기'}
            </S.QuoteButton>

            {error && (
                <S.ErrorMessage>
                    {error}
                </S.ErrorMessage>
            )}

            {quote && (
                <S.QuoteCard>
                    <S.QuoteMessage>
                        &quot;{quote.message}&quot;
                    </S.QuoteMessage>
                    <S.QuoteAuthor>
                        - {quote.author}
                    </S.QuoteAuthor>
                    <S.QuoteProfile>
                        {quote.authorProfile}
                    </S.QuoteProfile>
                </S.QuoteCard>
            )}
        </S.Container>
    )
}

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        padding: 40px;
        gap: 30px;
    `,
    
    QuoteButton: styled.button`
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

        &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    `,

    QuoteCard: styled.div`
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 600px;
        border: 1px solid #f0f0f0;
    `,

    QuoteMessage: styled.p`
        font-size: 20px;
        line-height: 1.6;
        color: #333;
        margin-bottom: 25px;
        font-style: italic;
        font-weight: 500;
    `,

    QuoteAuthor: styled.p`
        font-size: 18px;
        font-weight: 600;
        color: #667eea;
        margin-bottom: 10px;
    `,

    QuoteProfile: styled.p`
        font-size: 14px;
        color: #666;
        font-style: italic;
    `,

    ErrorMessage: styled.div`
        background: #fee;
        color: #c33;
        padding: 15px 25px;
        border-radius: 10px;
        border: 1px solid #fcc;
        font-size: 14px;
    `
}
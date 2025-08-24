const BASE_URL = 'https://korean-advice-open-api.vercel.app/api/advice'

export const fetchGetRandomQuote = async()=>{
    try{
        const response = await fetch(BASE_URL)
        if(!response.ok){
            throw new Error('Failed to fetch quote')
        }
        const data = await response.json()
        return data
    }catch(error){
        console.error('Error fetching quote:', error)
        throw error
    }
}
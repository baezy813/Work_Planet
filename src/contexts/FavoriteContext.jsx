import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
    const [favoriteMenus, setFavoriteMenus] = useState([])

    // 찜한 메뉴 불러오기
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteMenus')
        if (savedFavorites) {
            try {
                setFavoriteMenus(JSON.parse(savedFavorites))
            } catch (error) {
                console.error('찜한 메뉴 데이터 파싱 오류', error)
                localStorage.removeItem('favoriteMenus')
            }
        }
    }, [])

    // 찜한 메뉴 저장
    useEffect(() => {
        localStorage.setItem('favoriteMenus', JSON.stringify(favoriteMenus))
    }, [favoriteMenus])

    const toggleFavorite = (menu) => {
        const isFavorite = favoriteMenus.some(fav => fav.name === menu.name)
        
        if (isFavorite) {
            // 찜 해제
            setFavoriteMenus(prev => prev.filter(fav => fav.name !== menu.name))
        } else {
            // 찜 추가
            setFavoriteMenus(prev => [...prev, menu])
        }
    }

    const isFavorite = (menu) => {
        return favoriteMenus.some(fav => fav.name === menu.name)
    }
    const removeFavorite = (menuName) => {
        setFavoriteMenus(prev => prev.filter(fav => fav.name !== menuName))
    }

    const clearAllFavorites = () => {
        setFavoriteMenus([])
    }

    const value = {
        favoriteMenus,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearAllFavorites
    }

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

FavoriteProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useFavorite = () => {
    const context = useContext(FavoriteContext)
    if (!context) {
        throw new Error('useFavorite는 FavoriteProvider 내부서만 사용할 수 있습니다.')
    }
    return context
}

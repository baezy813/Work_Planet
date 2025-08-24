import { useState } from 'react'
import styled from 'styled-components'
import { useFavorite } from '../../contexts/FavoriteContext'
import allMenus from '../../data/recommendFoodMenu.js' 

export default function MenuRecommendation(){
    const [selectedCategory, setSelectedCategory] = useState('breakfast')
    const [selectedMenu, setSelectedMenu] = useState(null)
    
    const { favoriteMenus, toggleFavorite, isFavorite, removeFavorite } = useFavorite()

    const categories = [
        { key: 'breakfast', name: '아침', icon: '🌅' },
        { key: 'lunch', name: '점심', icon: '🌞' },
        { key: 'dinner', name: '저녁', icon: '🌙' },
        { key: 'companyDinner', name: '회식', icon: '🍻' }
    ]

    const handleCategoryClick = (category) =>{
        setSelectedCategory(category)
    }


    return(
        <S.Container>
            <S.Header>
                <S.Title>🍽️ 오늘 뭐 먹을까요?</S.Title>
                <S.Subtitle>직장인을 위한 맛집 메뉴 추천</S.Subtitle>
            </S.Header>

            <S.CategoryTabs>
                {categories.map((item)=>(
                    <S.CategoryTab 
                        onClick={()=>{handleCategoryClick(item.key)}}
                        active={selectedCategory === item.key}
                        key={item.key}
                    >
                        <S.CategoryIcon>{item.icon}</S.CategoryIcon>
                        <S.CategoryName>{item.name}</S.CategoryName>
                    </S.CategoryTab>
                ))}
            </S.CategoryTabs>

           

            <S.Content>
                <S.MenuGrid>
                    {allMenus[selectedCategory].map((item)=>(
                        <S.MenuItem onClick={()=>{setSelectedMenu(item)}} key={item.name}>
                            <S.FavoriteButton 
                                onClick={(e) => {
                                    e.stopPropagation()  
                                    toggleFavorite(item)
                                }}
                            >
                                {isFavorite(item) ? '❤️' : '🤍'}
                            </S.FavoriteButton>
                            <S.MenuImage src={item.image} alt={item.name}/>
                            <S.MenuInfo>
                                <S.MenuName>{item.name}</S.MenuName>
                                <S.MenuPrice>{item.price.toLocaleString()}원</S.MenuPrice>
                            </S.MenuInfo>
                        </S.MenuItem>
                    ))}
                </S.MenuGrid>

                <S.Sidebar>
                    <S.RandomButton onClick={() => {
                        const categoryMenus = allMenus[selectedCategory]
                        const randomIndex = Math.floor(Math.random() * categoryMenus.length)
                        setSelectedMenu(categoryMenus[randomIndex])
                    }}>
                        🎲 랜덤 추천
                    </S.RandomButton>

                    {selectedMenu && (
                        <S.SelectedMenu>
                            <S.SelectedTitle>선택된 메뉴</S.SelectedTitle>
                            <S.MenuImage src={selectedMenu.image} alt={selectedMenu.name}/>
                            <S.MenuInfo>
                                <S.MenuName>{selectedMenu.name}</S.MenuName>
                                <S.MenuPrice>{selectedMenu.price.toLocaleString()}원</S.MenuPrice>
                            </S.MenuInfo>
                        </S.SelectedMenu>
                    )}

                    {/* 찜한 메뉴 목록 */}
                    {favoriteMenus.length > 0?(
                        <S.FavoriteSection>
                            <S.FavoriteTitle> 찜한 메뉴 ({favoriteMenus.length})</S.FavoriteTitle>
                            {favoriteMenus.map((menu) => (
                                <S.FavoriteItem key={menu.name}>
                                    <S.FavoriteMenuImage src={menu.image} alt={menu.name} />
                                    <S.FavoriteMenuInfo>
                                        <S.FavoriteMenuName>{menu.name}</S.FavoriteMenuName>
                                        <S.FavoriteMenuPrice>{menu.price.toLocaleString()}원</S.FavoriteMenuPrice>
                                    </S.FavoriteMenuInfo>
                                    <S.RemoveFavoriteButton 
                                        onClick={() => removeFavorite(menu.name)}
                                    >
                                        X
                                    </S.RemoveFavoriteButton>
                                </S.FavoriteItem>
                            ))}
                        </S.FavoriteSection>
                    ):(
                        <S.FavoriteSection>
                            <S.FavoriteTitle>찜한 메뉴가 없습니다.</S.FavoriteTitle>
                            <S.FavoriteMessage>찜한 메뉴를 추가하면 여기에 표시됩니다.</S.FavoriteMessage>
                        </S.FavoriteSection>
                    )}
                </S.Sidebar>
            </S.Content>
                
        </S.Container>
    )
}

const S = {
    Container: styled.div`
        padding: 40px;
        max-width: 1400px;
        margin: 0 auto;
    `,

    Header: styled.div`
        text-align: center;
        margin-bottom: 40px;
    `,

    Title: styled.h1`
        font-size: 36px;
        font-weight: 800;
        color: #1a202c;
        margin-bottom: 12px;
    `,

    Subtitle: styled.p`
        font-size: 18px;
        color: #718096;
        font-weight: 500;
    `,

    LoadingMessage: styled.div`
        text-align: center;
        font-size: 18px;
        color: #718096;
        padding: 40px;
    `,

    CategoryTabs: styled.div`
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 40px;
    `,

    CategoryTab: styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 20px 24px;
        border: none;
        border-radius: 16px;
        background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
        color: ${props => props.active ? 'white' : '#4a5568'};
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        min-width: 120px;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
    `,

    CategoryIcon: styled.span`
        font-size: 24px;
    `,

    CategoryName: styled.span`
        font-size: 16px;
        font-weight: 600;
    `,

    Content: styled.div`
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: 40px;
        align-items: start;
    `,

    MenuGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
    `,

    MenuItem: styled.div`
        background: white;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border: 3px solid ${props => props.selected ? '#667eea' : 'transparent'};
        position: relative;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
    `,

    FavoriteButton: styled.button`
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        cursor: pointer;
        font-size: 18px;
        z-index: 10;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 1);
        }
    `,

    MenuImage: styled.img`
        width: 100%;
        height: 180px;
        object-fit: cover;
    `,

    MenuInfo: styled.div`
        padding: 20px;
    `,

    MenuName: styled.h3`
        font-size: 16px;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 8px;
        line-height: 1.4;
    `,

    MenuPrice: styled.p`
        font-size: 18px;
        font-weight: 700;
        color: #667eea;
    `,

    Sidebar: styled.div`
        position: sticky;
        top: 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,

    RandomButton: styled.button`
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(240, 147, 251, 0.6);
        }
    `,

    SelectedMenu: styled.div`
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    `,

    SelectedTitle: styled.h3`
        font-size: 18px;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 20px;
        text-align: center;
    `,

    FavoriteSection: styled.div`
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    `,

    FavoriteTitle: styled.h3`
        font-size: 18px;
        font-weight: 600;
        color: #1a202c;
        margin-bottom: 20px;
        text-align: center;
    `,

    FavoriteItem: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 8px;
        background: #f7fafc;
        margin-bottom: 8px;
    `,

    FavoriteMenuImage: styled.img`
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 8px;
    `,

    FavoriteMenuInfo: styled.div`
        flex: 1;
    `,

    FavoriteMenuName: styled.h4`
        font-size: 14px;
        font-weight: 600;
        color: #1a202c;
        margin: 0 0 4px 0;
    `,

    FavoriteMenuPrice: styled.p`
        font-size: 12px;
        color: #667eea;
        font-weight: 600;
        margin: 0;
    `,

    RemoveFavoriteButton: styled.button`
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s ease;

        &:hover {
            background: #fed7d7;
            transform: scale(1.1);
        }
    `,

    FavoriteMessage: styled.p`
        font-size: 14px;
        color: #718096;
        text-align: center;
        margin: 0;
    `
}
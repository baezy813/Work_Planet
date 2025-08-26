
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Navbar({ setIsLogoutPopupOpen }) {
  const handleLogout = () => {
    setIsLogoutPopupOpen(true)
  }

  return (
    <S.Sidebar>
      <S.SidebarHeader>
        <S.Logo>
          <S.LogoIcon>💼</S.LogoIcon>
          <S.LogoText>Work Planet</S.LogoText>
        </S.Logo>
      </S.SidebarHeader>

      <S.NavMenu>
        <S.NavItem>
          <NavLink 
            to="/mypage" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>👤</S.MenuIcon>
            <S.MenuText>Profile</S.MenuText>
          </NavLink>
        </S.NavItem>
       

        <S.NavItem>
          <NavLink 
            to="/board" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>📋</S.MenuIcon>
            <S.MenuText>게시판</S.MenuText>
          </NavLink>
        </S.NavItem>

        {/* <S.NavItem>
          <NavLink 
            to="/commute" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>🚇</S.MenuIcon>
            <S.MenuText>출퇴근</S.MenuText>
          </NavLink>
        </S.NavItem> */}

        <S.NavItem>
          <NavLink 
            to="/restaurant" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>🍜</S.MenuIcon>
            <S.MenuText>맛집</S.MenuText>
          </NavLink>
        </S.NavItem>

        <S.NavItem>
          <NavLink 
            to="/playlist" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>🎵</S.MenuIcon>
            <S.MenuText>플레이리스트</S.MenuText>
          </NavLink>
        </S.NavItem>

        <S.NavItem>
          <NavLink 
            to="/quote" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <S.MenuIcon>💭</S.MenuIcon>
            <S.MenuText>명언</S.MenuText>
          </NavLink>
        </S.NavItem>

        
      </S.NavMenu>

      <S.SidebarFooter>
        <S.UpgradeCard>
          <button onClick={handleLogout}>로그아웃</button>
        </S.UpgradeCard>
      </S.SidebarFooter>
    </S.Sidebar>
  )
}

Navbar.propTypes = {
  setIsLogoutPopupOpen: PropTypes.func.isRequired
}

export default Navbar

const S = {
  Sidebar: styled.nav`
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  `,

  SidebarHeader: styled.div`
    padding: 32px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `,

  Logo: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  LogoIcon: styled.span`
    font-size: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  `,

  LogoText: styled.span`
    color: white;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
  `,

  NavMenu: styled.ul`
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  NavItem: styled.li`
    margin: 0 16px;

    .nav-link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(8px);
      }

      &.active {
        color: white;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transform: translateX(8px);

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #f093fb 0%, #f5576c 100%);
          border-radius: 0 2px 2px 0;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
      }

      &:hover::before {
        left: 100%;
      }
    }
  `,

  MenuIcon: styled.span`
    font-size: 20px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    min-width: 24px;
    text-align: center;
  `,

  MenuText: styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3px;
  `,

  SidebarFooter: styled.div`
    padding: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  `,

  UpgradeCard: styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `,

  UpgradeTitle: styled.h3`
    color: white;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    opacity: 0.9;
  `,

  UpgradeButton: styled.button`
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
    }
  `
}

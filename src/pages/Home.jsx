import styled from 'styled-components'

function Home() {
  return (
    <S.Container>
      <h1>홈 페이지</h1>
      <p>Vite + React 앱에 오신 것을 환영합니다!</p>
      <div className="features">
        <div className="feature">
          <h3>🚀 빠른 개발</h3>
          <p>Vite의 빠른 HMR로 즉시 변경사항을 확인하세요.</p>
        </div>
        <div className="feature">
          <h3>⚛️ React 18</h3>
          <p>최신 React 기능을 활용한 현대적인 웹 앱을 구축하세요.</p>
        </div>
        <div className="feature">
          <h3>🎨 모던 UI</h3>
          <p>깔끔하고 반응형 디자인으로 사용자 경험을 향상시키세요.</p>
        </div>
      </div>
    </S.Container>
  )
}

export default Home

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
}

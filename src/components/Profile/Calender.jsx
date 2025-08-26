import styled from 'styled-components'
import Calendar from 'react-calendar'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'

export default function CommonCalender(){
    return(
        <S.CalendarContainer>
            <S.CalendarWrapper>
                <Calendar
                    locale='ko' 
                    formatDay={(locale, date) => moment(date).format("DD")}
                    className="custom-calendar"
                />
            </S.CalendarWrapper>
        </S.CalendarContainer>
    )
}

const S = {
    CalendarContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    `,

    CalendarWrapper: styled.div`
        .custom-calendar {
            width: 100%;
            border: none;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            font-family: inherit;
            overflow: hidden;
            
            /* 네비게이션 바 스타일링 */
            .react-calendar__navigation {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              height:80px
                
                button {
                    color: white;
                    font-size: 18px;
                    font-weight: 700;
                    background: none;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    min-width: 44px;
                    
                  
                    
                    
                
                .react-calendar__navigation__label {
                    font-size: 20px;
                    font-weight: 800;
                    white-space: nowrap;
                    text-transform: capitalize;
                }
                
                .react-calendar__navigation__arrow {
                    font-size: 36px;
                }
            }
            
            /* 요일 헤더 스타일링 */
            .react-calendar__month-view__weekdays {
                background: #f8fafc;
                padding: 15px 0;
                margin: 0;
                
                abbr {
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 700;
                    color: #4a5568;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            }
            
            /* 날짜 타일 스타일링 */
            .react-calendar__tile {
                padding: 16px 8px;
                border-radius: 12px;
                margin: 3px;
                font-weight: 600;
                color: #1a202c;
                transition: all 0.3s ease;
                position: relative;
                background: white;
                border: 2px solid transparent;
                min-height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                
              
              
                
                /* 오늘 날짜 스타일 */
                &.react-calendar__tile--now {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    font-weight: 800;
                    border-color: #4c51bf;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                    
                   
                }
                
                /* 선택된 날짜 스타일 */
                &.react-calendar__tile--active {
                    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                    color: white;
                    font-weight: 800;
                    border-color: #553c9a;
                    box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);
                    
                    &:hover {
                        background: linear-gradient(135deg, #6b46c1 0%, #5a6fd8 100%);
                        transform: translateY(-3px) scale(1.05);
                        box-shadow: 0 8px 25px rgba(118, 75, 162, 0.5);
                    }
                }
                
                /* 이번 달이 아닌 날짜 스타일 */
                &.react-calendar__month-view__days__day--neighboringMonth {
                    color: #cbd5e0;
                    background: #f7fafc;
                    font-weight: 400;
                    
                    &:hover {
                        background: #edf2f7;
                        transform: none;
                        box-shadow: none;
                        border-color: transparent;
                    }
                }
                
                /* 주말 스타일 */
                &.react-calendar__month-view__days__day--weekend {
                    color: #e53e3e;
                    font-weight: 700;
                }
                
                /* 오늘 날짜이면서 주말인 경우 */
                &.react-calendar__tile--now.react-calendar__month-view__days__day--weekend {
                    color: white;
                }
            }
            
            /* 월 뷰 컨테이너 */
            .react-calendar__month-view__days {
                padding: 10px;
                background: white;
            }
            
            /* 년도 뷰 스타일링 */
            .react-calendar__year-view__months__month,
            .react-calendar__decade-view__years__year,
            .react-calendar__century-view__decades__decade {
                padding: 20px;
                border-radius: 12px;
                margin: 5px;
                font-weight: 600;
                transition: all 0.3s ease;
                
             
            }
            
            /* 전체 배경 */
            .react-calendar__viewContainer {
                background: white;
                padding: 0;
            }
        }
    `
}
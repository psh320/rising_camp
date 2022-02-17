import React from "react";
import "./Main.css";
import { ReactComponent as SearchIcon} from "../../assets/search_icon.svg";
import TravelCard from "./TravelCard";
import ExpCard from "./ExpCard";

const Main = () => {
    return (
        <div>
            <div className="color">
                <form id="search">
                    <div className="search-bar" id="searchbar">
                        <div className="searchbar1">
                            <div>
                                <label className="search-label">위치</label>
                                <input className="no_border" placeholder="어디로 여행가세요?"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar2">
                            <label className="search-label">체크인</label>
                            <div>
                                <input placeholder="날짜 입력"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar3">
                            <label className="search-label">체크아웃</label>
                            <div>
                                <input placeholder="날짜 입력"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar4">
                            <div role="button" className="inputs">
                                <label className="search-label">인원</label>
                                <div className="placeholder">게스트 추가</div>
                            </div>

                            <div className="submit">
                                <button className="search-button1">
                                    <div className="search-icon1">
                                        <SearchIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="center">
                    <div className="grid1">
                        <div className="grid1-1">
                            <div className="flex4">
                                <a href="#" className="no-underline">
                                    <span className="more-button">
                                        <p style={{"fontWeight": 800}}>유연한 검색</p>
                                    </span>
                                </a>
                                
                                <h1 className="text"><span>
                                    에어비엔비가<br/> 여행지를 찾아드릴게요!
                                </span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="banner2">
                    <div className="banner2-box1">
                        <div className="head1">
                            <span className="head-text">설레는 다음 여행을 위한 아이디어</span>
                        </div>
                    </div>
                    <div className="banner2-box2">
                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_q=highq&im_w=720)"
                            color = "rgb(222, 49, 81)"
                            name = "제주도(JEJU)"
                            distance = "455km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/241d2e75-21ed-4b13-bf46-673baf1abc69.jpg?im_q=highq&im_w=720)"
                            color = "rgb(188, 26, 110)"
                            name = "부산"
                            distance = "324km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_q=highq&im_w=720)"
                            color = "rgb(204, 45, 74)"
                            name = "강릉시"
                            distance = "166km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/2d80dcb3-cbe3-4414-ac0f-3a6af22b9ab3.jpg?im_q=highq&im_w=720)"
                            color = "rgb(217, 59, 48)"
                            name = "속초시"
                            distance = "157km"
                        />
                    </div>
                </div>
                    
                <div className="banner3">
                    <div className="banner2-box1">
                        <div className="head1">
                            <span className="head-text">에어비엔비 체험 둘러보기</span>
                        </div>
                    </div>
                    
                    <div className="banner3-box2">
                        <ExpCard
                            image="url(https://a0.muscache.com/im/pictures/ae7fadb9-0b76-49a7-a45a-835a7390144e.jpg?im_w=480)"
                            text="여행 중 만나는 이색적인 즐길 거리"
                            button_text ="체험"
                        />

                        <ExpCard
                            image="url(https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=480)"
                            text="집에서 만나는 다양한 즐길 거리"
                            button_text ="온라인 체험"
                        />
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default Main;
import React,{useState, useEffect, useRef} from "react";
import "./Main.css";
import { ReactComponent as SearchIcon} from "../../assets/search_icon.svg";
import { ReactComponent as Lang} from "../../assets/lang.svg";
import { ReactComponent as ThreeLine} from "../../assets/three_line.svg";
import { ReactComponent as UserShape} from "../../assets/user_shape.svg";
import { ReactComponent as Logo} from "../../assets/logo.svg";
import TravelCard from "./TravelCard";
import ExpCard from "./ExpCard";
import Header from "../Header";
import Calendar from "../Calendar";
import Guest from "../Guest";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import moment from "moment";
import {Placeholder} from "../../styles"
import { updateLocation } from "../../actions";

const Main = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const checkdate = useSelector((state) => state.search)
    const [scrollPos, setScrollPos] = useState(0);
    const [isSearch, setIsSearch] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openGuest, setOpenGuest] = useState(false);
    const toggle_calendar = () => {
        setOpenCalendar(true);
    }
    const toggle_guest = () => {
        setOpenGuest(true);
    }
    const calendarRef= useRef(null);
    const guestRef= useRef(null);
    function useOutsideAlerterCal(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenCalendar(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    function useOutsideAlerterGuest(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenGuest(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/s")
    }

    useOutsideAlerterCal(calendarRef);
    useOutsideAlerterGuest(guestRef);
    return (
        <div>
            <aside className="corona">
                <Link to="#" >
                    <span className="font corona-text">?????????????????? ?????????19 ?????? ????????? ?????? ?????? ????????? ???????????????.</span>
                </Link>
            </aside>
            <div className="toggle_header" style={scrollPos < 95 ? {top: "-150px"} :{top: "0px"}}>
                <Header pageType={"main"} onSelectSearch={setIsSearch} setScrollPos={setScrollPos}/>
            </div>
            <div className="color">
                <div style={scrollPos < 95 ? {visibility: "visible"} :{visibility: "hidden"}}>
                    <div className="nav-bar-main">
                        <div className="flex1-main">
                            <div className="space1-main">
                                <Link className="logo-image-main" to="#">
                                    <div>
                                        <Logo />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex2-main">
                            <div className="option-box-main">
                                <Link to="/s">
                                    <button className="option-button-main">
                                        <span className="option-text-main">??????</span>
                                    </button>
                                </Link>
                                <Link to="/s">
                                    <button className="option-button-main">
                                        <span className="option-text-main">??????</span>
                                    </button>
                                </Link>
                                <div>
                                    <Link to="#" className="no-underline text1-main">
                                        <div className="option-text-main">
                                            ????????? ??????
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex3-main">
                            <div className="login-box-main">
                                <div className="etc-main">
                                    <Link to="#" className="host-main no-underline">
                                        <div>????????? ??????</div>
                                    </Link>
                                    <button className="lang-button-main">
                                        <div><Lang /></div>
                                    </button>
                                    
                                </div>
                                <div>
                                    <div>
                                        <button type="button" className="login-main">
                                            <div>
                                                <ThreeLine />
                                            </div>
                                            <div className="_retf">
                                                <UserShape width="30" height="30" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form id="search">
                        <div className="search-bar" id="searchbar">
                            <div className="searchbar1">
                                <div>
                                    <label className="search-label">??????</label>
                                    <input className="no_border" placeholder="????????? ????????????????" value={checkdate.location} onChange={(e) => {dispatch(updateLocation(e.target.value))}}/>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="searchbar2" onClick={toggle_calendar} style={{position: "relative"}}>
                                <div role="button" className="inputs">
                                    <label className="search-label">?????????</label>
                                    <Placeholder isNull={checkdate.date.startDate == null}>
                                        {checkdate.date.startDate == null ? "?????? ??????" : moment(checkdate.date.startDate).format('MM??? DD???')}
                                    </Placeholder>
                                </div>
                                <div ref={calendarRef} className="calendar-box-main" style={openCalendar ? {display:"flex"}:{display:"none"}}>
                                    <Calendar />
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="searchbar3" onClick={toggle_calendar}>
                                <div role="button" className="inputs">
                                    <label className="search-label">????????????</label>
                                    <Placeholder isNull={checkdate.date.endDate == null}>
                                        {checkdate.date.endDate == null ? "?????? ??????" : moment(checkdate.date.endDate).format('MM??? DD???')}
                                    </Placeholder>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="searchbar4">
                                <div role="button" className="inputs" onClick={toggle_guest}>
                                    <label className="search-label">??????</label>
                                    <div className="placeholder font">????????? ??????</div>
                                </div>
                                <div ref={guestRef} style={openGuest ? {display:"flex"}:{display:"none"}}><Guest /></div>

                                <div className="submit">
                                    <button className="search-button1" onClick={handleSubmit}>
                                        <div className="search-icon1">
                                            <SearchIcon />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="center">
                    <div className="grid1">
                        <div className="grid1-1">
                            <div className="flex4">
                                <Link to="/s" className="no-underline">
                                    <span className="more-button">
                                        <p style={{"fontWeight": 800}}>????????? ??????</p>
                                    </span>
                                </Link>
                                
                                <h1 className="text"><span>
                                    ??????????????????<br/> ???????????? ??????????????????!
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
                            <span className="head-text">????????? ?????? ????????? ?????? ????????????</span>
                        </div>
                    </div>
                    <div className="banner2-box2">
                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_q=highq&im_w=720)"
                            color = "rgb(222, 49, 81)"
                            name = "?????????(JEJU)"
                            distance = "455km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/241d2e75-21ed-4b13-bf46-673baf1abc69.jpg?im_q=highq&im_w=720)"
                            color = "rgb(188, 26, 110)"
                            name = "??????"
                            distance = "324km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_q=highq&im_w=720)"
                            color = "rgb(204, 45, 74)"
                            name = "?????????"
                            distance = "166km"
                        />

                        <TravelCard 
                            image = "url(https://a0.muscache.com/im/pictures/2d80dcb3-cbe3-4414-ac0f-3a6af22b9ab3.jpg?im_q=highq&im_w=720)"
                            color = "rgb(217, 59, 48)"
                            name = "?????????"
                            distance = "157km"
                        />
                    </div>
                </div>
                    
                <div className="banner3">
                    <div className="banner2-box1">
                        <div className="head1">
                            <span className="head-text">??????????????? ?????? ????????????</span>
                        </div>
                    </div>
                    
                    <div className="banner3-box2">
                        <ExpCard
                            image="url(https://a0.muscache.com/im/pictures/ae7fadb9-0b76-49a7-a45a-835a7390144e.jpg?im_w=480)"
                            text="?????? ??? ????????? ???????????? ?????? ??????"
                            button_text ="??????"
                        />

                        <ExpCard
                            image="url(https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=480)"
                            text="????????? ????????? ????????? ?????? ??????"
                            button_text ="????????? ??????"
                        />
                    </div>
                </div>

                <div className="banner4" style={{"backgroundImage": "url(https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1440)"}}>
                    <div className="head4">
                        ???????????? ??????<br/> ???????????? ??????<br/> ??????????
                    </div>
                    <Link to="#">
                        <div className="link-button">????????????????????? ???????????????</div>
                    </Link>
                </div>
            </div>
                
        </div>
    );
}

export default Main;
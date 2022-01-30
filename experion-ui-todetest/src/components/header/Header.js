import React, { useState, useEffect } from "react";

import classes from "./Header.module.scss";
import profileImage from "../../assets/images/propic.svg";

const Header = () => {
    const [isDropdownActive, setDropdownActive] = useState("false");
    
    const handleToggle = () => {
        setDropdownActive(!isDropdownActive);
    };

    return (
        <header className={classes.navbar}>
            <div className={classes.navbar_title}>
                <h1>
                    Hi John!
                </h1>
                <span className={classes.navbar_sm_logo}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2406 6.91849C15.0682 6.91849 14.1178 7.86466 14.1178 9.03181V21.9682C14.1178 25.2995 11.4052 28 8.05891 28C4.71267 28 2 25.2995 2 21.9682V16.5201H5.9361V21.9682C5.9361 23.1353 6.88651 24.0815 8.05891 24.0815C9.23131 24.0815 10.1817 23.1353 10.1817 21.9682V9.03181C10.1817 5.70054 12.8944 3 16.2406 3C19.5869 3 22.2995 5.70053 22.2995 9.03181V13.1198H18.3634V9.03181C18.3634 7.86466 17.413 6.91849 16.2406 6.91849ZM18.3635 22.2078V16.4583H22.2996V22.2078C22.2996 23.2426 23.1422 24.0815 24.1817 24.0815C25.2212 24.0815 26.0639 23.2426 26.0639 22.2078V16.4583H30V22.2078C30 25.4067 27.3951 28 24.1817 28C20.9684 28 18.3635 25.4067 18.3635 22.2078Z" fill="#1750FF"/>
                    </svg>
                </span>
            </div>
            <nav className={classes.navbar_nav}>
                <ul>
                    <li>
                        <div className={classes.search_wrap}>
                            <button type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21 21L16.65 16.65" stroke="#041131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </button>
                            <input type="text" placeholder="Search for products, brands and more" />
                        </div>
                    </li>
                    <li>
                        <a href="#" className={classes.wishlist}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.6596 5.67794C20.1408 6.22368 20.5034 6.8674 20.7237 7.56672C20.9614 8.29783 21.0472 9.07162 20.9754 9.83856C20.9037 10.6055 20.6761 11.3487 20.3072 12.0205C19.0193 14.3407 16.4307 16.9341 12.6108 19.7273C12.4364 19.8546 12.2274 19.9231 12.0131 19.9231C11.7988 19.9231 11.5898 19.8546 11.4154 19.7273C7.57748 16.9289 4.98886 14.3354 3.70354 12.0179C3.3307 11.3453 3.09988 10.6003 3.02593 9.83091C2.95199 9.06154 3.03658 8.28487 3.27425 7.55095C3.49563 6.85381 3.85883 6.21245 4.33998 5.669C4.82113 5.12556 5.40934 4.69235 6.06595 4.39782C7.57234 3.7199 9.13271 3.90909 10.5774 4.96013C11.1092 5.35023 11.5873 5.81155 11.999 6.33174C12.4106 5.81155 12.8887 5.35023 13.4205 4.96013C14.8678 3.91434 16.4256 3.72253 17.932 4.40045C18.5896 4.69682 19.1784 5.1322 19.6596 5.67794Z" stroke="black" strokeWidth="1.5"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classes.cart}>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 18.0714L2.28 5.5H15.72L17 18.0714H1Z" stroke="black" strokeWidth="1.5"/>
                                <path d="M12.4286 7.7857V4.35713C12.4286 2.46358 10.8935 0.928558 8.99998 0.928558V0.928558C7.10643 0.928558 5.57141 2.46358 5.57141 4.35713V7.7857" stroke="black" strokeWidth="1.5"/>
                            </svg>
                            <svg className={classes.notify} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#0F255F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#0F255F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </li>
                    <li className={classes.dd_wrap}>
                        <button type="button" className={classes.dd_profile_btn} onClick={handleToggle}>
                            <img src={profileImage} className={classes.dd_profile} alt="Profile" />
                        </button>
                        <ul className={`${classes.dd_menu} ${!isDropdownActive ? "show" : ""}`}>
                            <li><a className={classes.dd_item} href="#">View Profile</a></li>
                            <li><a className={classes.dd_item} href="#">Settings</a></li>
                            <li><a className={classes.dd_item} href="#">Signout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

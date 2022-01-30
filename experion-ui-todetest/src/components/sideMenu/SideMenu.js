import React, { useState, useEffect } from "react";

import classes from "./SideMenu.module.scss";
import { SideMenuData } from "./SideMenuData";

const SideMenu = () => {
    return (
        <div className="sidebar-wrap">
            <div className={classes.sidebar}>
                <div className={classes.sidebar_logo}>
                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.2406 3.91849C13.0682 3.91849 12.1178 4.86466 12.1178 6.03181V18.9682C12.1178 22.2995 9.40515 25 6.05891 25C2.71267 25 0 22.2995 0 18.9682V13.5201H3.9361V18.9682C3.9361 20.1353 4.88651 21.0815 6.05891 21.0815C7.23131 21.0815 8.18172 20.1353 8.18172 18.9682V6.03181C8.18172 2.70054 10.8944 0 14.2406 0C17.5869 0 20.2995 2.70053 20.2995 6.03181V10.1198H16.3634V6.03181C16.3634 4.86466 15.413 3.91849 14.2406 3.91849ZM16.3635 19.2078V13.4583H20.2996V19.2078C20.2996 20.2426 21.1422 21.0815 22.1817 21.0815C23.2212 21.0815 24.0639 20.2426 24.0639 19.2078V13.4583H28V19.2078C28 22.4067 25.3951 25 22.1817 25C18.9684 25 16.3635 22.4067 16.3635 19.2078Z" fill="white"/>
                    </svg>
                </div>
                <ul className={classes.sidebar_list}>
                    {SideMenuData.map((val, key) => {
                        return (
                            <li className={classes.sidebar_item} id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={() => window.location.pathname = val.link}>
                                <span className={classes.sidebar_icon}>{val.icon}</span>
                                <span className={classes.sidebar_title}>{val.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
import React from "react";
import style from  './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <h2>Konstantin Karelin</h2>
                <div className={style.links}>
                    <div className={style.link1}>Github</div>
                    <div className={style.link2}>LikedIn</div>
                    <div className={style.link1}>Instagram</div>
                    <div className={style.link2}>Facebook</div>
                    <div className={style.link1}>Telegram</div>
                </div>
                <p>Copyright © 2020 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
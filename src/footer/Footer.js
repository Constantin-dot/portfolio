import React from "react";
import style from './Footer.module.scss';
import Title from "../common/components/title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={style.block} id={"footer"}>
            <div className={style.container}>
                <Title title={"Constantin Karelin"} />
                <div className={style.links}>
                    <div className={style.link1}><FontAwesomeIcon icon={faGithub}/></div>
                    <div className={style.link2}><FontAwesomeIcon icon={faLinkedinIn}/></div>
                    <div className={style.link1}><FontAwesomeIcon icon={faInstagram}/></div>
                    <div className={style.link2}><FontAwesomeIcon icon={faFacebook}/></div>
                    <div className={style.link1}><FontAwesomeIcon icon={faTelegram}/></div>
                </div>
                <p>Copyright © 2020 All rights reserved.</p>
                <a href="http://www.freepik.com">Photos designed by Freepik</a>
            </div>
        </div>
    )
}

export default Footer;
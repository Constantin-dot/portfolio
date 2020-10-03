import React from "react";
import style from "./About.module.scss";
import Title from "../common/components/title/Title";
import runningImg from "../assets/image/running.jpg";


const About = () => {
    const running = {
        backgroundImage: `url(${runningImg})`
    }

    return (
        <div className={style.block} id={"about"}>
            <div className={style.container}>
                <Title title={"About"}/>
                <div className={style.description}>
                    <h4>A SMALL INTRODUCTION ABOUT MY SELF</h4>
                    <p>
                        Ultricies nisi voluptatem, illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemo enim ipsam
                        voluptatem. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo tempor dignissim at. My Philosophy
                        Etiam eget mi enim, non ultricies nisi voluptatem, illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        nemo enim ipsam voluptatem.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                    <div className={style.facts}>
                        <div className={style.cube}>
                            <div className={style.fact}>
                                <span className={style.topLeft}>
                                </span>
                                <span className={style.topRight}>
                                </span>
                                <span className={style.bottomLeft}>
                                </span>
                                <span className={style.bottomRight}>
                                </span>
                            </div>
                            <div className={style.num}>8</div>
                            <h6>Used technologies</h6>
                        </div>
                        <div className={style.cube}>
                            <div className={style.fact}>
                                <span className={style.topLeft}>
                                </span>
                                <span className={style.topRight}>
                                </span>
                                <span className={style.bottomLeft}>
                                </span>
                                <span className={style.bottomRight}>
                                </span>
                            </div>
                            <div className={style.num}>3</div>
                            <h6>Made projects</h6>
                        </div>
                        <div className={style.cube}>
                            <div className={style.fact}>
                                <span className={style.topLeft}>
                                </span>
                                <span className={style.topRight}>
                                </span>
                                <span className={style.bottomLeft}>
                                </span>
                                <span className={style.bottomRight}>
                                </span>
                            </div>
                            <div className={style.num}>1000</div>
                            <h6>More then 1000 <br/>
                            hours of practice</h6>
                        </div>
                    </div>
                    <div className={style.photo} style={running}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
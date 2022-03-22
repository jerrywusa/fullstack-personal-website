import React from "react";
import TypeAnimation from "react-type-animation";
import Bounce from "react-reveal/Bounce";
import style from "../../../sass/AboutPage/TypingText.module.scss";

function TypingText({ staticText, sequence, revealAnimation }) {
    return (
        <Bounce right={revealAnimation.right}>
            <p className={style["static-text"]}>
                {staticText}
                <TypeAnimation
                    cursor={false}
                    sequence={sequence}
                    repeat={Infinity}
                    wrapper="b"
                    className={style["typing-cursor"]}
                />
            </p>
        </Bounce>
    );
}

export default TypingText;

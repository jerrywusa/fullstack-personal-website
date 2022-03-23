import React from "react";
import TypeAnimation from "react-type-animation";
import style from "../../../sass/AboutPage/TypingText.module.scss";

function TypingText({ staticText, sequence, revealAnimation }) {
    return (
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
    );
}

export default TypingText;

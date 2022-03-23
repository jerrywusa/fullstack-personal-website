import React, { useEffect, useState } from "react";
import style from "../../../sass/AboutPage/AboutPage.module.scss";
import TypingText from "./TypingText";
import Page from "../shared/Page";
import SpotifyPlaylists from "./SpotifyPlaylists";
import Bounce from "react-reveal";
import BubbleParticles from "../shared/BubbleParticles";

function AboutPage({ bindScrollSnap, particles, page1, page2 }) {
    const [container] = useState(React.createRef());

    const darkgrey = "#282828";
    const red = "#cc241d";
    const green = "#98971a";
    const yellow = "#d79921";
    const blue = "#458588";
    const purple = "#b16286";
    const aqua = "#689d6a";
    const grey = "#a89984";
    const white = "#ebdbb2";

    useEffect(() => {
        bindScrollSnap(container);
    });

    return (
        <div className={style["container"]} ref={container}>
            <BubbleParticles
                particleColor={particles.particleColor}
                hoverParticleColor={particles.hoverParticleColor}
                onClick={particles.onClick}
                onHover={particles.onHover}
            />
            <Page
                backgroundColor={page1.backgroundColor}
                content={
                    <TypingText
                        staticText={page1.typingText.staticText}
                        sequence={page1.typingText.sequence}
                        revealAnimation={page1.typingText.revealAnimation}
                    />
                }
            />
            <Page
                backgroundColor={page2.backgroundColor}
                content={
                    <>
                        <Bounce bottom>
                            <p className={style["title-text"]}>
                                I enjoy listening to{" "}
                                <b>
                                    <span style={{ color: darkgrey }}>
                                        music
                                    </span>
                                </b>
                            </p>
                        </Bounce>
                        <div className={style["playlist-container"]}>
                            <SpotifyPlaylists playlists={page2.playlists} />
                        </div>
                    </>
                }
            />
        </div>
    );
}

export default AboutPage;

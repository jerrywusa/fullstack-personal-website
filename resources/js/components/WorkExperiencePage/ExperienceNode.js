import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import style from "../../../sass/WorkExperiencePage/ExperienceNode.module.scss";

function ExperienceNode({
    icon,
    iconAlt,
    positionTitle,
    startDate,
    endDate,
    companyName,
    companyLink,
    workDescription,
    revealAnimation,
    emphasize,
}) {
    return (
        <div className={style["container"]}>
            <Fade
                left={revealAnimation.positionTitle.left}
                delay={revealAnimation.positionTitle.delay}
            >
                <p className={style["position-title"]}>{positionTitle}</p>
            </Fade>
            <Fade
                left={revealAnimation.date.left}
                delay={revealAnimation.date.delay}
            >
                <p className={style["date"]}>{startDate + " — " + endDate}</p>
            </Fade>
            <Bounce delay={revealAnimation.icon.delay}>
                <div className={style["vertical-line"]} />
                <img className={style["icon"]} src={icon} alt={iconAlt} />
            </Bounce>

            <Fade
                right={revealAnimation.companyName.right}
                delay={revealAnimation.companyName.delay}
            >
                <a
                    className={style["company-name"]}
                    href={companyLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {companyName}
                </a>
            </Fade>
            <Fade
                right={revealAnimation.workDescription.right}
                delay={revealAnimation.workDescription.delay}
            >
                <p className={style["work-description"]}>{workDescription}</p>
            </Fade>
        </div>
    );
}

export default ExperienceNode;

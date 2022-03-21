import React from "react";
import Tile from "./Tile";
import style from "../../../sass/HomePage/HomePage.module.scss";

// future idea: opaque bright blob that follows mouse and leaves a trace
function HomePage({ tileRipple, timeoutDuration, tiles }) {
    return (
        <div className={style["container"]}>
            {tiles.map(
                ({
                    title,
                    description,
                    position,
                    pathName,
                    revealAnimation,
                    uid,
                }) => (
                    <Tile
                        tileRipple={tileRipple}
                        timeoutDuration={timeoutDuration}
                        title={title}
                        description={description}
                        position={position}
                        pathName={pathName}
                        revealAnimation={revealAnimation}
                        key={uid}
                    />
                )
            )}
        </div>
    );
}
export default HomePage;
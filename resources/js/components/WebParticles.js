import Particles from "react-tsparticles";
import style from "../../sass/WebParticles.module.scss";

function WebParticles(props) {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {},
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                },
                fullScreen: {
                    zIndex: 1,
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            mode: "grab",
                            parallax: {
                                enable: true,
                                force: 60,
                            },
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        grab: {
                            distance: 400,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: {
                            value: "#ffffff",
                        },
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                    },
                    move: {
                        attract: {
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
                        },
                        enable: true,
                        path: {},
                        outModes: {
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out",
                        },
                        spin: {},
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                    },
                    opacity: {
                        random: {
                            enable: true,
                        },
                        value: {
                            min: 0.1,
                            max: 0.5,
                        },
                        animation: {
                            enable: true,
                            speed: 3,
                            minimumValue: 0.1,
                        },
                    },
                    size: {
                        random: {
                            enable: true,
                        },
                        value: {
                            min: 0.1,
                            max: 10,
                        },
                        animation: {
                            enable: true,
                            speed: 20,
                            minimumValue: 0.1,
                        },
                    },
                },
            }}
        />
    );
}

export default WebParticles;

// Инициализация компонента ParticlesJS, который использует библиотеку react-tsparticles для отображения анимированных частиц на фоне. 
// Параметры частиц, такие как количество, прозрачность, размер, связи и движение, настраиваются в объекте options.
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesJS() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 200,
                        limit: 300,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.5,
                            sync: false
                        }
                    },
                    size: {
                        value: 30,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 10,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    modes: {
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 100,
                            duration: 2,
                            opacity: 1,
                            speed: 2
                        },
                        repulse: {
                            distance: 200
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                backgroundMask: {
                    enable: true,
                    cover: {
                        color: {
                            value: {
                                r: 255,
                                g: 255,
                                b: 255
                            }
                        }
                    }
                },
                retina_detect: true,
                fps_limit: 120
            }}
        />
    );
};

export default ParticlesJS;
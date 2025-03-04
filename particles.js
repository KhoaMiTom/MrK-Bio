particlesJS('particles-js', {
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ["#4F46E5", "#2DD4BF", "#7C3AED"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 10,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#4F46E5",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: false
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.3
                }
            }
        }
    },
    retina_detect: false,
    fps_limit: 30
}); 
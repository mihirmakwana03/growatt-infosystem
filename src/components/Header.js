import { useEffect } from "react";
import "./Header.css";

const Header = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/finisher-header.es5.min.js"; // Ensure this is in public/
        script.type = "text/javascript";
        script.onload = () => {
            if (typeof FinisherHeader !== "undefined") {
                new Headers({
                    count: 10,
                    size: { min: 2, max: 40, pulse: 0 },
                    speed: {
                        x: { min: 0, max: 0.8 },
                        y: { min: 0, max: 0.2 },
                    },
                    colors: {
                        background: "#15182e",
                        particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"],
                    },
                    blending: "screen",
                    opacity: { center: 1, edge: 1 },
                    skew: -1,
                    shapes: ["c", "s", "t"],
                });
            } else {
                console.error("FinisherHeader is not loaded");
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="finisher-header" className="finisher-header" style={{ width: "100%", height: "0px" }}>
            Growatt InfoSystem
        </div>
    );
};

export default Header;

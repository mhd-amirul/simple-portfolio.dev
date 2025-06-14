import { React, useEffect, useState } from "react";
import ArrowUp from "../../Assets/Images/General/arrow_up.png";

function ScrollTop() {
    const [btnTop, setBtnTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBtnTop(true);
            } else {
                setBtnTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="div">
            {btnTop && (
                <button
                    type="button"
                    id="btn-back-to-top"
                    style={{
                        backgroundColor: "#007cfb",
                        backgroundImage: { ArrowUp },
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        height: "50px",
                        width: "40px",
                        border: 0,
                        borderRadius: "10px",
                    }}
                    onClick={scrollUp}>
                    <img src={ArrowUp} alt="" srcset="" />
                </button>
            )}
        </div>
    );
}

export default ScrollTop;

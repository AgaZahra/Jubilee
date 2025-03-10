import React from 'react';
import { MdOutlineFlashOn } from "react-icons/md";

const Banner = () => {
    // New slogan for accessories discount in English
    const texts = [
        "Huge discounts on accessories! Get up to 50% off!",
        "Shop now and save on the latest trends!",
        "Don't miss out on our limited-time offers!",
        "Best deals on accessories - available today!",
        "Hurry! Limited stock, grab your accessories now!"
    ];

    return (
        <div className="marquee">
            <div className="marquee-content">
                {texts.concat(texts).map((text, index) => (
                    <p key={index}><MdOutlineFlashOn/>
                    {text}</p>
                ))}
            </div>
        </div>
    );
}

export default Banner;

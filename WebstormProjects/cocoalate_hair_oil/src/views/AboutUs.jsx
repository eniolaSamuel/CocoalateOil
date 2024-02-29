import React from "react";
import Lottie from 'lottie-react'
import aboutUs from "../assets/image/HairComb.json"
import "../styles/AbouUs.css"

export const AboutUs = () => {
    return(
        <div className="about-us-frame">
            <div className="about-us-sub-frame">
                <div className="about-us-header-frame">
                    <Lottie animationData={aboutUs} />
                </div>
                <div className="our-story-frame">
                    <h1>Our Story</h1>
                    <p>Cocoalate Crown is more than just a brand –
                        it's a story of resilience, empowerment, and natural beauty.
                        Founded by someone who understands the struggles of hair loss firsthand,
                        our journey began with a personal battle against alopecia.
                    <br/>
                        Driven by a deep desire to find a solution that didn't compromise on quality or safety,
                        our founder embarked on a quest to harness the power of nature's herbs and botanicals to regrow her hair.
                        After much research, experimentation, and unwavering determination,
                        she finally discovered a formula that not only stimulated hair growth
                        but also nourished and strengthened her strands from within.
                    <br/>

                        Now, having improved the formula over the course of the last two years;
                        she's on a mission to share her discovery with the world.
                        Cocoalate Crown isn't just about selling products –
                        it's about empowering individuals to embrace their natural beauty and reclaim their confidence,
                        one strand at a time.
                    <br/>
                        Join us on this journey as we celebrate the transformative power of nature and the resilience of the human spirit.
                        Welcome to Cocoalate Crown – where every success story begins with a single drop of hope.
                    </p>
                </div>
            </div>
        </div>
    )
}
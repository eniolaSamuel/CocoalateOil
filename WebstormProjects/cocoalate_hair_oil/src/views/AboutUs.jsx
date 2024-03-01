import React from "react";
import Lottie from 'lottie-react'
import Story from "../assets/image/HairComb.json"
import Philosophy from "../assets/image/Philosophy.json"
import "../styles/AbouUs.css"


export const AboutUs = () => {
    return(
        <div className="about-us-frame">
            <div className="about-us-sub-frame">
                <div className="about-us-header-frame">
                    <h1>ABOUT US</h1>
                    <hr/>
                </div>
                <div className="about-us-sub-frame-content">
                    <div className="story-frame">
                        <div className="our-storyy-lottie-frame">
                            <Lottie className="about-us-lottie-img" animationData={Story} />
                        </div>
                        <div className="our-story-frame">
                            <h1>Our Story :</h1>
                            <p>Cocoalate Crown is more than just a brand –
                                it's a story of resilience, empowerment, and natural beauty.
                                Founded because of a girl's personal battle against alopecia.
                                <br/></p>
                            <p>Driven by a deep desire to find a solution,
                                our founder embarked on a quest to harness the power of nature's herbs and botanicals to regrow her hair.
                                After much research, experimentation, and unwavering determination,
                                she finally discovered a formula that not only stimulated hair growth
                                but also nourished and strengthened her strands from within.
                                <br/></p>
                            <p>Having improved the formula over the course of the last two years;
                                she's on a mission to share her discovery with the world.
                                <br/></p>
                            <p>
                                Welcome to Cocoalate Crown – where every success story begins with a single drop of hope.
                            </p>
                        </div>
                    </div>
                    <div className="philosophy-frame">
                        <div>
                            <div className="our-philosophy-frame">
                                <h1> Our Philosophy</h1>
                                <p>At Cocoalate Crown, we believe that everyone deserves to feel confident and empowered in their own skin
                                    – or, in this case, their own hair. That's why we're dedicated to formulating products that are not only effective but also safe,
                                    natural, and sustainable. We're committed to using only the highest quality ingredients, sourced responsibly and ethically,
                                    to ensure that your hair receives the care it deserves.<br/>
                                </p>
                            </div>
                            <div className="join-us-frame">
                                <h1>Join the Cocoalate Crown Community</h1>
                                <p>We invite you to join us on this journey to healthier, happier hair.
                                    Whether you're struggling with hair loss, seeking to improve your hair's texture and shine,
                                    or simply looking for a little indulgence in your self-care routine, we're here to help.
                                    'Welcome to the Cocoalate Crown family – where every day is a good hair day.</p>
                            </div>
                        </div>

                        <div className="our-storyy-lottie-frame">
                            <Lottie className="about-us-lottie-img" animationData={Philosophy} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
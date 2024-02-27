const LandingPage= ()=> {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    let links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Ingredients", link: "/" },
        { name: "Social Proofs", link: "/" },
        { name: "Benefits", link: "/" },
        { name: "Directions", link: "/" },
        { name: "Contact us", link: "/" },
    ];

    return(
        <div className="whole-frame">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".masonry-column article").forEach((title) => {
    // Define the GSAP animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title, // Element to trigger the animation
            start: "top bottom-=35%", // Start the animation when the top of the article is at the center of the viewport
            end: "+=30%", // End the animation when the bottom of the article is at the center of the viewport
            scrub: true, // Smoothly update the animation while scrolling
            markers: false // Display debug markers (you can remove this in production)
        }
    });

    tl.to(title, {
        opacity: 1,         // Target opacity value
        rotateX: 0,         // Target rotateX value
        duration: 1,        // Duration of the animation in seconds
        ease: "power2.out"  // Easing function
    });
});




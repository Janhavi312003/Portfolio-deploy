"use client"

// import Lottie from "lottie-react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: '100%',
        }
    }

    return(
        <Lottie {...defaultOptions} />
    )
}

export default AnimationLottie;
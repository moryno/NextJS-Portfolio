"use client"
import Lottie, { LottieOptions } from "lottie-react"

function AnimationLottie({ animationPath, width = "100%" } : { animationPath: LottieOptions, width?: string}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: width
        }
    }
  return (
    <Lottie { ...defaultOptions } />
  )
}

export default AnimationLottie

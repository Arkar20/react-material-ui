import animationData from "../../animations/landinganimation/data"
import myanimation from "../../animations/myanimation.json"
import coderanimation from "../../animations/coderanimation.json"

import Lottie from "react-lottie"
import React from "react"
const LandingPage = () => {
    const defaultOptions={
      loop: true,
      autoplay: true, 
      animationData: myanimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
           <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={true}/>
    )
}
export default LandingPage
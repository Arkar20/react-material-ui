import Lottie from "react-lottie"
import React from "react";

const AnimationPlayer = ({animationdata}) => (
    <Lottie options={{
        loop: true,
        autoplay: true,
        animationData:animationdata ,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }}
    isStopped={false}
     isPaused={true}
        
      />

   
)
export default AnimationPlayer;
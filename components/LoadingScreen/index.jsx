"use client";
import React, { useEffect, useState } from "react";
// import lottie from "lottie-web";
import dynamic from "next/dynamic";
import loadingAnimation from "../../asset/loading-pet.json";

// const animations = {
//   laoding: loadingAnimation,
// //   "not-found": notFoundAnimation,
// };
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  animation: {
    width: 200,
    height: 200,
  },
};
const LoadingScreen = () => {
  const [Lottie, setLottie] = useState(undefined);

  useEffect(() => {
    setLottie(dynamic(() => import("lottie-react"), { ssr: false }));
  }, []);

  return (
    <div style={styles.container}>
      {Lottie && <Lottie animationData={loadingAnimation} loop={true} />}
    </div>
  );
};
export default LoadingScreen;

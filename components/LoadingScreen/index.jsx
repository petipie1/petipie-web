import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../asset/loading-pet.json";

// const animations = {
//   laoding: loadingAnimation,
// //   "not-found": notFoundAnimation,
// };

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={styles.animation}
      />
    </div>
  );
};

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

export default LoadingScreen;

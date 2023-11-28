import React from "react";

const ProtectedRoute = ({ component: Component, ...props }: any) => {
  return <Component {...props} />;
};

export default ProtectedRoute;

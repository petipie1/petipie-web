import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const useAuth = () => {
  const { getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        // localStorage.setItem("token", accessToken);
        setToken(accessToken);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    if (isAuthenticated && !token) {
      getAccessToken();
    }
  }, []);

  return { isAuthenticated, token, logout };
};

export default useAuth;

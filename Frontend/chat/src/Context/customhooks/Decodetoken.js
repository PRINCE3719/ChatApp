import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const DecodeToken = () => {
  const [decodedUser, setDecodedUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedUser(decoded);
      } catch (error) {
        console.error("Error decoding token:", error.message);
      }
    }
  }, []); // Empty dependency array to run only once after initial render

  return decodedUser; // Return the decoded user directly
};

export default DecodeToken;
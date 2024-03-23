import { useEffect, useState } from "react";
import Userinfo from "../../Zustand/Userinfo";

const loggeduser = "http://localhost:5000/users/";

const Userwithidhook = () => {
    const token = sessionStorage.getItem("token");
    const { authUser, initializeAuthUser } = Userinfo();
    const [loggedUserData, setLoggedUserData] = useState(null); // Renamed to avoid confusion

    const userid = authUser?.id;

    useEffect(() => {
        initializeAuthUser();
    }, [initializeAuthUser]);

    useEffect(() => {
        const getParticularuser = async () => {
            console.log(`Fetching user with ID: ${userid}`);
            console.log(`Token: ${token}`);
            try {
                const res = await fetch(`${loggeduser}${userid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!res.ok) {
                    throw new Error(`Fetch error: ${res.statusText}`);
                }
                // Check if the response is JSON before parsing
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const data = await res.json();
                    console.log('Fetched data:', data);
                    setLoggedUserData(data); // Updated to use the new state variable
                } else {
                    console.error('Response is not JSON:', await res.text());
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
        getParticularuser();
    }, [token, userid]); // Keeping userid as a dependency

    return { loggedUserData }; // Return the state variable instead of the constant
}

export default Userwithidhook;

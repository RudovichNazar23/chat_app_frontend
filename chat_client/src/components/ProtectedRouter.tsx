import { useState, useEffect } from "react";
import { JSX } from "react";
import { api } from "../utils/api";
import { ACCESS, REFRESH } from "../utils/constants";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface ProtectedRouterProps {
    child: JSX.Element;
};

export default function ProtectedRouter({ child }: ProtectedRouterProps): JSX.Element {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(
        () => {
            auth().catch(() => setIsAuthorized(false))
        },
        []
    );

    const refreshToken = async () => {
        const token: string | null = localStorage.getItem(REFRESH);

        if(token){
            const response = await api.post("/auth/token/refresh/", {"refresh": token});
            if(response.data === 200){
                localStorage.setItem(ACCESS, response.data.access);
                setIsAuthorized(true);
            }
            else{
                setIsAuthorized(false);
            }
        }
        else{
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token: string | null = localStorage.getItem(ACCESS);

        if(token){
            const decodedToken = jwtDecode(token);

            const decodedTokenExpiration: number = decodedToken.exp || 0;
            const currentTime = Date.now() / 1000;

            if(currentTime > decodedTokenExpiration){
                await refreshToken();
            }
            else{
                setIsAuthorized(true);
            }
        }
        else{
            setIsAuthorized(false);
        }
    };

    if(isAuthorized === null){
        return <>Loading...</>
    };

    return isAuthorized ? child : <Navigate to={"/login"}></Navigate>
};


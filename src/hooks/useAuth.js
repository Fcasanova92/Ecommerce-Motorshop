import { useEffect, useState } from "react";

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const login = () => {
        setTimeout(()=> {
            setIsloading(false)
            setIsLogin(true)
        }, 2000)
    }

    login();
    }, [])

    return {isLogin, isLoading}
}
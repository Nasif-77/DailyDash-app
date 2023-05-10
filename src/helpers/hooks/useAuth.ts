import { useEffect } from "react";
import { useRouter } from "next/router";
import { authService } from '../services/auth'

export const useAuth = () => {
    const router = useRouter()
    
    return authService.isAuthenticated()
}


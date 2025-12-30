// Bọc lấy AuthStore và cung cấp các phương thức tiện ích như logout, setUser, setToken.
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export function useAuth() {
  const {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    logout: clearStore,
  } = useAuthStore();
  const router = useRouter();

  const logout = async () => {
    try {
      // Call Logout API to clear cookies
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      // Clear store
      clearStore();

      // Redirect to home
      router.push("/");
      router.refresh(); // Refresh to ensure server components update
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    logout,
  };
}

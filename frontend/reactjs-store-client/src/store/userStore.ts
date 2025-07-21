import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  userId: string;
  user: string;
  iat: number;
};

type UserState = {
  userId: string | null;
  user: string | null;
  setUserFromToken: (token: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  user: null,

  setUserFromToken: (token: string) => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const { user, userId } = decoded;
      localStorage.setItem("token", token);

      set({ user, userId });
    } catch (error) {
      console.error("Invalid token", error);
      set({ userId: null, user: null });
    }
  },
  updateUser: (username: string) => {
    set({ user: username });
  },
  clearUser: () => {
    localStorage.removeItem("token");
    set({ userId: null, user: null });
  },
}));

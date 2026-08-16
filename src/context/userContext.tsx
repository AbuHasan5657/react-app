import { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types";

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (index: number) => void;
  updateUser: (index: number, user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function addUser(user: User) {
    setUsers((prevUsers) => [...prevUsers, user]);
  }

  function removeUser(index: number) {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  }

  function updateUser(index: number, updated: User) {
    setUsers((prevUsers) =>
      prevUsers.map((u, i) => (i === index ? updated : u)),
    );
  }

  return (
    <UserContext.Provider value={{ users, addUser, removeUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

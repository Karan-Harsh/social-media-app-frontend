import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setcurrentUser({
      id: 2,
      name: "Sidharth Shukla",
      profilePic:
        "https://imgs.search.brave.com/qFR9Cg5apZLfSSiD5_o8B4F25aTX6Pd-H84KtyEI0e8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2RlYy9z/aGVobmFhemdpbGxz/aWRkaGFydGhzaHVr/bGExMTY3MDgzNDc0/MC5qcGc",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

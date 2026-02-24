import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const generateId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 1_000_000)}`;
  };

  // string

  // useEffect(() => {
  //   const userId = generateId();
  // const token = localStorage.getItem("accessToken");
  // const userData = localStorage.getItem("user");

  // if (token && userData) {
  //   setUser(JSON.parse(userData));
  // }
  // const registerUser = async () => {
  //   const res = await fetch("https://divinityimpex.com/api/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: `user-${userId}`,
  //       email: `user-${userId}@email.com`,
  //       password: `user-${userId}`
  //     })
  //   });

  //   const data = await res.json();
  // }
  // registerUser();
  //   const userData = { 'id': userId, 'email': 'user@gmail.com', 'role': 'user' }
  //   localStorage.setItem("user", JSON.stringify(userData))
  //   setUser(userData);
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    const initUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");

        // ✅ If user already exists → just load it
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setLoading(false);
          return; // ⛔ STOP here
        }

        // ✅ Otherwise register new user ONCE
        const userId = generateId();

        const res = await fetch("https://divinityimpex.com/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `user-${userId}`,
            email: `user-${userId}@email.com`,
            password: `user-${userId}`
          })
        });

        const data = await res.json();


        const userres = await fetch(
          `https://divinityimpex.com/api/get-user-by-name.php?name=user-${userId}`
        );
        const userdata = await userres.json();

        // ⚠️ adapt keys based on API response
        const userData = {
          id: data.user_id ?? Number(userdata.data[0].id),
          email: data.email ?? userdata.data[0].email,
          role: userdata.data[0].role
        };



        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("accessToken", data.token ?? "guest");

        setUser(userData);
      } catch (err) {
        console.error("User init failed:", err);
      } finally {
        setLoading(false);
      }
    };

    initUser();
  }, []);


  const login = (data) => {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = async () => {
    await fetch("https://divinityimpex.com/api/logout", {
      credentials: "include",
    });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

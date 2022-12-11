import { useState } from "react";
import { useEffect } from "react";

const url = "http://localhost:3000/users/1";

export const useGetCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setUser(json);
      } catch (error) {
        setError(`Erro: ${error}`);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

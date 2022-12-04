import { useEffect } from "react";
import { useState } from "react";

const url = "http://localhost:3000/tweets";

export const useGetTweets = () => {
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setTweets(json);
      } catch (error) {
        setError(`Erro: ${error}`);
      }
      setLoading(false);
    };

    fetchTweets();
  }, []);

  return { tweets, loading, error };
};

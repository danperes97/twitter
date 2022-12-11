import { useState } from "react";
import { useEffect } from "react";

const url = "http://localhost:3000/tweets";

export const useCreateTweet = () => {
  const [config, setConfig] = useState(null);
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [method, setMethod] = useState("POST");

  const requestConfig = (data) => {
    setConfig({
      url,
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setMethod(method);
  };

  useEffect(() => {
    const callPost = async () => {
      let fetchOptions = [url, config];
      setLoading(true);
      const res = await fetch(...fetchOptions);
      const json = await res.json();
      setTimeout(() => null, 2000);
      setLoading(false);

      setTweet(json);
    };

    callPost();
  }, [config, method]);

  return { tweet, requestConfig, loading, error };
};

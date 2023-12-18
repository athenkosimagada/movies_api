import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, initialState: T) => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const responseData = await res.json();

        if (responseData.genres) {
          setData(responseData.genres);
          console.log("test 1:", responseData.genres);
        } else {
          setData(responseData.results);
          console.log("test 1:", responseData.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Something wrong happened, please reload!");
      }
    };

    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [url]);

  return { data, loading, error };
};

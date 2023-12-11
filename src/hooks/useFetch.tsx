import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, initialState: T) => {
  const [data, setData] = useState<T>(initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.genres || data);
      });
  }, [url]);

  return data
};

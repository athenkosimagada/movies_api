# Movie API Project

![Hero Image](https://github.com/athenkosimagada/movies_api/blob/main/src/assets/images/hero.png)

## Project Overview

I developed the Movie API Project to explore the integration of various technologies, including SCSS, TypeScript, React, and Vite. The project fetches data from the [TMDB API](INSERT_TMDB_API_LINK) to display information about movies and genres. The primary goal is to create a dynamic and responsive web application that provides an engaging user experience.

## Code Explanation

Here's a breakdown of the `useFetch` hook:

```typescript
import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, initialState: T) => {
  const [data, setData] = useState<T>(initialState);

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
      }
    };

    fetchData();
  }, [url]);

  return data;
};

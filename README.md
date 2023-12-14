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
```

The `useFetch` hook is an essential part of the project, tailored to fetch data from a specified URL and intelligently manage it based on the structure of the response. Its utilization of TypeScript generics enhances flexibility and ensures a robust data-handling mechanism.

## Technology Stack

### SCSS

The incorporation of SCSS (Sass) serves as a cornerstone for a meticulously organized and maintainable stylesheet. SCSS provides an array of features, including variables, nesting, and mixins, elevating the overall styling structure.

### TypeScript

TypeScript plays a pivotal role in the project, bringing static typing capabilities. This not only detects potential errors during development but also enhances code documentation, contributing significantly to improved code quality and developer productivity.

### React

The project leverages React to construct a modular and efficient user interface. The inherent component-based architecture simplifies development, fostering a more scalable and maintainable codebase.

### Vite

Vite assumes the role of the build tool, ensuring swift and efficient development and bundling processes. Its incorporation elevates the development experience by offering features such as hot module replacement.

## Project Benefits

1. **Enhanced Developer Experience**: TypeScript's features provide superior code navigation, autocompletion, and early error detection, fostering an enjoyable development process.

2. **Modularity and Reusability**: React components facilitate a modular structure, making code reuse across the application seamless and enhancing overall maintainability.

3. **Efficient Styling**: SCSS augments the styling process, making the stylesheet more readable, maintainable, and scalable.

4. **Fast Development with Vite**: Vite accelerates the development workflow, delivering quick feedback and reducing build times.

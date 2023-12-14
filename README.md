# 🎬 Movie API Project

![Hero Image](https://github.com/athenkosimagada/movies_api/blob/main/src/assets/images/hero.png)

## Project Overview

🌐 Explore Integration: I developed the Movie API Project to 🌐 explore the integration of various technologies.<br/>
🎨 SCSS, TypeScript, React, Vite: including 🎨 SCSS, TypeScript, React, and Vite.<br/>
📊 Engaging User Experience: The primary goal is to create a dynamic and responsive web application that provides an 📊 engaging user experience.

## Useful Code Explanation
The `useFetch` hook is an essential part of the project, tailored to fetch data from a specified URL and intelligently manage it based on the structure of the response. Its utilization of TypeScript generics enhances flexibility and ensures a robust data-handling mechanism.

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

## Technology Stack

### 🔧 SCSS

The incorporation of SCSS (Sass) serves as a cornerstone for a meticulously organized and maintainable stylesheet. SCSS provides an array of features, including variables, nesting, and mixins, elevating the overall styling structure.

### 📝 TypeScript

TypeScript plays a pivotal role in the project, bringing static typing capabilities. This not only detects potential errors during development but also enhances code documentation, contributing significantly to improved code quality and developer productivity.

### ⚛️ React

The project leverages React to construct a modular and efficient user interface. The inherent component-based architecture simplifies development, fostering a more scalable and maintainable codebase.

### 🛠️ Vite

Vite assumes the role of the build tool, ensuring swift and efficient development and bundling processes. Its incorporation elevates the development experience by offering features such as hot module replacement.

## Project Benefits

**1. 💡 Enhanced Developer Experience**: TypeScript's features provide superior code navigation, autocompletion, and early error detection.<br/>
**2. 🧩 Modularity and Reusability**: React components facilitate a modular structure.<br/>
**3. 🎨 Efficient Styling**: SCSS enhances the styling process with its features.<br/>
**4. 🚀 Fast Development with Vite**: Vite accelerates the development workflow.<br/>

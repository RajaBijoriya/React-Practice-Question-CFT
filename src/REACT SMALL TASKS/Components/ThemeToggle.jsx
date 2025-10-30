import React, { useEffect, useState } from 'react'
//  4. Theme Toggle with LocalStorage
//  Build a button to toggle between "Light" and "Dark" themes, changing
//  a div’s styles. Use useState for the theme and useEffect to save the
//  theme to localStorage and load it on mount
const ThemeToggle = () => {

    const [theme, setTheme] = useState(true)

    useEffect(() => {
        const val = localStorage.getItem('theme');

        if(val) {
            setTheme(val);
        }
    },[])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    },[theme])
  return (
    <div style={{ backgroundColor: theme  ? "black" : "white", width: "100vw", height: "100vh"}}>
      <button
        style={{
          backgroundColor: theme  ? "white" : "black",
          color: theme ? "black" : "white",
        }}
        onClick={() => setTheme(!theme)}>
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ThemeToggle

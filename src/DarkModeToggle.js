import React, { useState, useEffect } from 'react';
const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode is enabled in the browser
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (prefersDarkMode) {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
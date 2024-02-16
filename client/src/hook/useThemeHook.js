import { useState, useEffect } from 'react';

const useLocalStorageTheme = (initialTheme = 'light') => {
  const storedTheme = localStorage.getItem('theme') || initialTheme;

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useLocalStorageTheme;

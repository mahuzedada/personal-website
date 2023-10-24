import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'default';

export default function useTheme(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>,
] {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode ? (savedMode as Theme) : 'default';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      // Rely on the system setting
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  return [theme, setTheme];
}

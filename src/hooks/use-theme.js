import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

//мэтчим системную тему с темой нашего сайта
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('app-theme') || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

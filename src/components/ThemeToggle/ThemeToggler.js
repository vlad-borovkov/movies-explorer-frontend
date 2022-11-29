import React from 'react';
import { useTheme } from '../../hooks/use-theme';

export default function ThemeTogler({ handleDarkClick, handleLightClick }) {
  const { theme, setTheme } = useTheme();
  const [isToggleClicked, setIsToggleClicked] = React.useState(false);

  // определить текущее состояние темы и выполнить инициализацию тумблера
  React.useEffect(() => {
    if (theme === 'light') {
      setIsToggleClicked(false);
    } else if (theme === 'dark') {
      setIsToggleClicked(true);
    }
  }, []);

  const handleThemeToggleClick = () => {
    if (theme === 'dark') {
      setTheme('light');
      setIsToggleClicked(false);
      handleLightClick();
    } else if (theme === 'light') {
      setTheme('dark');
      setIsToggleClicked(true);
      handleDarkClick();
    }
  };

  // // подписываемся на изменение стейта с игнорированием выполнения при рендеринге
  // const didMount = React.useRef(false);
  // React.useEffect(() => {
  //   if (!didMount.current) {
  //     didMount.current = true;
  //     return;
  //   }
  //   handleTumblerAllSearch();
  // }, [shortsAllFilter]);

  return (
    <div className='theme-toggle'>
      <p className='theme-toggle__label'>День</p>
      <label className='theme-toggle-ios'>
        <input
          type='checkbox'
          onChange={handleThemeToggleClick}
          checked={isToggleClicked}
        />
        <span className='theme-toggle-ios-switch'></span>
      </label>
      <p className='theme-toggle__label'>Ночь</p>
    </div>
  );
}

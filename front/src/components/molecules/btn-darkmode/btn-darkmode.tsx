import { BtnIcon } from '@atoms/btns/btn-icon';
import { MoonIcon } from '@atoms/icons/moon-icon';
import { SunIcon } from '@atoms/icons/sun-icon';
import { store } from '@store/store';
import React from 'react';

export function BtnDarkMode() {
  const darkModeActivate = store.darkmode.useDarkModeActivate();

  return (
    <BtnIcon
      click={() => {
        store.darkmode.switchDarkMode(darkModeActivate);
      }}>
      {darkModeActivate ? <SunIcon /> : <MoonIcon />}
    </BtnIcon>
  );
}

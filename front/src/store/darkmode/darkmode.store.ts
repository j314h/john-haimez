import { BehaviorSubject } from 'rxjs';

export const darkModeStore = {
  /**
   * indication on darkmode activate or not activate
   * @type BehaviorSubject boolean
   */
  darkModeActivate$: new BehaviorSubject(
    localStorage.getItem('color-theme') === 'dark',
  ),
};

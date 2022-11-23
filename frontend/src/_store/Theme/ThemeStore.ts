import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

export const ThemeStore = {
  // value of mode dark , if is true or false
  modeDark$: new BehaviorSubject(
    localStorage.getItem('color-theme') === 'dark',
  ),
}

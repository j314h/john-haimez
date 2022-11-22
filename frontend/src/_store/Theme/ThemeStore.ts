import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

export const ThemeStore = {
  modeDark$: new BehaviorSubject(
    localStorage.getItem('color-theme') === 'dark',
  ),
}

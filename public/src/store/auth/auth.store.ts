import { createStore } from 'solid-js/store'

export const [authStore, setAuthStore] = createStore({
  token: '',
  loading: false,
  error: '',
})

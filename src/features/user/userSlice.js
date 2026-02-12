import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const themes = {
  light: 'light',
  dark: 'dark',
}
const getStorageTheme = () => {
  const theme = localStorage.getItem('theme') || themes.light
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}
const initialState = {
  user: { username: 'coding addict' },
  theme: getStorageTheme(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login')
    },
    logoutUser: (state) => {
      console.log('logout')
    },
    toggleTheme: (state) => {
      const { light, dark } = themes
      state.theme = getStorageTheme() === light ? dark : light
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer

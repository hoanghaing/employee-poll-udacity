import { configureStore } from '@reduxjs/toolkit'
import user from '@/stores/user'

export default configureStore({
  reducer: {
    user
  }
})
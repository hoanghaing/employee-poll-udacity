import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  name: string;
  avatarURL: string;
}

const initialState: UserState = {
  id: '',
  name: '',
  avatarURL: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      return initialState;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

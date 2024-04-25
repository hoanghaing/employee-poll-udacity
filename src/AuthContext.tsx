import { createContext } from "react";
const initialUserState = {
  user: {
    id: '',
    name: '',
    avatarURL: '',
  },
};
const AuthContext = createContext({
  authState: initialUserState,
  setAuthState: () => initialUserState,
  isUserAuthenticated: () => false,
});
export { AuthContext };
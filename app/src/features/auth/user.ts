import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Profile = {
  id?: number | null;
  avatarUrl?: string | null;
  email?: string | null;
  isActive?: boolean| null;
  position?: string | null;
  company?: string | null;
  name?: string | null;
  invitationToken?: string | null;
}

type Error = {
  error: string | null
}

type ProfileUser = {
  data: Profile;
  loading: boolean;
}

type State = {
  data: Profile;
  error: Error['error'];
  loading: boolean;
}

const initialState: State = {
  data: {},
  error: null,
  loading: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state: State) {
      state.data = {};
    },
    setProfileUser(state: State, action: PayloadAction<ProfileUser>) {
      const { data, loading } = action.payload;
      const dataUser = data || {};
      state.data = {...state.data, ...dataUser};
      state.loading = loading;
    },
    toggleToastError(state: State, action: PayloadAction<Error>) {
      const { error } = action.payload;
      state.error = error;
    },
  },
});

export const { logout, setProfileUser, toggleToastError } = user.actions;

export type { Profile };

export default user.reducer;

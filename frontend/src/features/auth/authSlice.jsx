import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: 'null',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
// Register new user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        console.log(user)
    //   try {
    //     return await authService.register(user)
    //   } catch (error) {
    //     return thunkAPI.rejectWithValue(extractErrorMessage(error))
    //   }
    }
  )

  // Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    // try {
    //   return await authService.login(user)
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(extractErrorMessage(error))
    // }
  })

  
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer
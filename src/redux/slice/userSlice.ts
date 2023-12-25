import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios, { AxiosResponse } from "axios";

export interface User {
  id?: string;
  myposter?: [];
  // _id: string;

  //   id: string;
  //   id: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  info: string;
  username: string;
  gender: string;
  password: string;
  bio: string;
  email: string;
  number: number;
  ispublic: boolean;
  // acceptedmessage:string,

  //   imgsrc: string,
  //   imgtitle: string,

  // storyimage:string,
  // storytitle:string,

  ntfctncontent?:string,

  //   myfollow: object[],
  //   menifollow: object[],
  //   wishlist: object[],
  //   block: object[],
  // myposter: object[],
  //   message: object[],
  //   mystory: object[],
  //   notification: object[]

  // isblockeduser:boolean
}

export interface UserState {
  user: User;
  users: User[];
}
export interface Id {
  _id: string;
}
export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    "https://userapideployda.onrender.com/users"
  );
  return response.data;
});

export const postUsersData = createAsyncThunk(
  "users/postUsersData",
  async (newUser: User) => {
    console.log(newUser);
    const response: AxiosResponse<User[]> = await axios.post(
      "https://userapideployda.onrender.com/users",
      { ...newUser, id: uuidv4() }
      // newUser
    );
    return response.data;
  }
);

export const getDeletedData = createAsyncThunk(
  "users/getDeletedData",
  async (_id: string) => {
    const response: AxiosResponse<User[]> = await axios.delete(
      `https://userapideployda.onrender.com/users/${_id}`
    );
    return response.data;
  }
);
interface Myposter {
  imgsrc: string;
  imgtitle: string;
  id: string;
  userId:string;
}
interface Notification {
    id: string;
    userId:string;
    ntfctncontent: string;
  }
export const DeletePoster = createAsyncThunk(
  "users/DeletePoster",
  async ({ userId, myposter }: { userId: string; myposter: Myposter[] }) => {
    const response: AxiosResponse<User[]> = await axios.patch(
      `https://userapideployda.onrender.com/users/${userId}`,
      { myposter }
    );
    return response.data;
  }
);

export const sendNotifications = createAsyncThunk(
    "users/sendNotifications",
    async ({ userId, notification }: { userId: string; notification: Notification}) => {
      const response: AxiosResponse<User> = await axios.patch(
        `https://userapideployda.onrender.com/users/${userId}`,
        // { notification }
        { notification: { ...notification, id: uuidv4() } }
      );
      return response.data;
    }
  );

const initialState: UserState = {
  user: {
    // _id: "",
    // id: 0,
    // id: uuidv4(),
    name: "",
    surname: "",
    age: 0,
    country: "",
    info: "",
    username: "",
    gender: "",
    password: "",
    bio: "",
    email: "",
    number: 0,
    // acceptedmessage:"",
    ispublic: false,
    // imgsrc: "",
    // imgtitle: "",

    // storyimage:"",
    // storytitle:"",
    // ntfctncontent:"",
    // myfollow: [],
    // menifollow: [],
    // wishlist: [],
    // block: [],
    // myposter: [],
    // message: [],
    // mystory: [],
    // notification: [],
    // isblockeduser:false
  },
  users: [],
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      // state.user = action.payload;
      const { payload } = action;
      let obj: User = {
        // id: payload.id,
        // _id: payload._id,
        name: payload.name,
        surname: payload.surname,
        age: payload.age,
        country: payload.country,
        info: payload.info,
        username: payload.username,
        gender: payload.gender,
        password: payload.password,
        bio: payload.bio,
        email: payload.email,
        number: payload.number,
        ispublic: payload.ispublic,
        // imgsrc: payload.imgsrc,
        // imgtitle: payload.imgtitle,
        // myposter:payload.myposter
      };
      state.user = obj;
    },

    DeleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        console.error("Failed to get news data:", action.error);
      })
      .addCase(postUsersData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(postUsersData.rejected, (state, action) => {
        console.error("Failed to post user data:", action.error);
      })
      .addCase(getDeletedData.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const {
  getUser,
  //   PostUser,
  // PatchUser,
  DeleteUser,
  //   getUsers,
  
} = UserSlice.actions;

export default UserSlice.reducer;

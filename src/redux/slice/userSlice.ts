import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: number,
    name: string,
    surname: string,
    age: number,
    country: string,
    info: string,
    username: string,
    gender: string,
    password: string,
    bio: string,
    email: string,
    number: number,
    acceptedmessage:string,
    ispublic: boolean,
    imgsrc: string,
    imgtitle: string,
    storyimage:string,
    storytitle:string,
    ntfctncontent:string,
    myfollow: object[],
    menifollow: object[],
    wishlist: object[],
    block: object[],
    myposter: object[],
    message: object[],
    mystory: object[],
    notification: object[]
}

export interface UserState {
    user: User
    users: User[]
}

const initialState: UserState = {
    user: {
        id: 0,
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
        acceptedmessage:"",
        ispublic: false,
        imgsrc: "",
        imgtitle: "",
        storyimage:"",
        storytitle:"",
        ntfctncontent:"",
        myfollow: [],
        menifollow: [],
        wishlist: [],
        block: [],
        myposter: [],
        message: [],
        mystory: [],
        notification: []
    },
    users: []
}

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<string>) => {

            let obj = {
                id: uuidv4(),
                name: action.payload,
                surname: action.payload,
                age: action.payload,
                country: action.payload,
                info: action.payload,
                username: action.payload,
                gender: action.payload,
                password: action.payload,
                bio: action.payload,
                email: action.payload,
                number: action.payload,
                ispublic: action.payload,
                imgsrc: action.payload,
                imgtitle: action.payload,
                myfollow: action.payload,
                menifollow: action.payload,
                wishlist: action.payload,
                block: action.payload,
                myposter: action.payload,
                message: action.payload,
                mystory: action.payload,
                notification: action.payload,
            }

            state.user = obj
        },
        PostUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        PatchUser: (state, action: PayloadAction<User>) => {
            let UserArr = [...current(state.users)]
            UserArr = UserArr.map((user) => {
                if (user.id == action.payload) {
                    return action.payload
                }
                else {
                    return user
                }
            })
            state.users = UserArr
        },
        DeleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter((user) => user.id != action.payload)
        },
    },
})

export const { getUser, PostUser, PatchUser, DeleteUser } = UserSlice.actions

export default UserSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export interface Feed {
    id: number,
    title: string,
    author: string,
    dateAt: string,
    description: string,
    type: string[],
    views: string,
    img1: string,
    img2: string,
    img3: string,
}
const initialState = [] as Feed[]

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        getSuccessFeeds(state, actions:PayloadAction<Feed[]>) {
            actions.payload.forEach((value) => state.push(value))
        }
    }
})
const feedReducer = feedSlice.reducer
export default  feedReducer
export const feedAction = feedSlice.actions

export function fetchFeeds() {
    const firebaseConfig = {
        apiKey: "AIzaSyAwCp2LFwDIH2Td2oJGz8LbAJIdUn6R8pQ",
        authDomain: "alta-875f0.firebaseapp.com",
        projectId: "alta-875f0",
        storageBucket: "alta-875f0.appspot.com",
        messagingSenderId: "495904334112",
        appId: "1:495904334112:web:ad998e144ec6c657b13745",
        measurementId: "G-7QPJ6QFYHK"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app)
    const res = [] as Feed[]
    return async (dispatch, getState) => {
        const state = getState()
        if (state.feed.length !== 0) return
        try {
            const querySnapshot = await getDocs(collection(db, 'feeds'))
            querySnapshot.forEach((doc) => {
                res.push(doc.data() as Feed)
            })
            // console.log("Feeds: ", res)
            dispatch(feedAction.getSuccessFeeds(res))
        } catch(e) {
            console.error(e)
        }
    }
}
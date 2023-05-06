import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"


// const { persistAtom } = recoilPersist();

export const sessionStorage =
    typeof window !== 'undefined' ? window.sessionStorage : undefined

export const localStorage =
    typeof window !== 'undefined' ? window.localStorage : undefined


export const { persistAtom } = recoilPersist({
    key: 'aa',
    storage: localStorage,
});

export const userState = atom({
    key: 'accessToken',
    default: '',
    effects_UNSTABLE: [persistAtom],
});



export const newInputValueState = atom({
    key: 'newInput',
    default: '',
})



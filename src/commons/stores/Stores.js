import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"


// const { persistAtom } = recoilPersist();



export const sessionStorage =
    typeof window !== 'undefined' ? window.sessionStorage : undefined

export const localStorage =
    typeof window !== 'undefined' ? window.localStorage : undefined


export const { persistAtom } = recoilPersist({
    storage: localStorage,
});


/* ===============================그거 포트번호 ============================= */
export const URL = atom({
    key: 'url',
    default:'https://api.habiters.store',
    effects_UNSTABLE: [persistAtom],
})


export const userState = atom({
    key: 'accessToken',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

// ---------------------------------------------------
export const accessTokenState = atom({
    key: "accessTokenState",
    default: ""
})

// ===============================input Value
export const newInputValueState = atom({
    key: 'newInput',
    default: '',
})

// ===============================Textarea Value
export const TextareaValueState = atom({

    key: 'textareaInput',
    default: '',
})



// -======================================
// ======================================
// ===============================input Value
export const InputValue = atom({
    key: 'value',
    default: '',
})
// ========================================
// =======================================
// ============================================





// ============ 받아온 user의 자기소개 data===============================

export const userDetail = atom({
    key: "user",
    default:"",
    effects_UNSTABLE:[persistAtom]
})

// ===============받아온 user의 habit data
export const userHabitState = atom({
    key:"userhabit",
    default:'',
    effects_UNSTABLE:[persistAtom]
})

// ===============받아온 user의 habit data
export const userRetrospectData = atom({
    key:"userRetrospect",
    default:'',
    effects_UNSTABLE:[persistAtom]
})






// 선택한 날짜
export const SelectedDate = atom({
    key: "date",
    default:new Date().getDate()
})


// =======오늘 회고를 작성했는지 여부
export const TodayRetrospectState = atom({
    key: "todayRetrospectState",
    default:false
})


export const headerSelectedMenu = atom({
    key : "menu",
    default : "마이해빗"
})
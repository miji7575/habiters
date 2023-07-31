import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"


// const { persistAtom } = recoilPersist();



export const sessionStorage =
    typeof window !== 'undefined' ? window.sessionStorage : undefined

export const localStorage =
    typeof window !== 'undefined' ? window.localStorage : undefined


export const { persistAtom } = recoilPersist({
    storage: sessionStorage,
});


/* ===============================그거 포트번호 ============================= */
export const URL = atom({
    key: 'url',
    default: 'https://api.habiters.store',
    // effects_UNSTABLE: [persistAtom],
})

// ====================   User  ====================

// --- User AccessToken
export const userAccessToken = atom({
    key: 'accessToken',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

// --- User 정보
export const userDetail = atom({
    key: "user",
    default: "",
    // effects_UNSTABLE:[persistAtom]
})


// ==================== Habit 

// --- User의 Habit
export const userHabitState = atom({
    key: "userhabit",
    default: '',
    // effects_UNSTABLE:[persistAtom]
})
// --- User의 이번달 Habit(일별확인)
export const userHabitStateThisMonth = atom({
    key: "userhabitThisMonth",
    default: '',
    // effects_UNSTABLE:[persistAtom]
})


// ==================== Retrospect
// --- User의 회고List
export const userRetrospectData = atom({
    key: "userRetrospect",
    default: '',
    // effects_UNSTABLE:[persistAtom]
})

// =======오늘 회고를 작성했는지 여부
export const TodayRetrospectState = atom({
    key: "todayRetrospectState",
    default: false
})




// ====================   Input, Textarea  ====================
// ==================== Textarea Value
export const TextareaValueState = atom({

    key: 'textareaInput',
    default: '',
})

// ==================== input Value
export const InputValue = atom({
    key: 'value',
    default: '',
})










// ====================   날짜 관련  ====================


// 렌더링 되는 날짜 
export const visibleDateState = atom({
    key: 'VisibleDate',
    default: {
        year: '',
        month: '',
        days: [],
        dates: [],
    }
})




// 선택한 날짜
export const SelectedDate = atom({
    key: "date",
    default: new Date().getDate()
})





// 달력 초기화 state
export const resetCalenderStaste = atom({
    key : "resetCalenderStaste",
    default : true
})
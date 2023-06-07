import FooterUI from "./Footer.presenter"
import { useRouter } from "next/router"



export default function Footer() {

    const router = useRouter()
    const onClickMoveIntroService = () => {
        router.push("/intro-service")
    }
    const onClickMoveIntroTermsOfUse = () => {
        router.push("/intro-terms-of-use")
    }
    const onClickMoveIntroPrivacyPolicy = () => {
        router.push("/intro-privacypolicy")
    }
    const onClickMoveIntroTeam = () => {
        router.push("/comming-soon")
    }



    return (
        <FooterUI 
        onClickMoveIntroService={onClickMoveIntroService}
        onClickMoveIntroTermsOfUse={onClickMoveIntroTermsOfUse}
        onClickMoveIntroPrivacyPolicy={onClickMoveIntroPrivacyPolicy}
        onClickMoveIntroTeam={onClickMoveIntroTeam}
        
        
        />
    )

}
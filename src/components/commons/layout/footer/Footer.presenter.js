import { FooterWrap,FooterContent,  LogoBox, FooterLogo, FooterDetailBox, FooterDetail, Bar } from './Footer.styles'


export default function FooterUI(props) {


    return (
        // html 부분을 여기에 담아라
        <>

            <footer>

                <FooterWrap>
                    <FooterContent>

                        <div>
                            <FooterLogo  src="/image/logo-habiters.svg" alt="Logo" />
                        </div>
                        <FooterDetailBox>

                            <FooterDetail className="body3-regular color-black3">
                                <span><a href='/intro-service'>서비스 소개</a></span> <Bar />
                                <span><a  href='/intro-privacypolicy' >이용약관</a></span> <Bar />
                                <span><a  href='/intro-terms-of-use' >개인정보처리방침</a></span> <Bar />
                                <span><a  href='/intro-service' >팀 소개</a></span>
                            </FooterDetail>
                            <div className="body3-regular color-black3">
                                © 2023 TEAM CLOVER🍀, All rights reserved.
                            </div>
                        </FooterDetailBox>
                    </FooterContent>

                </FooterWrap>

            </footer >
        </>
    )

}
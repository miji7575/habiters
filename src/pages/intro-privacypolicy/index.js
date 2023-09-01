import styled from '@emotion/styled'


// -----------------스타일

const Container = styled.div`
 height: 100%;
 display: flex;
 justify-content: center;
 `

const PrivacyPolicyWrap = styled.div`
 width: 1180px;
 white-space: pre-line;
 color: var(--color-black2);
 & > :last-child{
     padding: 0 0 200px 0;
 }

 /* body3-regular */
  font-family: 'Pretendard-Regular'; 
  font-size: 14px;
  line-height: 20px;
 `

const PrivacyPolicyTitle = styled.div`
  color: var(--color-black1);
  padding: 72px 0 32px 0;
  & + div{
    padding: 0 0 8px 0;
  }

  /* headline1 */
  font-family: 'Pretendard-Bold'; 
  font-size: 40px;
  line-height: 52px;

 `

const PrivacyPolicySubTitle = styled.div`
 padding: 24px 0 8px 0;

 /* headline5 */
  font-family: 'Pretendard-Bold'; 
  font-size: 20px;
  line-height: 28px;

 `



export default function IntroPrivacyPolicyPage() {





    return (
        <>
            <main>
                <Container>

                    <PrivacyPolicyWrap>
                        <PrivacyPolicyTitle >개인정보처리방침</PrivacyPolicyTitle>

                        <PrivacyPolicySubTitle>1. 수집하는 개인정보의 항목 및 수집방법</PrivacyPolicySubTitle>
                        <div>
                            가. 수집하는 개인정보의 항목 <br />
                            첫 째, 기본적인 서비스의 제공을 위해 회원 가입시 아래의 개인 정보를 수집합니다.<br />
                            • 이메일, 닉네임(이름), 생년월일<br />
                            둘 째, 서비스 이용 과정에서 다음 정보들이 자동으로 수집/저장됩니다.<br />
                            • 로그인/로그아웃 시각 및 그 순간의 브라우저/OS 정보(Useragent)<br />
                            셋 째, 소셜 로그인 시, 다음 정보들이 수집/저장됩니다.<br />
                            • 출생연도 (YYYY), 성별, 본인 고유값 (DI)<br />
                            <br />
                            나. 개인정보 수집방법 HABITERS는 다음과 같은 경로를 통해 개인정보를 수집합니다.<br />
                            • 소셜 로그인 회원 가입, 이메일 인증, 정보 수정<br />
                        </div >

                        <PrivacyPolicySubTitle>2.개인정보의 수집 및 이용목적</PrivacyPolicySubTitle>
                        <div>
                            가. 서비스 제공에 관한 계약 이행 특정 맞춤 서비스 제공, 개인 식별이 필요한 기능 등<br />
                            나. 회원관리 회원제 서비스 이용 및 개인식별, 불량회원의 부정 이용방지, 가입 의사 확인을 통한 사이트 내의 고유 컨텐츠 유출 방지, 1인 2개 이상의 ID 소유 제한, 분쟁 조정을 위한 기록 등을 위함<br />
                            다. 신규 서비스 개발 및 광고에의 활용 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계<br />
                        </div >

                        <PrivacyPolicySubTitle>3.개인정보의 공유 및 제공</PrivacyPolicySubTitle>
                        <div>
                            HABITERS는 이용자들의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.<br />
                            다만, 아래의 경우에는 예외로 합니다.<br />
                            • 이용자들이 사전에 공개에 동의한 경우<br />
                            • 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br />
                        </div >

                        <PrivacyPolicySubTitle>4.개인정보의 취급위탁</PrivacyPolicySubTitle>
                        <div>HABITERS는 외부 업체로의 개인정보 취급위탁을 하고 있지 않으며 필요시 회원에게 동의를 구합니다.</div>

                        <PrivacyPolicySubTitle>5.개인정보의 보유 및 이용기간</PrivacyPolicySubTitle>
                        <div>
                            가. HABITERS 내부 방침에 의한 정보 보유 사유<br />
                            부정 이용 기록<br />
                            보존 이유 : 부정 이용 방지<br />
                            보존 기간 : 5년<br />
                            로그인/로그아웃에 관한 기록<br />
                            보존 이유 : 피해자가 회원 고소를 위한 증거 보전 요청시 (법원의 명령)<br />
                            보존 기간 : 1년 (연장 불가)<br />
                            유료 결제에 관한 기록<br />
                            보존 이유 : 전자상거래 등에서의 소비자 보호에 관한 법률<br />
                            보존 기간 : 1년<br />
                            나. 관련법령에 의한 정보 보유 사유 관계법령의 규정에 의하여 보존할 필요가 있는 경우 HABITERS는 관계법령에서 정한 일정한 기간동안 회원정보를 보관합니다.<br />
                            이 경우 HABITERS는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br />
                            소비자의 불만 또는 분쟁처리에 관한 기록<br />
                            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
                            보존 기간 : 5년<br />
                            본인 확인에 관한 기록 (이메일 주소의 해시값)<br />
                            보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률<br />
                            보존 기간 : 탈퇴 시점으로부터 1개월<br />
                            본인 확인에 관한 기록 (SMS 인증)<br />
                            보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률<br />
                            보존 기간 : 인증 시점으로부터 1년<br />
                            본인 확인에 관한 기록 (출생연도, 성별, DI 값)<br />
                            보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률<br />
                            보존 기간 : 보존 안 함 (탈퇴 즉시 파기)<br />
                            유료 결제에 관한 기록<br />
                            보존 이유 : 전자상거래 등에서의 소비자 보호에 관한 법률<br />
                            보존 기간 : 1년<br />
                        </div >

                        <PrivacyPolicySubTitle>6.개인정보 파기절차 및 방법</PrivacyPolicySubTitle>
                        <div>
                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.<br />
                            HABITERS의 개인정보 파기절차 및 방법은 다음과 같습니다.<br />
                            가. 파기절차<br />
                            이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 테이블로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 보관 한 후 파기합니다.<br />
                            개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.<br />
                            나. 파기방법<br />
                            전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br />
                        </div >

                        <PrivacyPolicySubTitle>7.이용자 및 법정대리인의 권리와 그 행사방법</PrivacyPolicySubTitle>
                        <div>
                            이용자는 로그인 후 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 직접 탈퇴 하실 수 있습니다.<br />
                            이용자는 개인정보 조회/수정을 위해서 '마이 페이지-원하는 정보 클릭 후- 수정하기'를 눌러야하고, 그 곳의 '탈퇴' 버튼을 이용해 이용 해지할 수 있습니다.<br />
                            이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 그 개인정보를 이용하지 않습니다.<br />
                            삭제된 개인정보는 '5.개인정보의 보유 및 이용기간'에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없게 합니다.<br />
                        </div >

                        <PrivacyPolicySubTitle>8.개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</PrivacyPolicySubTitle>
                        <div>
                            HABITERS는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다 쿠키는 웹서비스를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 기기의 저장 장치에 저장됩니다.<br />
                            가. 쿠키의 사용 목적 각 메뉴별 개인 설정 저장, 공지사항 팝업창 제거 여부, 자동 로그인 기능 등의 제공을 위해 로그인 없이도 개인 식별이 필요한 모든 곳에 광범위하게 사용합니다.<br />
                            나. 쿠키의 설치/운영 및 거부<br />
                            이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로서 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.<br />
                            다만, 쿠키의 저장을 거부할 경우에는 HABITERS 일부 서비스 이용이 불가능 할 수 있습니다.<br />
                            쿠키를 사용하지 않는 방법 (Google Chrome의 경우) ① [...] 버튼을 누르고 [새 시크릿 창]을 선택합니다.<br />
                        </div >

                        <PrivacyPolicySubTitle>9.개인정보의 기술적/관리적 보호 대책</PrivacyPolicySubTitle>
                        <div>
                            HABITERS는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.<br />
                            가. 해킹 등에 대비한 대책 HABITERS는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.<br />
                            개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신 프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.<br />
                            그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.<br />
                            나. 취급 운영진의 최소화 및 교육 HABITERS의 개인정보관련 취급 운영진은 담당자에 한정시키고 있고 이를 관리하기 위한 별도의 비밀번호를 부여하며 직접적인 암호화 데이터에는 담당자일지라도 접근이 불가하도록 하며 담당자에 대한 수시 교육을 통하여 HABITERS 개인 정보 정책의 준수를 항상 강조하고 있습니다.<br />
                        </div >

                        <PrivacyPolicySubTitle>10.개인정보보호 관련 민원 접수 방법 및 기타 신고/상담 방법</PrivacyPolicySubTitle>
                        <div>
                            귀하께서는 HABITERS의 서비스를 이용하며 발생하는 모든 개인정보 관련 질문을 질문·제안·신고 메뉴로 접수 할 수 있습니다.<br />
                            HABITERS는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br />
                            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다<br />
                            개인분쟁조정위원회 (www.1336.or.kr, 1336)<br />
                            대검찰청 첨단범죄수사과 (http://www.spo.go.kr, 02-3480-2000)<br />
                            경찰청 사이버테러대응센터 (www.ctrc.go.kr, 02-392-0330)<br />

                        </div >

                        <PrivacyPolicySubTitle>11.개인정보 관리책임 부서 및 연락처</PrivacyPolicySubTitle>
                        <div>부서 : HABITERS 개인정보관리팀<br />
                            개인정보관리팀 이메일 : weareteamclovers@gmail.com</div>

                        <PrivacyPolicySubTitle>12.기타</PrivacyPolicySubTitle>
                        <div>
                            HABITERS에 링크되어 있는 타 서비스들이 개인정보를 수집하는 행위에 대해서는 이 '개인 정보 정책'이 적용되지 않으며 타 서비스로의 이동시 별도 안내를 하지 않으므로 주소창을 필히 확인하시기 바랍니다. (서비스 링크 첨부)
                        </div>

                        <PrivacyPolicySubTitle>13.고지의 의무</PrivacyPolicySubTitle>
                        <div>
                            현 개인 정보 정책의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 당일부터 홈페이지의 '공지사항'을 통해 고지할 것입니다. (회원들이 익히 알고 있는 사소한 건에 대해서는 모아서 한꺼번에 통지합니다.)
                        </div>






                    </PrivacyPolicyWrap >

                </Container >

            </main >
        </>

    )
}
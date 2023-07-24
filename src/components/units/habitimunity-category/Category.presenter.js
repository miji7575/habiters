import styled from "@emotion/styled"

// ============================== Style ==============================
const CategoryContainer = styled.div`
    display: flex;
    justify-content: start;
`
const CategoryBox = styled.div`
    width: 444px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    color : var(--color-black4);
    position: relative;
`

const CategoryBtn = styled.div`
    width: 64px;
    height: 42px;
    text-align: center;
    line-height: 42px;

    border: 1px solid #CCCCCC;
    border-radius: 50px;
`



export default function CommunityCategoryUI() {




    return(
        <>
            <CategoryContainer>
                <CategoryBox>
                    <CategoryBtn>
                        전체
                    </CategoryBtn>
                    <CategoryBtn>
                        공부
                    </CategoryBtn>
                    <CategoryBtn>
                        운동
                    </CategoryBtn>
                    <CategoryBtn>
                        건강
                    </CategoryBtn>
                    <CategoryBtn>
                        일상
                    </CategoryBtn>
                    <CategoryBtn>
                        기타
                    </CategoryBtn>
                </CategoryBox>


            </CategoryContainer>
        </>
    )
}
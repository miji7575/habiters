import styled from "@emotion/styled";
import { useState } from "react";

const BookmarkBox = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid var(--color-black4);
    border-radius: 50%;
    
    cursor: pointer;

    /* bookmarkState에 따른 조건부 스타일 설정 */
    background-color: ${props => (props.bookmarked ? `var(--color-purple2)` : `none`)};
`

const BookmarkIcon = styled.i`
    display: inline-block;
    width: 32px;
    height: 32px;

    margin-right: 4px;

    background-color: var(--color-black4);

    mask-size: 16px 16px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px 16px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-bookmark.svg);
    -webkit-mask-image: url(/image/icon/icon-bookmark.svg);

     /* bookmarkState에 따른 조건부 스타일 설정 */
     background-color: ${props => (props.bookmarked ? `var(--color-white)` : `var(--color-black4)`)};
`


export default function BookmarkUI(props) {
  const [bookmarkState, setBookmarkState] = useState(props.bookmarked);

  console.log(props.bookmarked);

  const setBookmark = () => {
    setBookmarkState(!bookmarkState); // bookmarkState 값을 토글합니다.
  }

  return (
    <BookmarkBox
      bookmarked={bookmarkState} // bookmarkState를 props로 전달합니다.
      onClick={setBookmark}
    >
      <BookmarkIcon bookmarked={bookmarkState} /> {/* bookmarkState를 props로 전달합니다. */}
    </BookmarkBox>
  );
}
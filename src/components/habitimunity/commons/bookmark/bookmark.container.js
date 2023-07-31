import BookmarkUI from "./bookmark.presenter";

export default function Bookmark(props) {

    return (
        <BookmarkUI 
            bookmarked={props.bookmarked}
        />
    );
  }
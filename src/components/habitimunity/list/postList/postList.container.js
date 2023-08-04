import PostListUI from "./postList.presenter";


export default function PostList(props) {




    return(
        <PostListUI 
            posts={props.posts}
            limit={props.limit}
            offset={props.offset}
        />
    )
}
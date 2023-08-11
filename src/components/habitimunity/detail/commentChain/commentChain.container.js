import CommentChainUI from './commentChain.presenter';

export default function CommentChain(props) {


    const commentData = {
        id: 78,
        content: "나는 댓글이다.",
        writerId: "33",
        regDate: "2023.03.04",
        like: 50,
    }


    const commentReplyData = [{
        id: 1,
        content: "나는 1번 대댓글이다.\n나는 1번 대댓글이다.\n나는 1번 대댓글이다.",
        writerId: "10",
        regDate: "2023.03.10",
        like: 50,
    }, {
        id: 2,
        content: "나는 2번 대댓글이다.\n나는 2번 대댓글이다.",
        writerId: "20",
        regDate: "2023.03.10",
        like: 50,
    },
    {
        id: 3,
        content: "나는 3번 대댓글이다.",
        writerId: "30",
        regDate: "2023.03.10",
        like: 50,
    }

    ]
    const commentLength = commentReplyData.length;


    const commentReplyData2 = [{
        id: 1,
        content: "나는 1번 대댓글이다.\n나는 1번 대댓글이다.\n나는 1번 대댓글이다.",
        writerId: "10",
        regDate: "2023.03.10",
        like: 50,
    }, {
        id: 2,
        content: "나는 2번 대댓글이다.\n나는 2번 대댓글이다.",
        writerId: "20",
        regDate: "2023.03.10",
        like: 50,
    },
    {
        id: 3,
        content: "나는 3번 대댓글이다.",
        writerId: "30",
        regDate: "2023.03.10",
        like: 50,
    },
    {
        id: 4,
        content: "나는 4번 대댓글이다.",
        writerId: "40",
        regDate: "2023.03.10",
        like: 50,
    }

    ]

    const commentLength2 = commentReplyData2.length;




    return (
        <>
            <CommentChainUI
                commentData={commentData}
                commentReplyData={commentReplyData}
                commentReplyLength={commentLength}

            />

            <CommentChainUI
                commentData={commentData}
                commentReplyData={commentReplyData2}
                commentReplyLength={commentLength2}
            />
        </>
    )
}
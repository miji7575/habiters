import PaginationUI from "./pagination.presenter";

export default function Pagination({total, limit, page, setPage}) {

    return(
        <PaginationUI
            total={total}
            limit={limit}
            page={page}
            setPage={setPage}
        />
    )
}
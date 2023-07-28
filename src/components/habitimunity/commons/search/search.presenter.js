import styled from "@emotion/styled"
import { useState } from "react"

const SearchBox = styled.div`
    width: 280px;
    height: 48px;
    display: flex;
    align-itmes: center;

    position: relative;
`

const SearchInput = styled.input`
    width: 100%;

    background-color: transparent;

    border: 1px solid #DBDBDB;
    border-radius: 8px;

    padding-left: 44px;
    padding-right: 10px;


`

const SearchIcon = styled.i`

    display: inline-block; 
    position: absolute; 
    width: 24px; 
    height: 24px; 
    left: 0px;

    padding: .8em 0.8em;
    display: flex; /* 가상 요소 가운데 정렬 */
    margin-left: auto;

    background-color: #A6A6A6;

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-search.svg); 
    -webkit-mask-image: url(/image/icon/icon-search.svg); 
`
const SearchClear = styled.span`
    display: inline-block; 
    position: absolute; 
    width: 24px; 
    height: 24px; 
    right: 0px;

    padding: .8em 0.8em;
    display: flex; /* 가상 요소 가운데 정렬 */
    margin-left: auto;

    background-color: #A6A6A6;

    mask-size: 24px 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 24px 24px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-close.svg); 
    -webkit-mask-image: url(/image/icon/icon-close.svg); 
`

export default function SearchUI() {

    const [isSearchText, setisSearchText] = useState(false);
    const [searchText, setSearchText] = useState('');


    // 230726 close 버튼을 눌렀을 때, 
    const searchClear = () => {
        setisSearchText(false)
        setSearchText('');
    }

    // 230726 검색어를 입력 시 상태를 업데이트하는 함수
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        setisSearchText(true)
    }
    
    // 230726 Enter키를 눌렀을 때, 검색 기능을 실행하는 함수
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // 여기서 실제로 검색을 수행하면 됩니다.
            alert(`검색어: ${searchText}`);
        }
    }


    return (
        <SearchBox>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder='검색어를 입력해주세요.'
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
            >
            </SearchInput>
            {
             isSearchText && <SearchClear onClick={searchClear} />
            }

        </SearchBox>

    )
}
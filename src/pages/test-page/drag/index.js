import styled from '@emotion/styled'
import Inputs from '../../../components/habitimunity/register/voteForm/votingInputs/inputs/Inputs.container'
import VotingInputs from '../../../components/habitimunity/register/voteForm/votingInputs/votingInputs.container'
import { InputValueState } from '../../../components/stores/index';
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";



const Main = styled.div`

    padding-left: 50px; 



`
const Section = styled.div`
    display: flex;
    gap : 30px;
    padding-bottom: 30px;
    padding-top: 30px;
`

const BoxByType = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    > div > div {
        padding-bottom: 20px;
    }
`

const GoBack = styled.div`
    width : 150px;
    height: 50px;
    background-color: var(--color-black7);
    border-radius: 10px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    font-weight: 900px;

`


const DargBackGround = styled.div`
background-color: beige;
padding: 30px;
display: flex;
flex-direction: column;
gap : 10px;
border-radius: 8px;
`
const DraggableItems = styled.div`
background-color: brown;
color : white;
font-weight: 900;
border-radius: 8px;
padding: 5px;
`
export default function VoteInputsTestPage() {


    // -------------TEST------------
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }


    // useEffect(() => {
    //     console.log(inputValue)
    // })

    // ============================== Function  ==============================

    const datas = [
        {
            id: '1',
            title: 'first'
        },
        {
            id: '2',
            title: 'second'
        },
        {
            id: '3',
            title: 'third'
        },
    ]
    // const [datas, setDatas] = useState([
    //     {
    //         id: '1',
    //         title: 'first'
    //     },
    //     {
    //         id: '2',
    //         title: 'second'
    //     },
    //     {
    //         id: '3',
    //         title: 'third'
    //     },
    // ])


    const handleChange = (DropResult) => {

        if (!DropResult.destination) return;

        const items = [...datas];
        const [reorderedItem] = items.splice(DropResult.source.index, 1);
        items.splice(DropResult.destination.index, 0, reorderedItem);

        // setDatas(items);
        datas = items;
    };

    const ref = useRef();

    return (

        <Main>
            <h1>Drag연습</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />

            <Section>

                <DragDropContext onDragEnd={handleChange}>
                    <Droppable droppableId="todos">
                        {(provided) => (
                            <div
                                className="todos"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {datas.map(({ id, title }, index) => (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <DraggableItems
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {title}
                                                {/* //  ✨ 움직일 아이템 리스트들을 넣어주는 곳 ✨ */}
                                            </DraggableItems>
                                        )}
                                    </Draggable>
                                ))}
                                {/* 👇 */}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>


            </Section>




        </Main>


    )
}
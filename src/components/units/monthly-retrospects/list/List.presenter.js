
import { MonthlyRetrospectBox } from './List.styles'
import Retrospect from '../retrospect/Retrospect.container';


export default function RetrospectListUI(props) {


   

    return (

        <>

            <MonthlyRetrospectBox >

                {props.data.retrospects.map((data) =>
                    <Retrospect
                        date={data.regDate}
                        content={data.content} />)}




            </MonthlyRetrospectBox>

        </>
    )

}
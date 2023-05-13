
import { MonthlyRetrospectBox } from './List.styles'
import Retrospect from '../retrospect/Retrospect.container';


export default function RetrospectListUI(props) {




    return (

        <>

            <MonthlyRetrospectBox >

                {Object.entries(props.userRetrospect).map(([key, value]) =>
                    <Retrospect
                        contentId={value.id}
                        content={value.content}
                        date={value.createDate}
                        getUserRetrospects={props.getUserRetrospects}
                    />)}



            </MonthlyRetrospectBox>

        </>
    )

}
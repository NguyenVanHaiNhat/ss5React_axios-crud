import {useParams} from "react-router-dom";

export default function EditStudent(){
    const id = useParams();
    console.log(id)
    return (
        <h1>Edit student</h1>
    )
}
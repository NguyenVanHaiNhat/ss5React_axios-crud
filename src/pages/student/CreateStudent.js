import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateStudent(){
    const navigate = useNavigate();
    return (
        <>
            <h1>Create student</h1>
            {/*<button onClick={() => {*/}
            {/*    // navigate("/") // chuyển hướng về url được khai báo*/}
            {/*    navigate('/')*/}
            {/*}}>save</button>*/}
            <Formik
                initialValues={{
                    name : '',
                    age : '',
                    email : ''
                    // giá trị khởi tạo cho các thẻ input ở trong
                }}
                onSubmit={(values) => {
                    axios.post("http://localhost:8080/api/student", values).then(() => {
                        alert("Thành thụ");
                        // values sẽ lấy trực tiếp ở bên dưới Form
                    })
                }}
            >
                <Form>
                    <Field name = {'name'}></Field>
                    <Field name = {'age'}></Field>
                    <Field name = {'email'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}
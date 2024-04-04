import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent(){
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/student').then(res => {
            setList(res.data);
        })
    }, []);
    return (
        <>
        <h1>List Student</h1>
            {list.map((item, key) => {
                return (
                    <h3 key={key}>{item.name}: {item.age}: {item.email}</h3>
                )
            })}
        </>
    )
}
import { useEffect } from "react";
import { useState } from "react";
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";

export function PageStudents() {

    const [count,setCount] = useState(0);

    const [studentData, setStudentData] = useState([]);

    const dataURL = "https://raw.githubusercontent.com/front-end-by-rimantas/48-grupe-react-form/master/public/students.jsonmantas";

    useEffect( () => {

        fetch(dataURL)
            .then(res => res.json)
            .then(data => setStudentData(data))
            .catch(e=>console.error(e))
        //  const result = await fetch(dataURL);
        // const data = await result.json();
        // setStudentData(data);

    },[]);


    // const result = await fetch(dataURL);
    // const data = await result.json();
    // console.log(data);

    return (
        <>
            <h1 className="page-title">Students
                <button onClick={()=>setCount(count+1)}>{count}</button>
            </h1>

            <p className="page-description">Students attending this class:</p>
            {studentData.length === 0?  <StudentsNoData /> : <StudentList />}
           
          
        </>
    )
}
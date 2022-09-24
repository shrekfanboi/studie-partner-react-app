const Loader = ({students})=> {
    return (
        <>
        <h3>
            {students.length > 0 ? `${students.length} matches found`:`No matches`}
        </h3>
        <ul>
           {students.map((student)=>
           <li key={student.student_id}>
            <div>
            <span>username: <strong>{student.username}</strong></span>
            <span>Good At: <strong>{student.strong_subject}</strong></span>
            <span>Bad At: <strong>{student.weak_subject}</strong></span>
            </div>
            </li>)}
        </ul>
        </>
    )
}

export default Loader;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from './Loader';
const SearchForm = () => {
    const [values,setvalues] = useState({
        fullname:'',
        username:'',
        password:'',
        sgsub:'',
        wksub:'',
        stdtype:'',
        students:[]
    })
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(values.sgsub === '' || values.wksub === '' || values.stdtype === '') return
        console.log(JSON.stringify(values))
        const data = await fetch("http://studie-app.herokuapp.com/api/students/search",{
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)
        })
        const respone = await data.json()
        console.log(respone)
        setvalues({fullname:'',
        username:'',
        password:'',
        sgsub:'',
        wksub:'',
        stdtype:'',students:respone["students"]})
    }
    return (
    <div className='row'>
    <div className='col search-form'>
    <Form onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="fullname">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" value={values.fullname} name="fullname" onChange={(e)=>setvalues({...values,fullname:e.target.value})}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Enter Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Username" value={values.username} name="username" onChange={(e)=>setvalues({...values,username:e.target.value})}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="password">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={values.password} name="password" onChange={(e)=>setvalues({...values,password:e.target.value})}/>
      </Form.Group>
       */}

      <Form.Group className="mb-3" controlId="strongestSubject">
        <Form.Label>Subject You are Strongest In</Form.Label>
        <Form.Select aria-label="strongest-select-sub" name='sgsub' value={values.sgsub} onChange={(e)=>{if(values.wksub !== e.target.value) setvalues({...values,sgsub:e.target.value})}}>
            <option>--Select--</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="computer">Computer</option>
            <option value="science">Science</option>
        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="weakestSubject">
        <Form.Label>Subject You are Weakest In</Form.Label>
        <Form.Select aria-label="weakest-select-sub" name='wksub' value={values.wksub} onChange={(e)=>{if(values.sgsub !== e.target.value) setvalues({...values,wksub:e.target.value})}}>
            <option>--Select--</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="computer">Computer</option>
            <option value="science">Science</option>
        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="studyType">
        <Form.Label>Study Type</Form.Label>
        <Form.Select aria-label="study-type-select" name='stdtype' value={values.stdtype} onChange={(e)=>setvalues({...values,stdtype:e.target.value})}>
            <option>--Select--</option>
            <option value="pair">Pair</option>
            <option value="group">Group</option>
        </Form.Select>
    </Form.Group>
    <Button variant="primary" type="submit">
        Find Me Someone
    </Button>
    </Form>
    </div>

    <div className='col student-list'>
    <Loader students={values.students}/>
    </div>
    </div>
    )
}

export default SearchForm
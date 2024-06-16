import React, { useState } from 'react';
import './App.css';
function App() {
  const [edu, setEdu] = useState([]);
  const [submitData, setSubmitData] = useState([]);
  const handleAddEdu = () => {
    setEdu([
      ...edu,
      {
        courseName: '',
        university: '',
        year: '',
      },
    ]);
  };
  console.log(edu);
  console.log(submitData);
  
  const handleAddSubmit = () => {
    setSubmitData(edu); 
  };
  const handleRemoveEduc = (index) => {
    const newEdu = [...edu];
    newEdu.splice(index, 1);
    setEdu(newEdu);
  };

  const handleInputChange = (index, event) => {
    const newEdu = [...edu];
    newEdu[index][event.target.name] = event.target.value;
    setEdu(newEdu);
  };

  return (
    <div className="App">
      <div className="name-email">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
      </div>
      <button className='add-btn' onClick={handleAddEdu}>Add Education</button>
      {edu.map((education, index) => (
        <div className="education" key={index}>
          <input
            type="text"
            placeholder="Course name"
            name="courseName"
            value={education.courseName}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="text"
            placeholder="University"
            name="university"
            value={education.university}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            value={education.year}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button className='remove-btn' onClick={() => handleRemoveEduc(index)}>Remove</button>
        </div>
      ))}
      <div className="submit-btn">
{edu.length > 0 &&
 <button type="submit" onClick={handleAddSubmit} className='sub-btn'>Submit</button>
 }
      </div>
      <div className="table-contant">
        {submitData.length > 0 && (
         
    <table className="table"  width={"50%"} border={1} border-Collapse="collapse" >
      <thead >
        <tr>
          <th>Course Name</th>
          <th>University</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {submitData.map((data, index) => (
          <tr key={index}>
            <td>{data.courseName}</td>
            <td>{data.university}</td>
            <td>{data.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
     )}
    </div>
    </div>
  );
}

export default App;
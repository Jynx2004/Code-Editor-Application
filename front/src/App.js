import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [inputdata,setinputdata]=useState("");
  const [outputdata,setoutputdata]=useState("Your Output");

  function chhandler(e){
    setinputdata(e.target.value);
    console.log(inputdata);

  }

  function clhandler(){

    const getAllData = async () => {
      try {
        console.log("Input Data :", inputdata);

        const RunCode = await fetch(
          `${"http://localhost:4000/api/v1/compile"}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },

            body: inputdata,
          }


        );

        const resp= await RunCode.json();

        console.log("Response ",resp);
        setoutputdata(resp.data);
        alert("Code Run Successful !");
  
      } catch (error) {
        console.log(error);
      }
    };

    getAllData()



  }

  return (
    <div className="App">

      <textarea placeholder='Enter your python code' onChange={chhandler}minLength={20} maxLength={40} ></textarea>
      <br/>
      <br/>
      <button onClick={clhandler}>Run</button>

      <div>
        <p>{outputdata}</p>
      </div>

    </div>
  );
}

export default App;

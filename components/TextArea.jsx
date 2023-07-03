"use client";
import React, { useState } from "react";

const backendUrl ='http://localhost:4000/api/text'

const TextArea = () => {
  const [textFeild, setTextFeild] = useState("");

  const pasteText = async () => {

    try {
        const response = await fetch(backendUrl , 
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content: textFeild,
              }),
            }
          );

          if(response.ok) {
            const result = await response.json();
            const id = result._id;
            redirectToPastedText(id)
            console.log(result);
            setTextFeild("");
          }
        
    } catch (error) {
        console.log(error)
    }
  };
  
  const redirectToPastedText = (id) => {
    window.location.href = `/pasted/${id}`;
  };
  
  return (
    <div className="">
    <textarea
        className="outline-none border  bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md  border-white shadow-md rounded placeholder:text-black w-[100%] md:min-w-[50rem] sm:min-w-[40rem] min-w-[20rem] font-semibold"
        placeholder="Paste your text here"
        rows={10}
        type="text"
        value={textFeild}
        onChange={(e) => setTextFeild(e.target.value)}
      />

      <div>
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={pasteText}>
          Paste
        </button>
      </div>
    </div>
  );
};

export default TextArea;


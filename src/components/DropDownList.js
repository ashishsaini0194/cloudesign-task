import React from "react";
import { paragraphsArray  } from '../data/source';

function DropDownList({changeTest}) {
  return (
    <div>
      
      <form>
      
        <select style={{ width: "100%", height:"50px", fontSize:"24px"}} className="bg-secondary text-white"
          onChange={(event) => changeTest(event.target.value)}
        
        >
           {paragraphsArray.paragraph.map((data,index) => (
          <option  key={index}style={{fontSize:"24px"}} value={data.Para}>{data.label}</option>
          ))}
        </select>
       
      </form>
    
    </div>
  );
}

export default DropDownList;

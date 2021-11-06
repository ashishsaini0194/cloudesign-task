import React from "react";

function Preview(props) {
  const para = props.selectedParagraph.split(" ");
  // console.log("para",para)

  var usrinpt = props.userInput.split(" ");
  // console.log(usrinpt);

  var color;
  return (
    <div className="textarea">
      {para.map((a, b) => {
        console.log("started");
        // const char=a.split("")
        // console.log("char",char)

        if (b < usrinpt.length - 1) {
          // console.log(b, usrinpt.length - 1);
          // console.log(a, usrinpt[b]);

          if (a === usrinpt[b]) {
            color = "green";
          } else {
            color = "red";
          }
        } 
        else if(b === usrinpt.length - 1){
          if(a === usrinpt[b]){
            color="blue"
          }
        }
        
        else {
          color = "black";
        }
        return (
          <span key={b} style={{ color: color }}>
            {para[b] + " "}
          </span>
        );
      })}
    </div>
  );

  // return (
  //   <div className="textarea">
  //     {para.map((s, i) => {
  //       let color;
  //       if (i < props.userInput.length) {
  //         color = s === props.userInput[i] ? "#006400" : "#DC143C";
  //       } else if (i === props.userInput.length) {
  //         color = s === props.userInput[i] ? "blue" : "blue";
  //       }
  //       return (
  //         <span key={i} style={{ color: color }}>
  //           {s+' '}
  //         </span>
  //       );
  //     })}
  //   </div>
  // );
}

export default Preview;

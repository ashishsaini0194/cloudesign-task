import React from "react";

function Preview(props) {

  const para = props.selectedParagraph.split(" ");
  // console.log("para",para)

  var usrinpt = props.userInput.split(" ");
  if (usrinpt[0] == "") { //making it undefined so that first empty string will no be checked
    usrinpt = [];
  }
  console.log(usrinpt);

  var color;
  function returnit(color, val) {
    return (
      <span style={{ color: color }} >
        {val + " "}
      </span>
    )
  }
  return (
    <div className="textarea">
      {
        // console.log(usrinpt);
        para.map((val, index) => {
          // console.log(val, index)


          if (index == usrinpt.length - 1) { //for the word we are currently typing
            if (val.length != usrinpt[index].length) { //if both words are not equal
              if (usrinpt[index].length < val.length) { // if usr typed input is less then available word
                if (val.includes(usrinpt[index])) { // if available word includes the typed word
                  var remainingword = val.slice(usrinpt[index].length)
                  color = "blue"
                  return (
                    <span >
                      <span style={{ color: color }} >{usrinpt[index]}</span>
                      <span style={{ color: "black" }}>{remainingword + " "}</span>
                    </span>
                  )
                } else {
                  color = "red";
                  return returnit(color, val)
                }

              }
              else { //if usript length is bigger then real value then color would be red 
                color = "red";
                return returnit(color, val)
              }
            } else {
              if (usrinpt[index] == val) {
                color = "green";
                return returnit(color, val);
              } else {
                color = "red";
                return returnit(color, val);
              }
            }
          } else {
            if (usrinpt[index] != undefined) { //if the value is not undefined only then change color
              if (val == usrinpt[index]) {
                color = "green"
              } else {
                color = "red"
              }
            } else {
              color = "black"
            }

            return returnit(color, val);

          }
        })

      }
    </div>
  );















  // const para = props.selectedParagraph.split(" ");
  // // console.log("para",para)

  // var usrinpt = props.userInput.split(" ");
  // if (usrinpt[0] == "") { //making it undefined so that first empty string will no be checked
  //   usrinpt = [];
  // }
  // console.log(usrinpt);

  // var color;
  // return (
  //   <div className="textarea">
  //     {
  //       // console.log(usrinpt);
  //       para.map((val, index) => {
  //         // console.log(val, index)


  //         if (usrinpt[index] != undefined) {
  //           if (val == usrinpt[index]) {
  //             color = "green"
  //           } else {
  //             color = "red"
  //           }
  //         } else {
  //           color = "black"
  //         }


  //         return (
  //           <span style={{ color: color }} >
  //             {val + " "}
  //           </span>
  //         )
  //       })

  //     }
  //   </div>
  // );


}

export default Preview;

export const testDetailsCalculator = (originalValue, typedValue) => {

    // console.log(originalValue);

    // const words = typedValue.split(' ').length;
    const words = typedValue.split(' ').filter(w => w !== '').length;
    // console.log("words", words)
    const wordWeight=(typedValue) =>{
        let wordWt=0;
        let wordWtt=words;
        if(wordWtt<=3){
            wordWt+=1;
            
        }
        else if(wordWtt<=5){
            wordWt+=3;
        }
        else if(wordWtt>5){
            wordWt+=5;
        }
        
    
    }
    const characters = typedValue.length;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return typedChar !== originalValue[index] ? acc+1 : acc 
    }, 0)

    return { words, characters, mistakes, wordWeight }
}
 
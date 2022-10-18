function reverseWords(str){
    const result=str.split(" ").map(arr => arr.split("").reverse().join(""));
    console.log(result.join(" "));
    }
// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`; 



let text = "Check whether a string contains all the vowels a,e,i,o,";


if (text.includes(`a`) && text.includes(`e`) &&
    text.includes(`i`) && text.includes(`o`) &&
    text.includes(`u`)){
        console.log("Hi!");
}else{
    console.log("Bye!");
}
function countVowelConsonant(str) {
    let temp = str.split('')
    let count = 0
    for(let i = 0; i<str.length;i++){
        if(vowelTest(temp[i])){
            count +=1
        }
        else{
            count +=2
        }
    
    }
    return count
  
}
function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}


/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
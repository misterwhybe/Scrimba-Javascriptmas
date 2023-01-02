function insertDashes(arr) {
    let newString = ''
    let ind = arr.split('')
    for(let i=0;i<arr.length;i++){
        if(i+1 == arr.length){
            newString += ind[i] 
        }
        else if(ind[i+1] == ' ' || ind[i] == ' '){
            newString += ind[i] 
        }     
        else{
        newString += ind[i] + '-'
        }
    }
    return newString
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
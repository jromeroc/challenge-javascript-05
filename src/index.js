/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let tempArray = [1, 1];
    let actualArray = [1];

    if(lineNumber === 0) {
        return actualArray;
    } 

    if(lineNumber === 1) {
        return tempArray;
    }

    for (let i = 2; i <= lineNumber; i++)
    {
        actualArray = [1];
        for(let j = 1; j < i; j++)
        {
            actualArray.push(tempArray[j-1] + tempArray[j]);
        }
        actualArray.push(1);
        tempArray = actualArray;
    }
    return actualArray;
}

module.exports = pascalTriangle;
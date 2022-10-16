var codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];

var shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']



// Compare these, put the first array inside of the shoppingCart array?

function compareArrayChunks(codeList, shoppingCart){
    
    // console.log(codeList)
    // console.log(arr)

    
    for (let i = 0; i < shoppingCart.length; i++){
        console.log(shoppingCart[i])

        for (let j = 0; j < codeList.length; j++){
            if (shoppingCart[i] == codeList[j]){
                console.log(codeList[j])
            }
        }
    }



}

compareArrayChunks(codeList, shoppingCart);
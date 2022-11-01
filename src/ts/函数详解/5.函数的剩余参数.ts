
function sun(initalNum:number,...nums:number[]){

    let total = initalNum;
    for (const num of nums){
        total += num
    }

    return total
}

sun(20,20,30,40)
sun(20,20,30,40,10)
sun(20,20,30,40,10,90)








export {

}
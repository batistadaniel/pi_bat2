let arr = [4, 23, 67, -8, 21]

for (i = 1; i < arr.length; i++){
    // console.log(arr[i])
    let aux = arr[i];
    let j;
    // console.log(aux)
    for (j = i; (j > 0) && (aux < arr[j - 1]); j--){
        // console.log(j)
        arr[j] = arr[j - 1]
        // console.log(arr[j])
    }
    arr[j] = aux
    console.log(arr)
}
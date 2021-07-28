// 1. Counting Number in Array
/* 
    Buatlah sebuah fungsi yang dapat menjumlahkan kumpulan angka di dalam array.
    Proses :
    input [1,2,3]
    total = 1 + 2 + 3 = 6
    return 6

    fungsi ini hanya dapat menerima argument tipe data array yang ebrisi number, dan mengembalikan tipe data number

    [1,2,3,4,5,6] -> return 21
    [1,2,3] -> return 6
    [10,10,10,10,10] -> return 50
    [] -> return 0
*/

/* const countNumber = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
        if(typeof arr[i] !== 'number') return false;
    }
    return total;
}

console.log(countNumber([10,10,10,10,10])); */

















// 2. Reverse All Array
/* 
    Proses :
    input [123, 456]
    123 dibalik menjadi 321
    456 dibalik menjadi 654
    654 akan berada di index 0 array dan 321 akan berada di index 1 array
    return [654, 321]

    [123, 456] -> return [654, 321]
    [332, 432, 661] -> return [166, 234, 233]
    [456789, 332] -> return [233, 987654]
    [] -> return []
*/

/* const reverseArray = (arr) => {
    let result = [];
    let ri = 0;
    for(let i = arr.length -1; i >= 0 ; i--) {
        let index = arr[i].toString();
        let reverseIndex = '';
        for(let j = index.length -1; j >= 0; j--) reverseIndex += index[j];
        result[ri] = Number(reverseIndex);
        ri++;
    }

    return result;
} 

console.log(reverseArray([456789, 332])); */
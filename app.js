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
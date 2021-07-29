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













// 3. Unique Array
/* 
    Buatlah sebuah fungsi yang dapat memunuculkan data unique (tidak ada yang duplicate) di dalam array.

    Proses :
    input [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]
    terdapat duplikat pada angka 1, 2, 4, 5, 2
    return [1, 4, 5, 6, 2, 3, 7]

    fungsi ini hanya dapat menerima argument tipe data array yang berisi number, dan mengembalikan tipe data array

    [1, 1, 1, 1, 1, 1] -> return [1]
    [1, 1, 2, 2, ,3 ,3, 4, 4] -> return [1, 2 , 3, 4]
    [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7] -> return [1, 4, 5, 6, 2, 3, 7]
    [] -> return []
*/

/* const uniquerArray = (arr) => {
    let result = [];
    const exist = (number) => {
        for(let i = 0; i < result.length; i++) 
            if(result[i] === number) return false
        return true
    }
    
    for(let i = 0; i < arr.length; i++) {
        exist(arr[i]) ? 
                (arr[i]) ? result[result.length] = arr[i] 
                : '' 
            : '';
    }

    return result;
}

console.log(uniquerArray([1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7])); */














// 4. Shopping bubble tea
/* 
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
*/

/* const listBoba = [
    ['Xing Fu Tang', 38000], 
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
]

const jajanBoba = (money) => {
    console.log(`David mulai jajan dengan uang jajan Rp${money}`)
    
    for(let i = 0; i < listBoba.length; i++) {
        let jajan = listBoba[i][0];
        let harga = listBoba[i][1];

        if(money > listBoba[i][1]) {
            console.log(`Dengan uang Rp${money}, cukup untuk beli ${jajan}`)
            money -= harga;
            continue;
        }

        console.log(`Dengan uang Rp${money}, tidak cukup untuk beli ${jajan}`);
    }

    return money;
}

jajanBoba(100000); */













// Bonus
// 5. Search Same data
/* 
    buatlah sebuah fungsi yang dapat mencari value yang sama dari kedua list data array.
    fungsi ini menerima dua argument tipe data array yang berisi number, dan mengembalikan tipe data array

    input : [1, 2, 3, 4, 5, 6, 7] dan [1, 3, 6, 7, 9, 10, 12, 15]
    data yang sama dari kedua array : 1, 3, 6, 7
    output return : [1, 3, 6, 7]

    contoh test case
    [1, 2, 5] dan [1, 4, 6, 7] -> return [1]
    ["jaya" , "asik", "keren"] dan ["keren", "yea", "asik"] -> return ["asik", "keren"]
    [] dan [1, 3, 4, 5, 6] -> return []
*/

/* const searchSame = (arr1, arr2) => {
    const result = [];

    const exist = (arr , item) => {
        for(let i = 0; i < arr.length; i++) 
            if(arr[i] === item) return true
        return false;
    }

    for(let i = 0; i < arr1.length; i++) 
        exist(arr2, arr1[i]) ? 
            result[result.length] = arr1[i] : ""

    return result;
}


console.log(searchSame(["jaya" , "asik", "keren"] , ["keren", "yea", "asik"])); */
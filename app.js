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

















// 6. Count Profit
/* 
    PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka, data ini telah terkumpul dalam bentuk berikut

    Tampilkan hasil profit(income - outcome)

        | br 1 | br 2 | br 3 |
    jan | 3700 | 1300 | 1500 |
    feb | 1600 | 300  | 1900 |
    mar | 1100 | 1100 | 1700 |
    apr | 1600 | 1800 | 1300 |
    may | 300  | 1600 | 300  |
    jun | 1200 | 1800 | 1100 |
    jul | 1200 | 1700 | 700  |
    aug | 300  | 1700 | 800  |
    sep | 1700 | 1500 | 2300 |
    oct | 1800 | 300  | 400  |
    nov | 1700 | 800  | 1300 |
    dec | 1800 | 600  | 1800 |
*/

/* const month = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec']

const printBranch = (branches) => {
    // for 
    const tables = [month];
    for(let i = 0; i < branches.length; i++) {
        // loop income
        let income = branches[i][0];
        let outcome = branches[i][1];
        const profits = [];
        for(let j = 0; j < income.length; j++) {
            let profit = income[j] - outcome[j];
            profits[profits.length] = profit;
        }
        tables[tables.length] = profits;
    }

    // set by rows
    const rows = [];
    for(let i = 0; i < tables.length ; i++) {
        for(let j = 0; j < tables[i].length; j++) {
            if(!rows[j]) rows[j] = [];
            rows[j][i] = tables[i][j];
        }
    }

    // print in console
    let th = `month \t|\t `
    for(let i = 0; i < branches.length ; i++) th+= ` br ${i + 1} \t|\t `
    console.log(th);
    for(let i = 0; i < rows.length ; i++) {
        let row = '';
        for(let j = 0; j < rows[i].length; j++) {
            row += ` ${rows[i][j]} \t|\t `
        }
        console.log(row);
    }

}


const data1 = [
    [
      [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
      [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
    ],
    [
      [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
      [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
    ],
    [
      [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
      [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
    ]
  ]

console.log('Test Case ke 1');
printBranch(data1);



const data2 = [
    [
      [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
      [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
    ]
]
console.log('Test Case ke 2');
printBranch(data2); */



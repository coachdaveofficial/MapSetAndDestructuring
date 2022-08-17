new Set([1,1,2,2,3,4]) // {1,2,3,4}

[...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // {[1,2,3] : true, [1,2,3] : false}



const hasDuplicate = (arr) => {
    let arrSet = new Set(arr);
    if (arrSet.size === arr.length) return false;

    return true;
}

const checkVowel = (char) => 'aeiou'.includes(char);

function vowelCount(str) {
    str = str.toLowerCase();
    const newMap = new Map();
    for (let char of str) {
        if (checkVowel(char)) {
            if (newMap.has(char)) {
                newMap.set(char, newMap.get(char) + 1)
            } else {
                newMap.set(char, 1)
            }
        }
    }
    return newMap;
}
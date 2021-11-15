const temp = [12, 13, 20, 31, 41, 17]

let topol = temp [0]
let laden = temp [0]

for (let index =0; index < temp.length; index ++) {
    let den = temp [index]
    if (den > topol) {
        topol = temp [index]
    }

    if (den < laden)
        laden = temp [index]
}

console.log (laden)
console.log (topol)
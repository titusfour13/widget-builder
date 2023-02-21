const arr = [
    {
        "Color": "Black",
        "Length": "1000' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Black",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Blue",
        "Length": "1000' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Blue",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Green",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Natural",
        "Length": "1000' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Natural",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Orange",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Red",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Violet",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "White",
        "Length": "1000' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "White",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Yellow",
        "Length": "1000' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Yellow",
        "Length": "500' Reel",
        "Size": "1/4\" O.D."
    },
    {
        "Color": "Black",
        "Length": "500' Reel",
        "Size": "5/16\" O.D."
    },
    {
        "Color": "Blue",
        "Length": "500' Reel",
        "Size": "5/16\" O.D."
    },
    {
        "Color": "Natural",
        "Length": "500' Reel",
        "Size": "5/16\" O.D."
    },
    {
        "Color": "Red",
        "Length": "500' Reel",
        "Size": "5/16\" O.D."
    },
    {
        "Color": "Black",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Blue",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Green",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Natural",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Orange",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Red",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "White",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Yellow",
        "Length": "500' Reel",
        "Size": "3/8\" O.D."
    },
    {
        "Color": "Black",
        "Length": "250' Reel",
        "Size": "1/2\" O.D."
    },
    {
        "Color": "Blue",
        "Length": "250' Reel",
        "Size": "1/2\" O.D."
    },
    {
        "Color": "Natural",
        "Length": "250' Reel",
        "Size": "1/2\" O.D."
    },
    {
        "Color": "Red",
        "Length": "250' Reel",
        "Size": "1/2\" O.D."
    },
    {
        "Color": "White",
        "Length": "250' Reel",
        "Size": "1/2\" O.D."
    }
]


function makeCombination(selected) {
    const available_length = getAvailableLength(arr.filter((obj) => obj.Color === selected.Color && obj.Size === selected.Size), "Length")
    const available_color = getAvailableLength(arr.filter((obj) => obj.Length === selected.Length && obj.Size === selected.Size), "Color")
    const available_size = getAvailableLength(arr.filter((obj) => obj.Color === selected.Color && obj.Length === selected.Length), "Size")

    console.log(available_length, available_color, available_size)
    return cartesian(available_length, available_color, available_size)
}

function getAvailableLength(array = [], key) {
    return [... new Set(array.map((array) => array[key]))]
}


function cartesian(...args) {
    var r = [], max = args.length - 1;
    function helper(arr, i) {
        for (var j = 0, l = args[i].length; j < l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i == max)
                r.push(a);
            else
                helper(a, i + 1);
        }
    }
    helper([], 0);
    return r;
}

function getExistingArraysFromCombination(array = []) {
    const object_arr = array.map((a) => {
        return {
            "Length": a[0],
            "Color": a[1],
            Size: a[2]
        }
    })
    console.log("trans: ",object_arr)
    return object_arr.filter((a)=> arr.every(()=>))
}

const selected = { Color: "Blue", Length: "500' Reel", "Size": "3/8\" O.D." }
const comb = makeCombination(selected)
console.log(comb)
const avail_comb = getExistingArraysFromCombination(comb)
console.log(avail_comb)

// console.log("comb is ", comb, "avail is:", avail_comb, avail_comb.length)
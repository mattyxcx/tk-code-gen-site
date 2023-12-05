const axios = require("axios")

async function loopUntilFound(dept,price,page) {
    await axios({
        method: 'get',
        url: `https://amplified-tin-pamphlet.glitch.me/search/getsku/null/${dept}/${price}/${page}`,
    })
    .then(async function(r) {
        for (let i = 0; i <= r.data.length; i++) {
            const tbl = r.data[i].document
            if (tbl.code.substring(0,2) === dept) {
                const d = tbl.code.substring(0,2)
                const s = tbl.code.substring(2)
                var p = parseFloat(price) * 100
                const amtNeeded = 6-price.length
                var zeros = ""; for (let i = 0; i <= amtNeeded; i++) { zeros += "0" }
                p = zeros + p
                document.getElementById("result").innerHTML = "Found Style #: " + s
                document.getElementById("barcode").src = `https://barcodeapi.org/api/128/${d}10${s}${p}`;
                break
            }
            if (i === r.data.length) { loopUntilFound(dept,price,page+1) }
        }
    });
}

async function search() {
    const dept = document.getElementById("dept").value
    const price = document.getElementById("price").value
    document.getElementById("result").innerHTML = "Searching..."
    document.getElementById("barcode").src = ``
    loopUntilFound(dept,price,1)
}

function clear() {
    document.getElementById("dept").innerHTML = ""
    document.getElementById("price").innerHTML = ""
}

document.getElementById("submit").addEventListener("click", search);
document.getElementById("clear").addEventListener("click", clear);
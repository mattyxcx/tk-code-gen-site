const deps = {
  "10": "https://tkmaxxfinder.com/api/home/travel",
  "14": "https://tkmaxxfinder.com/api/kids/boys",
  "15": "https://tkmaxxfinder.com/api/women/mod-box",
  "16": "https://tkmaxxfinder.com/api/beauty/all",
  "26": "https://tkmaxxfinder.com/api/kids/shoes",
  "27": "https://tkmaxxfinder.com/api/men/shoes",
  "28": "https://tkmaxxfinder.com/api/beauty/electrical",
  "34": "https://tkmaxxfinder.com/api/men/accessories",
  "38": "https://tkmaxxfinder.com/api/men/shoes",
  "39": "https://tkmaxxfinder.com/api/women/shoes",
  "40": "https://tkmaxxfinder.com/api/home/furnishings",
  "41": "https://tkmaxxfinder.com/api/kids/boys",
  "42": "https://tkmaxxfinder.com/api/beauty/all",
  "43": "https://tkmaxxfinder.com/api/kids/global-label",
  "44": "https://tkmaxxfinder.com/api/home/stationery",
  "45": "https://tkmaxxfinder.com/api/kids/toys",
  "46": "https://tkmaxxfinder.com/api/kids/toys",
  "58": "https://tkmaxxfinder.com/api/home/bathroom",
  "59": "https://tkmaxxfinder.com/api/home/bedding",
  "60": "https://tkmaxxfinder.com/api/home/bedding",
  "61": "https://tkmaxxfinder.com/api/home/bedding",
  "62": "https://tkmaxxfinder.com/api/home/bathroom",
  "63": "https://tkmaxxfinder.com/api/kids/girls",
  "64": "https://tkmaxxfinder.com/api/home/stationery",
  "65": "https://tkmaxxfinder.com/api/home/furnishings",
  "66": "https://tkmaxxfinder.com/api/home/furnishings",
  "67": "https://tkmaxxfinder.com/api/kids/toys",
  "68": "https://tkmaxxfinder.com/api/home/furniture",
  "69": "https://tkmaxxfinder.com/api/home/furniture",
  "71": "https://tkmaxxfinder.com/api/kids/girls",
  "72": "https://tkmaxxfinder.com/api/kids/baby",
  "73": "https://tkmaxxfinder.com/api/kids/girls",
  "74": "https://tkmaxxfinder.com/api/kids/toys",
  "75": "https://tkmaxxfinder.com/api/kids/baby",
  "78": "https://tkmaxxfinder.com/api/home/kitchen",
  "79": "https://tkmaxxfinder.com/api/home/kitchen",
  "80": "https://tkmaxxfinder.com/api/home/kitchen",
  "81": "https://tkmaxxfinder.com/api/home/kitchen",
  "82": "https://tkmaxxfinder.com/api/home/furnishings",
  "83": "https://tkmaxxfinder.com/api/home/furnishings",
  "84": "https://tkmaxxfinder.com/api/home/furnishings",
  "85": "https://tkmaxxfinder.com/api/home/kitchen",
  "86": "https://tkmaxxfinder.com/api/home/furnishings",
  "87": "https://tkmaxxfinder.com/api/home/pets",
  "88": "https://tkmaxxfinder.com/api/home/furnishings",
  "89": "https://tkmaxxfinder.com/api/home/furnishings",
  "90": "https://tkmaxxfinder.com/api/home/furnishings",
  "91": "https://tkmaxxfinder.com/api/home/furnishings",
}

let prevSearch = null
let dept = null
let price = null
let type = ""
let used = {}
const barcode = document.getElementById("barcode")
const result = document.getElementById("result")
const amount = document.getElementById("amount")
const photo = document.getElementById("result-image")
const resultsBox = document.getElementById("results-box")
const resultBrand = document.getElementById("result-brand")
const resultLink = document.getElementById("result-link")
const sku = document.getElementById("sku")
const inputDept = document.getElementById("dept")
const inputPrice = document.getElementById("price")
const random = document.getElementById("rand")

function setup(tbl) {
  const d = tbl.code.substring(0, 2);
  const s = tbl.code.substring(2);
  var p = Math.round(parseFloat(price) * 100);
  const amtNeeded = 5 - p.toString().length;
  var zeros = "";
  for (let i = 0; i <= amtNeeded; i++) { zeros += "0"; }
  p = zeros + p;
  resultsBox.className = `results max-width-500`
  result.innerHTML =  "Match Found"
  barcode.src = `https://barcode.tec-it.com/barcode.ashx?data=${d}10${s}${p}`;
  barcode.className = `barcode`;
  photo.src = tbl.image.url;
  photo.className = `result-image`;
  random.className = `btn`
  resultBrand.innerHTML = tbl.brandName;
  resultLink.innerHTML = tbl.label;
  resultLink.href = "https://www.tkmaxx.com/" + tbl.url;
  sku.innerHTML = `SKU: ${d} 10 ${s}`
}

function getLegacyCount(r) {
  let count = 0
  for (let i = 0; i < r.length; i++) {
      if (r[i] !== undefined) {
          if (r[i].document.code.substring(0, 2) === dept) {
              count += 1
          }
      }
  }
  return count
}

function getNewCount(r) {
  let count = 0
  for (let i = 0; i < r.results.length; i++) {
      if (r.results[i] !== undefined) {
          if (r.results[i].price.value.toString() === price) {
              if (r.results[i].code.substring(0, 2) === dept) {
                  count += 1
              }
          }
      }
  }
  return count
}

function randomise(r) {
  for (let i = 0; i < r.length; i++) {
      if (Object.keys(used).length === r.length) { used = {} }
      if (r[i] !== undefined) {
          const tbl = r[i].document;
          if (used[i] !== tbl) {
              used[i] = tbl
              if (tbl.code.substring(0, 2) === dept) {
                  setup(tbl)
                  break
              }
          }
      } else {
          result.innerHTML = "No Match Found";
          amount.innerHTML = "</3";
          break
      }
  }
}

function newRandomise(r) {
  for (let i = 0; i < r.results.length; i++) {
      if (r.results[i] !== undefined) {
          const tbl = r.results[i];
          if (Object.keys(used).length === r.results.length) { used = {} }
          if (used[i] !== tbl) {
              used[i] = tbl
              if (tbl.price.value.toString() === price) {
                  if (tbl.code.substring(0, 2) === dept) {
                      setup(tbl)
                      break
                  }
              }
          }
      } else {
          result.innerHTML = "No Match Found";
          amount.innerHTML = "</3";
          break
      }
  }
}

async function newSearch(_dept,_price,page) {
  fetch("https://amplified-tin-pamphlet.glitch.me/proxy", {method: "POST",body: JSON.stringify({url:`${deps[_dept]}/?page=${page}&sort=price-asc`}),headers: {"Content-type": "application/json; charset=UTF-8"}})
  .then((response) => response.json())
  .then(async function(r) {
      amount.innerHTML = `Indexing ${r.pagination.totalNumberOfResults} D${_dept} products [Page ${(page+1).toString()}/${r.pagination.numberOfPages+1}]`
      if (r.results === undefined) { 
          result.innerHTML = "No Match Found";
          amount.innerHTML = "</3";
          return
      }
      prevSearch = r
      dept = _dept
      price = _price
      used = {}
      type = "new"
      let issetup = false
      for (let i = 0; i < r.results.length; i++) {
          if (r.results[i] !== undefined) {
              if (r.results[i].price.value.toString() === _price) {
                  if (r.results[i].code.substring(0, 2) === dept) {
                      used[i] = r.results[i]
                      setup(r.results[i])
                      issetup = true
                      amount.innerHTML = `${getNewCount(r)} matching SKUs`
                      break
                  }
              }
          }
      }
      if (issetup === false) { newSearch(_dept,_price,page+1) }
  }).catch(function() {
      result.innerHTML = "No Match Found";
      amount.innerHTML = "</3";
  })
}

async function find(_dept, _price) {
  if (deps[_dept] !== undefined) {
      newSearch(_dept,_price,0)
  } else {
      await fetch(`https://amplified-tin-pamphlet.glitch.me/search/getsku/${_dept}/${_price}`)
      .then((response) => response.json())
      .then(async function(r) {
          prevSearch = r
          dept = _dept
          price = _price
          used = {}
          type = "old"
          if (r[0].document === undefined) {
              result.innerHTML = "No Match Found";
              amount.innerHTML = "</3>";
              return
          }
          randomise(r, dept, price)
          amount.innerHTML = `${getLegacyCount(r)} matching SKUs`
      }).catch(function() {
          result.innerHTML = "No Match Found";
          amount.innerHTML = "</3";})
  }
}


function clear(b) {
  if (b !== true) {
      inputDept.value = "";
      inputPrice.value = "";
  }
  result.innerHTML = "";
  amount.innerHTML = ""
  barcode.src = ` `;
  random.className = `btn invis`
  barcode.className = `barcode invis`;
  photo.src = ` `;
  photo.className = `result-image invis`;
  resultBrand.innerHTML = ""
  resultLink.innerHTML = ""
  resultsBox.className = `results max-width-500 invis`
  sku.innerHTML = ""
}

async function search() {
  clear(true)
  result.innerHTML = "Searching...";
  await find(inputDept.value, inputPrice.value, 1)
}

document.getElementById("submit").addEventListener("click", search);
document.getElementById("clear").addEventListener("click", clear);
random.addEventListener("click", function () { if (type === "old") { randomise(prevSearch) } else { newRandomise(prevSearch) } });
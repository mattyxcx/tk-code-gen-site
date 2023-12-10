const deps = {
  "01": "women/clothing/c/01020000",
  "02": "unisex/sports+fitness-accessories/c/09030302",
  "03": "women/clothing/tops/c/01020300",
  "04": "women/clothing/tops/c/01020300",
  "05": "women/clothing/knitwear/c/01020500",
  "06": "women/clothing/jeans/c/01020700",
  "07": "women/activewear/outdoor/c/01030500",
  "08": "men/clothing/c/02020000",
  "09": "women/clothing/c/01020000",
  "10": "home/hobbies+leisure/luggage+travel-accessories/c/04100200",
  "11": "women/accessories/handbags/c/01040200",
  "12": "womens-gold-label/c/01090000",
  "13": "women/accessories/sunglasses+optical-frames/c/01031000",
  "14": "kids+toys/kids-clothing/kids-sportswear/c/03010004",
  "15": "womens-mod-box/c/01110000",
  "16": "women/beauty/body+bath/c/01060600",
  "17": "women/activewear/gym+workout/c/01030300",
  "18": "women/accessories/purses/c/01040400",
  "19": "women/accessories/hats-scarves+gloves/c/01040500",
  "20": "men/clothing/underwear+socks/c/02030300",
  "21": "men/clothing/c/02020000",
  "22": "men/activewear/gym+workout/c/02040300",
  "23": "men/clothing/suits+tailoring/c/02021500",
  "24": "men/clothing/jackets+coats/c/02020700",
  "25": "women/shoes/c/01050000",
  "26": "kids+toys/shoes/c/03060000",
  "27": "men/shoes/c/02050000",
  "28": "women/beauty/beauty-accessories/hair+beauty-electricals/c/01060703",
  "29": "men/clothing/c/02020000",
  "30": "women/clothing/dresses/c/01020200",
  "31": "men/activewear/outdoor/c/02040500",
  "32": "men/clothing/shirts/formal-shirts/c/02020404",
  "33": "men/clothing/jeans/c/02020800",
  "34": "men/accessories/hats-gloves+scarves/c/02030400",
  "35": "women/clothing/jackets+coats/c/01020400",
  "36": "home/hobbies+leisure/tech+gadgets/c/04100700",
  "37": "mens-gold-label/c/02090000",
  "38": "men/shoes/c/02050000",
  "39": "women/shoes/c/01050000",
  "40": "home/furnishings+home-accessories/home-accessories/artificial-plants+plant-pots/c/04040650",
  "41": "kids+toys/kids-clothing/boys/c/03040000",
  "42": "women/beauty/c/01060000",
  "43": "kids-goldlabel/kids-designer-gold-label/c/03121100",
  "44": "home/cards-gift-bags+wrap/c/06080100",
  "45": "kids+toys/toys+books/toys/c/03052000",
  "46": "kids+toys/toys+books/kids-books/c/03050401",
  "47": "men/clothing/shirts/casual-shirts/c/02020403",
  "48": "men/clothing/jumpers+cardigans/c/02020500",
  "49": "men/clothing/trousers+chinos/c/02020900",
  "50": "women/clothing/lingerie+nightwear/pyjamas/c/01021102",
  "51": "women/clothing/swimwear+beachwear/c/01021000",
  "52": "women/clothing/lingerie+nightwear/c/01021100",
  "53": "women/clothing/c/01020000",
  "54": "women/clothing/c/01020000",
  "55": "women/clothing/lingerie+nightwear/socks+tights/c/01021103",
  "56": "women/clothing/trousers-skirts+shorts/trousers/c/01020801",
  "57": "women/clothing/c/01020000",
  "58": "home/bed+bath/bathroom-accessories/c/04020700",
  "59": "home/bed+bath/bedding/duvets-pillows+protectors/c/04020200",
  "60": "home/bed+bath/bedding/c/04020150",
  "61": "home/furnishings+home-accessories/home-furnishings/cushions/c/04120100",
  "62": "home/bed+bath/towels+bath-mats/towels/c/04020503",
  "63": "kids+toys/kids-clothing/girls/girls-dresses/c/03030200",
  "64": "home/stationery+books/c/04100500",
  "65": "home/furnishings+home-accessories/home-accessories/decorative-accessories/decorative-glassware/c/04040501",
  "66": "home/furnishings+home-accessories/home-accessories/wall-art/c/04040700",
  "67": "kids+toys/new-in-kids+toys/c/03010000",
  "68": "home/furniture/c/04040900",
  "69": "home/furniture/c/04040900",
  "70": "women/accessories/jewellery/c/01040600",
  "71": "kids+toys/kids-clothing/girls/c/03030000",
  "72": "kids+toys/baby+nursery/nursery+baby-essentials/c/03020500",
  "73": "kids+toys/kids-clothing/kids-sportswear/c/03010004",
  "74": "kids+toys/kids-accessories/kids-accessories/c/03090001",
  "75": "kids+toys/baby+nursery/baby-clothing/c/03020400",
  "76": "women/accessories/jewellery/c/01040600",
  "77": "womens-gold-label/gold-label-shoes/c/01050800",
  "78": "home/kitchen+dining/cookware/c/04030150",
  "79": "home/kitchen+dining/kitchen-cleaning+utility/c/04031000",
  "80": "home/home-rooms/dining-room/c/04050400",
  "81": "home/gourmet-food/c/04130000",
  "82": "home/furnishings+home-accessories/home-accessories/candles+home-fragrances/c/04040200",
  "83": "home/furnishings+home-accessories/home-accessories/decorative-accessories/c/04040500",
  "84": "home/garden/c/04060000",
  "85": "home/home-rooms/kitchen/c/04050300",
  "86": "home/furnishings+home-accessories/home-accessories/lighting/c/04040800",
  "87": "home/pets/c/04050800",
  "88": "home/furnishings+home-accessories/home-furnishings/throws+blankets/c/04020400",
  "89": "home/furnishings+home-accessories/home-accessories/storage-boxes+baskets/c/04041100",
  "90": "home/furnishings+home-accessories/home-furnishings/rugs+door-mats/c/04120500",
  "91": "christmas/c/07000000",
  "92": "mens-mod-box/c/02100000",
  "93": "en/home/c/04000000",
  "94": "gifts/gifts-that-do-good/charity-gifts/c/06040905",
  "95": "en/home/c/04000000",
  "96": "en/home/c/04000000",
  "97": "en/home/c/04000000",
  "98": "en/home/c/04000000",
  "99": "en/home/c/04000000",
}

let prevSearch = null
let dept = null
let price = null
let used = {}
const barcode = document.getElementById("barcode")
const result = document.getElementById("result")
const resultBrand = document.getElementById("result-brand")
const resultLink = document.getElementById("result-link")
const inputDept = document.getElementById("dept")
const inputPrice = document.getElementById("price")
const random = document.getElementById("rand")

function randomise(r) {
  for (let i = 0; i < r.length; i++) {
      if (r[i] !== undefined) {
          const tbl = r[i].document;
          if (Object.keys(used).length === r.length) { used = {} }
          if (used[i] !== tbl) {
              used[i] = tbl
              if (tbl.code.substring(0, 2) === dept) {
                  const d = tbl.code.substring(0, 2);
                  const s = tbl.code.substring(2);
                  var p = Math.round(parseFloat(price) * 100);
                  const amtNeeded = 5 - p.toString().length;
                  var zeros = "";
                  for (let i = 0; i <= amtNeeded; i++) { zeros += "0"; }
                  p = zeros + p;
                  result.innerHTML = "Found Style #: " + s;
                  barcode.src = `https://barcode.tec-it.com/barcode.ashx?data=${d}10${s}${p}`;
                  barcode.className = `barcode`;
                  random.className = `btn small-btn`
                  resultBrand.innerHTML = r[i].document.brandName;
                  resultLink.innerHTML = r[i].document.label;
                  resultLink.href = "https://www.tkmaxx.com/" + r[i].document.url;
                  break
              }
          }
      } else {
          result.innerHTML = "No results :(";
          break
      }
  }
}

async function find(_dept, _price) {
  var fb = `${deps[_dept]}/autoLoad?sort=price-asc&facets=priceValue:${_price}`
  fetch(`https://www.tkmaxx.com/uk/en/${fb}`)
      .then((response) => response.json())
      .then(async function (r) {
          r = r.data.results
          prevSearch = r
          dept = _dept
          price = _price
          used = {}
          if (r[0].document === undefined) {
              result.innerHTML = "No results :("
              return
          }
          randomise(r, dept, price)
      })
      .catch(function () {
          result.innerHTML = "No results :(";
      })
}

function clear(b) {
  if (b !== true) {
      inputDept.value = "";
      inputPrice.value = "";
  }
  result.innerHTML = "";
  barcode.src = ` `;
  random.className = `btn small-btn invis`
  barcode.className = `barcode invis`;
  resultBrand.innerHTML = ""
  resultLink.innerHTML = ""
}

async function search() {
  clear(true)
  result.innerHTML = "Searching...";
  await find(inputDept.value, inputPrice.value, 1)
}

document.getElementById("submit").addEventListener("click", search);
document.getElementById("clear").addEventListener("click", clear);
random.addEventListener("click", function () { randomise(prevSearch) });

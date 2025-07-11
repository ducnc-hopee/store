
export const brands = [
  "Coaster Furniture",
  "Fusion Dot High Fashion",
  "Unique Furniture Restor",
  "Dream Furniture Flipping",
  "Young Repurposed",
  "Green DIY furniture",
];

export const ratings = [
  { stars: 4, count: 2341 },
  { stars: 3, count: 1726 },
  { stars: 2, count: 258 },
  { stars: 1, count: 25 },
];

export const categories = [
  "PrestaShop",
  "Magneto",
  "BigCommerce",
  "osCommerce",
  "3dcart",
  "Bags",
  "Accessories",
  "Jewellery",
  "Watches",
];

export const priceFilter =[
  {label: "$0.00 - $150.00", min:0, max: 150},
  {label: "$150.00 - $350.00", min: 151, max: 350},
  {label: "$350.00 - $504.00", min: 351, max: 504},
  {label: "$450.00+", min: 451, max: Infinity}
]

export const colors = [
 { name:"Blue", hex:"#5E37FF "},
 { name:"Orange", hex:"#FF9437 "},
 { name:"Brown", hex:"#FFBF95"},
 { name:"Green", hex:"#33D221"},
 { name:"Purple", hex:"#E248FF"},
 { name:"Sky", hex:"#26CBFF"},
]

export const checkboxColors = {
  rating: {
    unchecked: "#FFF6DA",
    checked: "#FFCC2E",
  },
  category: {
    unchecked: "#FFDBF1", // light pink
    checked: "#FF3EB2",   // dark pink
  },
  brand:{
    unchecked:"#E5E0FC", //light blue
    checked: "#603EFF", // dark blue
  }
};
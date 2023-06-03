import products from "@/utils/data/products"
const data = products.map((cat) => cat.category)
const filterCategory = data.filter((cat, i) => data.indexOf(cat) === i)
export const filterdCategory=['all',...filterCategory]
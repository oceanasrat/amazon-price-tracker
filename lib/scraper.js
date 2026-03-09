import axios from "axios"
import * as cheerio from "cheerio"

export async function getAmazonPrice(url){

const { data } = await axios.get(url,{
headers:{
"User-Agent":
"Mozilla/5.0"
}
})

const $ = cheerio.load(data)

const title = $("#productTitle").text().trim()

const price =
$("#priceblock_ourprice").text() ||
$("#priceblock_dealprice").text()

return {
title,
price: parseFloat(price.replace("$",""))
}

}

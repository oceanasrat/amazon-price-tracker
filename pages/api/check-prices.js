import { supabase } from "../../lib/supabase"
import { getAmazonPrice } from "../../lib/scraper"

export default async function handler(req,res){

const { data:products } = await supabase
.from("products")
.select("*")

for(const product of products){

const result = await getAmazonPrice(product.url)

await supabase
.from("products")
.update({current_price:result.price})
.eq("id",product.id)

await supabase
.from("price_history")
.insert([{
product_id:product.id,
price:result.price
}])

}

res.json({status:"done"})

}

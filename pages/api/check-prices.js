import { supabase } from "../../lib/supabase"
import { getAmazonPrice } from "../../lib/scraper"

export default async function handler(req, res) {
  try {

    const { data: products, error } = await supabase
      .from("products")
      .select("*")

    if (error) {
      console.error("Supabase fetch error:", error)
      return res.status(500).json({ error })
    }

    for (const product of products) {

      try {

        const result = await getAmazonPrice(product.url)

        await supabase
          .from("products")
          .update({
            current_price: result.price,
            title: result.title
          })
          .eq("id", product.id)

        await supabase
          .from("price_history")
          .insert([
            {
              product_id: product.id,
              price: result.price
            }
          ])

      } catch (scrapeError) {
        console.error("Scraping failed:", scrapeError)
      }

    }

    res.json({ status: "done", products_checked: products.length })

  } catch (err) {

    console.error("Server error:", err)
    res.status(500).json({ error: err.message })

  }
}

import { supabase } from "../../lib/supabase"

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { url } = req.body

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        url: url,
        title: null,
        current_price: null
      }
    ])

  if (error) {
    return res.status(500).json(error)
  }

  res.json({ message: "Product added", data })
}

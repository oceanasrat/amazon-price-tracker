import { supabase } from "../../lib/supabase"

export default async function handler(req,res){

const { url } = req.body

const { data,error } = await supabase
.from("products")
.insert([{ url }])

if(error) return res.status(500).json(error)

res.json(data)

}

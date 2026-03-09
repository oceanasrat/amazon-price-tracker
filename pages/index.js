import { useState } from "react"

export default function Home(){

const [url,setUrl] = useState("")

async function submit(){

await fetch("/api/add-product",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

alert("Product added")

}

return(

<div style={{padding:40}}>

<h1>Amazon Price Tracker</h1>

<input
placeholder="Paste Amazon URL"
value={url}
onChange={(e)=>setUrl(e.target.value)}
/>

<button onClick={submit}>
Track Price
</button>

</div>

)

}

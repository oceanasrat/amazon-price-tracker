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

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>Amazon Price Tracker</h1>

<input
style={{width:"400px",padding:"10px"}}
placeholder="Paste Amazon URL"
value={url}
onChange={(e)=>setUrl(e.target.value)}
/>

<button
style={{marginLeft:"10px",padding:"10px"}}
onClick={submit}
>
Track Price
</button>

</div>

)

}

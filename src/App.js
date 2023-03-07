import React,{useState,useEffect} from 'react'
import EmojiDtata from './emoji.json'
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
   const newData = EmojiDtata.filter((emoji)=> emoji.title.toLowerCase().includes(search.toLowerCase()));
   setData(newData);

  },[search])
  return (
    <div>
      <center>
        <h1> Emoji Search</h1>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}

    </div>
  )
}

export default App



import React,{useState} from 'react'
import validator from 'validator'


export default function Textform() {
    const [text, settext] = useState("Enter text here");
    const handleonchange=(event)=>{
        settext(event.target.value);
        
    }
    const handleonupper=()=>{   
        let newtext= text.toUpperCase();
        settext(newtext);

    }
    const handleonlower=()=>{   
      let newtext= text.toLowerCase();
      settext(newtext);}
    const handleonclear=()=>{
            let newt="";
            settext(newt);
    }

  return (

    <div className="form-floating">
        <h1 align="center">Enter text here</h1>
  <textarea onChange={handleonchange} rows="8" value={text} className="form-control " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
  <button disabled={text.length==0} onClick={handleonupper} className="btn btn-primary mx-1" my="3">ToUpperCase</button>
  <button disabled={text.length==0} onClick={handleonlower} className="btn btn-primary mx-1" my="3">ToLowerCase</button>
  <button disabled={text.length==0} onClick={handleonclear} className="btn btn-primary mx-1">Clear Text</button>
  <h1>Text Preview</h1> 
  <p>Words {text.split(/\s+/).filter((element)=>{ 
return element.length!==0;
  }).length} Characters {text.length}</p>
</div>

  )
}

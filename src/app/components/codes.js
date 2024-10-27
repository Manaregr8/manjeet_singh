"use client";
export default function Codes({title, data}){
    const handlecopy = ()=>{
        navigator.clipboard.writeText(data).then(()=>alert("data copied to clipboard!")).catch((err)=>alert("error copying data" + err));
    }
    
    return (
        <div className="codesContainer">
        <div className="codesTitle">
          <p className="mono-font">{title}</p>
          <p className="mono-font margin-left copy" onClick={handlecopy}>copy</p>
        </div>
        <div className="codes">
        <p className="mono-font">{data}</p>
        </div>
      </div>
    );
}
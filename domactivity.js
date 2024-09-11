document.addEventListener("DOMContentLoaded", ()=>{
    let data = fetch("paintings.json");
    const jsondata = JSON.parse(data);
    console.log (jsondata);
});
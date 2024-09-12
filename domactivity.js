document.addEventListener("DOMContentLoaded", ()=>{
    const jsondata = JSON.parse(content);
    const paintinglist = document.querySelector(#paintings ul); //this gets the list element under the paintings id section of html
    function thumbnails(){
        for(element of jsondata){ //for every element in the data array...
            const listitem = document.createElement('li'); //creates a list item to go into the list above; got help from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
            const image = document.createElement('img');
            image.src = element.id;
            image.alt = element.title;
            
        }
    }
});
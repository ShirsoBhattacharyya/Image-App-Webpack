function appendImage(data,container){
    data.forEach(({urls:{small:image}})=> {
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=image;
       div.append(img);
       container.append(div); 
    });
}
export default appendImage;
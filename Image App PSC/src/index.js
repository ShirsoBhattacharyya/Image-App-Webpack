import navbar from '../components/navbar.js';
import '../styles/navbar.css';
import fetchSearchData from '../components/fetchSearch.js';
import appendImage from '../components/appendImage';
import '../styles/container.css';
let navbar_div=document.querySelector("#navbar");
navbar_div.innerHTML=navbar();

let btn=document.querySelector("#btn");
btn.addEventListener("click",SearchData)
async function SearchData(){
    let query=document.querySelector("#query").value;
    let data=await fetchSearchData(query);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}
let category1=document.querySelector("#food");
category1.addEventListener("click",getData1);
let query1=category1.innerText;
async function getData1(){
    let data=await fetchSearchData(query1);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}
let category2=document.querySelector("#furnitures");
category2.addEventListener("click",getData2);
let query2=category2.innerText;
async function getData2(){
    let data=await fetchSearchData(query2);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}
let category3=document.querySelector("#nature");
category3.addEventListener("click",getData3);
let query3=category3.innerText;
async function getData3(){
    let data=await fetchSearchData(query3);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}
let category4=document.querySelector("#pets");
category4.addEventListener("click",getData4);
let query4=category4.innerText;
async function getData4(){
    let data=await fetchSearchData(query4);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}
let category5=document.querySelector("#cities");
category5.addEventListener("click",getData5);
let query5=category5.innerText;
async function getData5(){
    let data=await fetchSearchData(query5);
    console.log(data.data.results);

    let container=document.querySelector("#container");
    container.innerHTML=null;
    appendImage(data.data.results,container);
}

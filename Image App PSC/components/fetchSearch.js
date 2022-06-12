import axios from "axios";
async function fetchSearchData(query){
    // let query=document.querySelector("#query").value;
    const url=`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=sq21OF60EmSH9Yz78wMA-aCxVrh7RreIy9QAnxkPcds`;
    let search=await axios.get(url);
    return search;

}
export default fetchSearchData;

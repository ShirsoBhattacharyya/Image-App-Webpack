function navbar(){
    return  `
        <div id="search_bar">
            <input type="text" placeholder="Search your favourite Images" id="query">
            <button id="btn">Search here</button>
        </div>
        <div id="categories">
            <div><p id="food">Food</p></div>
            <div><p id="furnitures">Furnitures</p></div>
            <div><p id="nature">Nature</p></div>
            <div><p id="pets">Pets</p></div>
            <div><p id="cities">Cities</p></div>
            <div><button>Login</button></div>
            <div><button id="register">Register</button></div>
        </div>
    `
}
export default navbar;
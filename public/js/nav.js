const createNav = () =>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
        <img src="img/img/dark-logo.png" class="brand-logo" alt="no internet" />
        <div class="nav-items">
        <div class="search">
            <input
            type="text"
            class="search-box"
            placeholder="search brand,product"
            />
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="../public/img/img/user.png" alt="no internet connection"></a>
        <a href="#"><img src="../public/img/img/cart.png" alt="no internet connection"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-iten"><a href="#" class="link">home</a></li>
        <li class="link-iten"><a href="#" class="link">men</a></li>
        <li class="link-iten"><a href="#" class="link">women</a></li>
        <li class="link-iten"><a href="#" class="link">kids</a></li>
        <li class="link-iten"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
}

createNav();
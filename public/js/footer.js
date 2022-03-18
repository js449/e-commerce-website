const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/img/light-logo.png" class="logo" alt="" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
      </ul>

      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
    doloremque minus temporibus quaerat recusandae ratione tenetur quae
    minima provident iste Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Quibusdam delectus ipsam ratione ut nulla ipsum hic incidunt quas
    soluta blanditiis..
  </p>
  <p class="info">
    support emails - help@clothing.co.nz, customersupport@clothing.co.nz
  </p>
  <p class="info">tel - 0800 122 233 355, 0800 243 353 455</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">terms & conditions</a>
      <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
      <a href="#" class="social-link">instagram</a>
      <a href="#" class="social-link">facebook</a>
      <a href="#" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}
createFooter();
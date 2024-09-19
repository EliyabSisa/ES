const buttonC = document.getElementById('btnChair');
const buttonL = document.getElementById('btnLamon');
const buttonJ = document.getElementById('btnJoke');
const buttonP = document.getElementById('btnPs5');
const buttonR = document.getElementById('btnRed');
const buttonS = document.getElementById('btnShoe');

// Store HTML templates for cart items
const clicked = {
  chair: `
    <div id="cart-chair" class="cart-item" data-price="100">
      <img src="image/Rechair.jpg" alt="chair" class="imgg">
      <span class="spans">$100</span>
      <input type="number" id="input-el-chair" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`,
  lamon: `
    <div id="cart-lamon" class="cart-item" data-price="0.05">
      <img src="image/Lamon.2re.jpg" alt="lamon" class="imgg">
      <span class="spans">$0.05</span>
      <input type="number" id="input-el-lamon" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`,
  joke: `
    <div id="cart-joke" class="cart-item" data-price="90">
      <img src="image/pexels-ishak-ektiren-327147089-27424789.jpg" alt="JOKE" class="imgg">
      <span class="spans">$90</span>
      <input type="number" id="input-el-joke" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`,
  ps5: `
    <div id="cart-ps5" class="cart-item" data-price="600">
      <img src="image/REPS5.jpg" alt="ps5" class="imgg">
      <span class="spans">$600</span>
      <input type="number" id="input-el-ps5" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`,
  redshirt: `
    <div id="cart-redshirt" class="cart-item" data-price="10">
      <img src="image/REred shirt.jpg" alt="shirt" class="imgg">
      <span class="spans">$10</span>
      <input type="number" id="input-el-redshirt" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`,
  shoe: `
    <div id="cart-shoe" class="cart-item" data-price="150">
      <img src="image/shoe.jpg" alt="shoes" class="imgg">
      <span class="spans">$150</span>
      <input type="number" id="input-el-shoe" value="1">
      <button class="btn-remove">REMOVE</button>
    </div>`
};

function setupEventListeners() {
  buttonC.addEventListener('click', () => handleItemAdd('chair'));
  buttonL.addEventListener('click', () => handleItemAdd('lamon'));
  buttonJ.addEventListener('click', () => handleItemAdd('joke'));
  buttonP.addEventListener('click', () => handleItemAdd('ps5'));
  buttonR.addEventListener('click', () => handleItemAdd('redshirt'));
  buttonS.addEventListener('click', () => handleItemAdd('shoe'));
}

function handleItemAdd(itemName) {
  let itemId = `cart-${itemName}`;
  let itemHTML = clicked[itemName];
  let cartItem = document.getElementById(itemId);

  if (!cartItem) {
    // Item is not in the cart, add it
    document.getElementById('cart-container').insertAdjacentHTML('beforeend', itemHTML);//this one helps to not re-rendering 
    addRemoveListener(); // Add remove button functionality
  } else {
    // Item is already in the cart, increment its quantity
    const inputEl = cartItem.querySelector('input');
    inputEl.value = parseInt(inputEl.value) + 1;
  }

  updateTotal();
}

function addRemoveListener() {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      updateTotal();
    });
  });
}
function updateTotal() {
  let total = 0;
  
  const cartItems = document.querySelectorAll('.cart-item');

  cartItems.forEach(item => {
    const quantity = parseInt(item.querySelector('input').value);
    const price = parseFloat(item.getAttribute('data-price'));
    total += quantity * price;
  
  });

  document.querySelector('.total-el').innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function init() {
  setupEventListeners();
  
}

init();
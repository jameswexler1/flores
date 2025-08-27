// Initialize small interactivity: search, category filter, AOS init already called in partials.
(function(){
  // Simple client-side search using Fuse.js
  var productsEl = document.getElementById('products-grid');
  if (!productsEl) return;

  // Build product list from markup
  var productNodes = Array.from(productsEl.querySelectorAll('.product-card'));
  var products = productNodes.map(function(el){
    return {
      id: el.querySelector('.snipcart-add-item').getAttribute('data-item-id'),
      title: el.querySelector('h3').innerText,
      description: el.querySelector('.excerpt').innerText,
      category: el.getAttribute('data-category'),
      element: el
    };
  });

  var fuse = new Fuse(products, { keys: ['title','description','category'], threshold: 0.3 });

  var input = document.getElementById('search-input');
  var category = document.getElementById('category-filter');

  function render(list){
    productNodes.forEach(function(n){ n.style.display = 'none'; });
    list.forEach(function(p){ p.element.style.display = ''; });
  }

  input && input.addEventListener('input', function(e){
    var q = e.target.value.trim();
    if (!q) {
      // reset or apply category filter
      if (category && category.value) render(products.filter(function(p){ return p.category === category.value }));
      else render(products);
      return;
    }
    var r = fuse.search(q).map(function(i){ return i.item; });
    render(r);
  });

  category && category.addEventListener('change', function(e){
    var val = e.target.value;
    if (!val) render(products);
    else render(products.filter(function(p){ return p.category === val }));
  });

})();
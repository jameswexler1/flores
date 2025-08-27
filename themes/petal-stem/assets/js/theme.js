// Theme JS: mobile nav toggle, client search (fetch static JSON), simple enhancements
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', function(){ links.style.display = links.style.display === 'flex' ? 'none' : 'flex'; });
  }

  // Client-side search: fetch static JSON index at /search/products.json
  var searchInput = document.getElementById('search-input');
  var productsGrid = document.getElementById('products-grid');
  if (searchInput && productsGrid){
    fetch('/search/products.json').then(function(r){ return r.json() }).then(function(data){
      // very small client filter (no Fuse dependency required here)
      searchInput.addEventListener('input', function(e){
        var q = e.target.value.trim().toLowerCase();
        var cards = productsGrid.querySelectorAll('.product-card');
        if (!q){ cards.forEach(c=>c.style.display=''); return; }
        cards.forEach(function(card){
          var name = card.querySelector('h3').innerText.toLowerCase();
          var desc = card.querySelector('.excerpt').innerText.toLowerCase();
          var ok = name.includes(q) || desc.includes(q);
          card.style.display = ok ? '' : 'none';
        });
      });
    }).catch(function(){ /* ignore */ });
  }
});

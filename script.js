/* =============================================================
   DAREFIT — YOUR PRODUCTS
   Edit ONLY this section to add/change jerseys.

   HOW TO USE:
   1. Put your image files in the same folder as index.html
      (or inside a subfolder like "images/")
   2. For each jersey, fill in:
      - image : filename e.g. "realmadrid.jpg" or "images/realmadrid.jpg"
      - club  : team or country name (small text above the jersey title)
      - name  : jersey title (the main product name shown on the card)
      - price : your selling price (number only, no # sign)
      - old   : original/crossed-out price — set to 0 if there is no discount
      - tag   : "new"     → shows blue  NEW IN  badge
                "vintage" → shows gold  VINTAGE badge
                ""        → no badge
      - cat   : category — must be exactly one of:
                "football" | "basketball" | "nfl" | "vintage" | "national"

   TO ADD A NEW JERSEY:
     Copy one block from { to }, paste it at the bottom of the list,
     give it the next id number, then fill in your details.

   TO REMOVE A JERSEY:
     Delete its entire block from { to },
============================================================= */

const WA_NUMBER = '2348060419671'; // ← YOUR WhatsApp number (no + sign, e.g. 2348012345678)

const jerseys = [

  /* ── FOOTBALL ────────────────────────────────────────────────── */
  {
    id    : 1,
    image : 'images/realmadrid-home.jpeg',   // ← put your image filename here
    club  : 'Real Madrid',
    name  : 'Home Jersey 2024/25',
    price : 14000,
    old   : 16000,                             // ← set to 0 if no discount
    tag   : 'new',                          // "new" | "vintage" | ""
    cat   : 'football'
  },
  {
    id    : 2,
    image : 'images/barcelona-home.jpeg',
    club  : 'FC Barcelona',
    name  : 'Home Jersey 2024/25',
    price : 14000,
    old   : 16000,
    tag   : 'new',
    cat   : 'football'
  },
  {
    id    : 3,
    image : 'images/mancity-home.jpeg',
    club  : 'Manchester City',
    name  : 'Home Jersey 2024/25',
    price : 14000,
    old   : 16000,
    tag   : '',
    cat   : 'football'
  },
  {
    id    : 4,
    image : 'images/arsenal-home.jpeg',
    club  : 'Arsenal FC',
    name  : 'Home Jersey 2024/25',
    price : 16000,
    old   : 14000,
    tag   : '',
    cat   : 'football'
  },
  {
    id    : 5,
    image : 'images/chelsea-away.jpeg',
    club  : 'Chelsea FC',
    name  : 'Away Jersey 2024/25',
    price : 16000,
    old   : 14000,
    tag   : '',
    cat   : 'football'
  },
  {
    id    : 6,
    image : 'images/psg-home.jpeg',
    club  : 'Paris Saint-Germain',
    name  : 'Home Jersey 2024/25',
    price : 14000,
    old   : 16500,
    tag   : 'new',
    cat   : 'football'
  },
  {
    id    : 7,
    image : 'images/juventus-home.jpeg',
    club  : 'Juventus',
    name  : 'Home Jersey 2024/25',
    price : 14000,
    old   : 16000,
    tag   : 'new',
    cat   : 'football'
  },
  {
    id    : 8,
    image : 'images/bayern-home.jpeg',
    club  : 'Bayern Munich',
    name  : 'Home Jersey 2024/25',
    price : 15000,
    old   : 17000,
    tag   : '',
    cat   : 'football'
  },

  /* ── BASKETBALL ──────────────────────────────────────────────── */
  {
    id    : 9,
    image : 'images/lakers-city.jpeg',
    club  : 'LA Lakers',
    name  : 'City Edition Jersey',
    price : 17000,
    old   : 0,
    tag   : 'new',
    cat   : 'basketball'
  },
  {
    id    : 10,
    image : 'images/bulls-home.jpg',
    club  : 'Chicago Bulls',
    name  : 'Home Jersey',
    price : 17000,
    old   : 0,
    tag   : '',
    cat   : 'basketball'
  },
  {
    id    : 11,
    image : 'images/warriors-classic.jpg',
    club  : 'Golden State Warriors',
    name  : 'Classic Jersey',
    price : 17000,
    old   : 0,
    tag   : '',
    cat   : 'basketball'
  },
  {
    id    : 12,
    image : 'images/heat-vice.jpg',
    club  : 'Miami Heat',
    name  : 'Vice City Jersey',
    price : 17000,
    old   : 0,
    tag   : 'new',
    cat   : 'basketball'
  },
  {
    id    : 13,
    image : 'images/celtics-home.jpg',
    club  : 'Boston Celtics',
    name  : 'Home Jersey',
    price : 16500,
    old   : 0,
    tag   : '',
    cat   : 'basketball'
  },

  /* ── NFL ─────────────────────────────────────────────────────── */
  {
    id    : 14,
    image : 'images/chiefs-home.jpg',
    club  : 'Kansas City Chiefs',
    name  : 'Home Jersey',
    price : 45,
    old   : 0,
    tag   : '',
    cat   : 'nfl'
  },
  {
    id    : 15,
    image : 'images/cowboys-home.jpg',
    club  : 'Dallas Cowboys',
    name  : 'Home Jersey',
    price : 45,
    old   : 0,
    tag   : '',
    cat   : 'nfl'
  },
  {
    id    : 16,
    image : 'images/eagles-home.jpg',
    club  : 'Philadelphia Eagles',
    name  : 'Home Jersey',
    price : 45,
    old   : 0,
    tag   : 'new',
    cat   : 'nfl'
  },

  /* ── VINTAGE ─────────────────────────────────────────────────── */
  {
    id    : 17,
    image : 'images/brazil-1970.jpg',
    club  : 'Brazil 1970',
    name  : 'World Cup Home Jersey',
    price : 55,
    old   : 80,
    tag   : 'vintage',
    cat   : 'vintage'
  },
  {
    id    : 18,
    image : 'images/italy-1994.jpg',
    club  : 'Italy 1994',
    name  : 'World Cup Home Jersey',
    price : 52,
    old   : 0,
    tag   : 'vintage',
    cat   : 'vintage'
  },
  {
    id    : 19,
    image : 'images/acmilan-2006.jpg',
    club  : 'AC Milan 2006/07',
    name  : 'Champions League Jersey',
    price : 50,
    old   : 70,
    tag   : 'vintage',
    cat   : 'vintage'
  },
  {
    id    : 20,
    image : 'images/argentina-1986.jpg',
    club  : 'Argentina 1986',
    name  : 'World Cup Jersey',
    price : 58,
    old   : 85,
    tag   : 'vintage',
    cat   : 'vintage'
  },

  /* ── NATIONAL TEAMS ──────────────────────────────────────────── */
  {
    id    : 21,
    image : 'images/nigeria-home.jpg',
    club  : 'Nigeria Super Eagles',
    name  : 'Home Jersey 2024',
    price : 32,
    old   : 0,
    tag   : 'new',
    cat   : 'national'
  },
  {
    id    : 22,
    image : 'images/england-home.jpg',
    club  : 'England',
    name  : 'Home Jersey 2024',
    price : 33,
    old   : 0,
    tag   : '',
    cat   : 'national'
  },
  {
    id    : 23,
    image : 'images/germany-away.jpg',
    club  : 'Germany',
    name  : 'Away Jersey 2024',
    price : 33,
    old   : 0,
    tag   : '',
    cat   : 'national'
  },
  {
    id    : 24,
    image : 'images/brazil-home.jpg',
    club  : 'Brazil',
    name  : 'Home Jersey 2024',
    price : 35,
    old   : 48,
    tag   : 'new',
    cat   : 'national'
  },

  /* ── ADD MORE JERSEYS BELOW ──────────────────────────────────── */
  /* Copy and paste this template for each new jersey:

  {
    id    : 25,
    image : 'images/yourfile.jpg',
    club  : 'Club or Country Name',
    name  : 'Jersey Name / Season',
    price : 35,
    old   : 0,
    tag   : '',
    cat   : 'football'
  },

  */

];

/* =============================================================
   STOP HERE — do not edit below unless you know JavaScript
============================================================= */

var cart = [];

function cartTotal() {
  return cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
}

function addToCart(id) {
  var j = jerseys.find(function(x) { return x.id === id; });
  if (!j) return;
  var ex = cart.find(function(c) { return c.id === id; });
  if (ex) { ex.qty++; }
  else { cart.push({ id: j.id, club: j.club, name: j.name, price: j.price, image: j.image, qty: 1 }); }
  updateCartUI();
  showCartFlash();
}

function removeFromCart(id) {
  cart = cart.filter(function(c) { return c.id !== id; });
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  var item = cart.find(function(c) { return c.id === id; });
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  var count = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  var el = document.getElementById('cartCount');
  el.textContent = count;
  el.className = 'cart-count' + (count > 0 ? ' show' : '');
}

function showCartFlash() {
  var btn = document.querySelector('.cart-btn');
  btn.style.borderColor = 'var(--accent)';
  setTimeout(function() { btn.style.borderColor = ''; }, 600);
}

function renderCartItems() {
  var el = document.getElementById('cartItems');
  var foot = document.getElementById('cartFoot');
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><div class="ce-icon">🛒</div><p>Your cart is empty.<br>Add some jerseys!</p></div>';
    foot.style.display = 'none';
    return;
  }
  foot.style.display = 'block';
  el.innerHTML = cart.map(function(item) {
    return '<div class="cart-item">'
      + '<div class="ci-thumb"><img src="' + item.image + '" alt="' + item.name
      + '" style="width:100%;height:100%;object-fit:cover;"'
      + ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"></div>'
      + '<div class="ci-img-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:22px;background:#222">👕</div>'
      + '<div class="ci-details">'
      + '<div class="ci-club">' + item.club + '</div>'
      + '<div class="ci-name">' + item.name + '</div>'
      + '<div class="ci-price">#' + item.price + '</div>'
      + '<div class="ci-qty">'
      + '<button onclick="changeQty(' + item.id + ',-1)">−</button>'
      + '<span>' + item.qty + '</span>'
      + '<button onclick="changeQty(' + item.id + ',1)">+</button>'
      + '</div></div>'
      + '<button class="ci-remove" onclick="removeFromCart(' + item.id + ')">✕</button>'
      + '</div>';
  }).join('');
  document.getElementById('cartTotal').textContent = '#' + cartTotal();
}

function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  var msg = 'Hi DareFit! I want to order:\n\n';
  cart.forEach(function(item) {
    msg += '• ' + item.club + ' - ' + item.name + ' x' + item.qty + ' = #' + (item.price * item.qty) + '\n';
  });
  msg += '\nTotal: #' + cartTotal() + '\n\nPlease confirm availability and shipping. Thank you!';
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}

var currentFilter = 'all';
var searchQuery = '';

function setFilter(btn, cat) {
  currentFilter = cat;
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').style.display = 'none';
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  document.getElementById('shopBadge').textContent = cat.toUpperCase();
  renderJerseys();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterCat(e, cat) {
  e.preventDefault();
  setFilter(null, cat);
  document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.textContent.toLowerCase().includes(cat) || (cat === 'all' && b.textContent.trim() === 'All'));
  });
}

function filterCatDirect(cat) {
  setFilter(null, cat);
  document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.textContent.toLowerCase().includes(cat) || (cat === 'all' && b.textContent.trim() === 'All'));
  });
}

function renderJerseys() {
  var grid = document.getElementById('jerseyGrid');
  var list = jerseys.slice();

  if (currentFilter === 'new') {
    list = list.filter(function(j) { return j.tag === 'new'; });
  } else if (currentFilter !== 'all' && currentFilter !== 'sale') {
    list = list.filter(function(j) { return j.cat === currentFilter; });
  }

  if (searchQuery) {
    var q = searchQuery.toLowerCase();
    list = list.filter(function(j) {
      return j.club.toLowerCase().includes(q)
          || j.name.toLowerCase().includes(q)
          || j.cat.toLowerCase().includes(q);
    });
  }

  if (list.length === 0) {
    grid.innerHTML = '<div class="no-results" style="grid-column:1/-1">'
      + '<div class="nr-icon">🔍</div>'
      + '<h3>No jerseys found</h3>'
      + '<p style="color:var(--muted);font-size:14px">Try a different search or category</p>'
      + '</div>';
    return;
  }

  var waSVG = '<svg viewBox="0 0 24 24" width="14" height="14" style="fill:#fff;flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var cartSVG = '<svg viewBox="0 0 24 24" width="14" height="14" style="stroke:currentColor;fill:none;flex-shrink:0" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>';

  grid.innerHTML = list.map(function(j) {
    var msg = encodeURIComponent('Hi DareFit! I want to buy: ' + j.club + ' - ' + j.name + ' (#' + j.price + ')');
    var waLink = 'https://wa.me/' + WA_NUMBER + '?text=' + msg;
    var tagHtml = j.tag
      ? '<div class="badge-tag ' + j.tag + '">' + (j.tag === 'vintage' ? 'VINTAGE' : 'NEW IN') + '</div>'
      : '';
    var oldHtml = j.old ? '<span class="old-price">#' + j.old + '</span>' : '';

    return '<div class="jersey-card">'
      + '<div class="img-wrap">'
      + tagHtml
      + '<img src="' + j.image + '" alt="' + j.club + ' ' + j.name + '" loading="lazy"'
      + ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
      + '<div class="img-placeholder" style="display:none;width:100%;height:100%;'
      + 'align-items:center;justify-content:center;flex-direction:column;gap:8px;background:#1e1e1e">'
      + '<span style="font-size:52px">👕</span>'
      + '<span style="font-size:11px;color:#555;text-transform:uppercase;letter-spacing:1px">' + j.club + '</span>'
      + '</div>'
      + '</div>'
      + '<div class="info">'
      + '<div class="club">' + j.club + '</div>'
      + '<div class="title">' + j.name + '</div>'
      + '<div class="price-row"><span class="price">#' + j.price + '</span>' + oldHtml + '</div>'
      + '<div class="card-btns">'
      + '<a href="' + waLink + '" target="_blank" style="flex:1.2">'
      + '<button class="buy-btn" style="width:100%">' + waSVG + ' Buy Now</button>'
      + '</a>'
      + '<button class="add-cart-btn" onclick="addToCart(' + j.id + ')">' + cartSVG + ' Add</button>'
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var searchResultsEl = document.getElementById('searchResults');

  searchInput.addEventListener('input', function() {
    var q = this.value.trim().toLowerCase();
    if (!q) { searchResultsEl.style.display = 'none'; return; }
    var matches = jerseys.filter(function(j) {
      return j.club.toLowerCase().includes(q)
          || j.name.toLowerCase().includes(q)
          || j.cat.toLowerCase().includes(q);
    }).slice(0, 8);
    if (matches.length === 0) {
      searchResultsEl.innerHTML = '<div class="sr-item" style="color:var(--muted);font-size:13px;justify-content:center">No results for "' + searchInput.value + '"</div>';
      searchResultsEl.style.display = 'block';
      return;
    }
    searchResultsEl.innerHTML = matches.map(function(j) {
      return '<div class="sr-item" onclick="selectSearchResult(' + j.id + ')">'
        + '<div class="sr-thumb"><img src="' + j.image + '" alt="' + j.name
        + '" style="width:100%;height:100%;object-fit:cover" onerror="this.parentNode.innerHTML=\'👕\'"></div>'
        + '<div><div class="sr-name">' + j.name + '</div>'
        + '<div class="sr-club">' + j.club + ' · ' + j.cat.charAt(0).toUpperCase() + j.cat.slice(1) + '</div></div>'
        + '<div class="sr-price">#' + j.price + '</div>'
        + '</div>';
    }).join('');
    searchResultsEl.style.display = 'block';
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch();
    if (e.key === 'Escape') searchResultsEl.style.display = 'none';
  });

  document.addEventListener('click', function(e) {
    var wrap = document.getElementById('searchWrap');
    if (wrap && !wrap.contains(e.target)) searchResultsEl.style.display = 'none';
  });

  renderJerseys();
});

function selectSearchResult(id) {
  var j = jerseys.find(function(x) { return x.id === id; });
  if (!j) return;
  document.getElementById('searchInput').value = j.club;
  document.getElementById('searchResults').style.display = 'none';
  searchQuery = j.club.toLowerCase();
  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelector('.filter-btn').classList.add('active');
  renderJerseys();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function doSearch() {
  var q = document.getElementById('searchInput').value.trim().toLowerCase();
  document.getElementById('searchResults').style.display = 'none';
  if (!q) { searchQuery = ''; currentFilter = 'all'; renderJerseys(); return; }
  searchQuery = q;
  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelector('.filter-btn').classList.add('active');
  document.getElementById('shopBadge').textContent = 'SEARCH';
  renderJerseys();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

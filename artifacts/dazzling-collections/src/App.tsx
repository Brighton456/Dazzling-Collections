import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Check, ChevronDown, MapPin, Minus, Plus, Search, ShoppingBag, Sparkles, Trash2, X } from 'lucide-react';
import beautyLipstick from '@assets/generated_images/beauty-lipstick.jpg';
import beautySkincare from '@assets/generated_images/beauty-skincare.jpg';
import sandals from '@assets/generated_images/shoes-sandals.jpg';
import sneakers from '@assets/generated_images/shoes-sneakers.jpg';
import creamBag from '@assets/generated_images/bags-cream.jpg';
import wovenBag from '@assets/generated_images/bags-woven.jpg';
import blouse from '@assets/generated_images/clothing-blouse.jpg';
import dress from '@assets/generated_images/clothing-dress.jpg';
import jewelry from '@assets/generated_images/accessories-jewelry.jpg';
import styleAccessories from '@assets/generated_images/accessories-style.jpg';
import './index.css';

type Category = 'Beauty & cosmetics' | 'Shoes' | 'Bags' | 'Clothing' | 'Accessories';
type Product = { id: number; name: string; category: Category; price: number; description: string; image: string; label?: string };
type CartItem = { productId: number; quantity: number };
type Delivery = 'Pickup at shop' | 'Delivery';

const products: Product[] = [
  { id: 1, name: 'Velvet Kiss Lipstick', category: 'Beauty & cosmetics', price: 650, description: 'A creamy, comfortable lipstick with a rich colour payoff. A little everyday polish, ready for your handbag.', image: beautyLipstick, label: 'Everyday pick' },
  { id: 2, name: 'Soft Glow Face Set', category: 'Beauty & cosmetics', price: 1450, description: 'A simple skincare and makeup edit with a fresh, dewy finish. Lovely for a quick morning routine.', image: beautySkincare, label: 'Easy routine' },
  { id: 3, name: 'Everyday Matte Lip', category: 'Beauty & cosmetics', price: 550, description: 'A smooth, soft-matte lip colour in an easy-to-wear shade for day plans and evenings out.', image: beautyLipstick },
  { id: 4, name: 'Glow Drop Serum', category: 'Beauty & cosmetics', price: 980, description: 'A lightweight serum-style beauty find to add a fresh, cared-for feel to your routine.', image: beautySkincare },
  { id: 5, name: 'Lash Lift Mascara', category: 'Beauty & cosmetics', price: 720, description: 'Define and lift lashes with a buildable everyday formula that keeps your look effortless.', image: beautyLipstick },
  { id: 6, name: 'Daily Moisture Cream', category: 'Beauty & cosmetics', price: 850, description: 'A comforting face cream for an easy, soft-skin finish. A thoughtful addition to your daily shelf.', image: beautySkincare },
  { id: 7, name: 'Colour Pop Lip Duo', category: 'Beauty & cosmetics', price: 1100, description: 'Two complementary lip shades for a little choice, whether you are keeping it subtle or turning it up.', image: beautyLipstick },
  { id: 8, name: 'Fresh Face Essentials', category: 'Beauty & cosmetics', price: 1750, description: 'A considered starter set of beauty staples to make getting ready feel easy and enjoyable.', image: beautySkincare, label: 'Little treat' },
  { id: 9, name: 'Golden Hour Flats', category: 'Shoes', price: 1850, description: 'Easy slip-on flats with warm neutral straps and a little glint of detail. Made for repeat wear.', image: sandals, label: 'Easy favourite' },
  { id: 10, name: 'Weekend Walk Sneakers', category: 'Shoes', price: 3200, description: 'A clean low-top look with a soft blush detail. An easy pair for errands, visits and long days.', image: sneakers },
  { id: 11, name: 'Cross-Strap Sandals', category: 'Shoes', price: 1650, description: 'A simple, versatile sandal with a comfortable everyday shape and a warm, polished finish.', image: sandals },
  { id: 12, name: 'Soft Step Trainers', category: 'Shoes', price: 2950, description: 'A fresh, light-coloured trainer to finish casual looks with a neat, comfortable feel.', image: sneakers },
  { id: 13, name: 'Daylight Shoulder Bag', category: 'Bags', price: 2450, description: 'A structured little shoulder bag in a soft neutral tone, finished with subtle gold-colour hardware.', image: creamBag, label: 'Lovely gift' },
  { id: 14, name: 'Market Day Woven Tote', category: 'Bags', price: 1950, description: 'A roomy woven-look tote with sturdy dark handles and a playful scarf detail for everyday outings.', image: wovenBag },
  { id: 15, name: 'Mini Date-Night Bag', category: 'Bags', price: 2150, description: 'A compact, polished bag with just enough room for the things you like to keep close.', image: creamBag },
  { id: 16, name: 'Sunday Carryall', category: 'Bags', price: 2250, description: 'A relaxed, generous tote with natural texture that makes a simple outfit feel considered.', image: wovenBag },
  { id: 17, name: 'Rust Petal Blouse', category: 'Clothing', price: 1950, description: 'An easy blouse in a warm, delicate pattern. Pair with denim or dress it up for a special lunch.', image: blouse, label: 'New look' },
  { id: 18, name: 'Teal Garden Midi', category: 'Clothing', price: 3250, description: 'A flowing midi dress in deep teal with a floral print that brings a little colour to your plans.', image: dress },
  { id: 19, name: 'Everyday Print Top', category: 'Clothing', price: 1650, description: 'A versatile patterned top with a relaxed feel, ready to mix into the pieces you already love.', image: blouse },
  { id: 20, name: 'After-Sunset Midi Dress', category: 'Clothing', price: 3450, description: 'A graceful printed dress for dinner plans, celebrations and any day you want to feel extra lovely.', image: dress },
  { id: 21, name: 'Golden Hour Hoops', category: 'Accessories', price: 780, description: 'A classic pair of gold-tone hoops to bring a little brightness to your everyday look.', image: jewelry, label: 'Small detail, big mood' },
  { id: 22, name: 'Layered Shine Necklace', category: 'Accessories', price: 950, description: 'A delicate layered necklace that makes a thoughtful finishing touch, worn alone or stacked.', image: jewelry },
  { id: 23, name: 'Weekend Edit Sunglasses', category: 'Accessories', price: 1150, description: 'Tortoiseshell-look frames with an easy, flattering shape for sunny days and city strolls.', image: styleAccessories },
  { id: 24, name: 'Colour Story Hair Scarf', category: 'Accessories', price: 680, description: 'A silky-feel printed scarf for your hair, handbag or neckline. A small piece with lots of personality.', image: styleAccessories },
];

const categories: Array<'All finds' | Category> = ['All finds', 'Beauty & cosmetics', 'Shoes', 'Bags', 'Clothing', 'Accessories'];
const money = (value: number) => `KES ${value.toLocaleString('en-KE')}`;

function readCart(): CartItem[] {
  try {
    const saved = localStorage.getItem('dazzling-cart-v1');
    return saved ? JSON.parse(saved) as CartItem[] : [];
  } catch {
    return [];
  }
}

function App() {
  const [cart, setCart] = useState<CartItem[]>(readCart);
  const [category, setCategory] = useState<'All finds' | Category>('All finds');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [queryFocused, setQueryFocused] = useState(false);
  const [customer, setCustomer] = useState({ name: '', phone: '', delivery: 'Pickup at shop' as Delivery, address: '', payment: 'M-Pesa' });
  const [handoff, setHandoff] = useState('');

  useEffect(() => {
    localStorage.setItem('dazzling-cart-v1', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All finds' || product.category === category;
    const term = search.trim().toLowerCase();
    return matchesCategory && (!term || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term));
  }), [category, search]);

  const cartProducts = cart.map((item) => ({ ...item, product: products.find((p) => p.id === item.productId)! })).filter((item) => item.product);
  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id);
      return existing ? current.map((item) => item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { productId: product.id, quantity: 1 }];
    });
    setHandoff('');
  };
  const changeQuantity = (id: number, quantity: number) => setCart((current) => quantity <= 0 ? current.filter((item) => item.productId !== id) : current.map((item) => item.productId === id ? { ...item, quantity } : item));
  const openCart = () => { setCartOpen(true); setCheckoutOpen(false); };

  const sendOrder = () => {
    if (!customer.name.trim() || !customer.phone.trim() || (customer.delivery === 'Delivery' && !customer.address.trim())) {
      setHandoff('Please add your name, phone number and delivery details before continuing.');
      return;
    }
    if (cartProducts.length === 0) {
      setHandoff('Your bag is empty. Add a find before placing an order.');
      return;
    }
    const lines = cartProducts.map((item) => `• ${item.product.name} × ${item.quantity} — ${money(item.product.price * item.quantity)}`).join('\n');
    const message = `Hello Dazzling Collections! I would like to place an order:\n\n${lines}\n\nSubtotal: ${money(subtotal)}\nPayment preference: ${customer.payment}\nName: ${customer.name.trim()}\nPhone: ${customer.phone.trim()}\n${customer.delivery === 'Delivery' ? `Delivery: ${customer.address.trim()}` : 'Collection: Pickup at shop, KV Trade Center - Kwa Vonza, Kitui'}\n\nPlease confirm availability, final total and current M-Pesa payment details with me here.`;
    setHandoff('Your order details are ready. WhatsApp will open so you can confirm the order directly with the shop.');
    window.open(`https://wa.me/254716880778?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-[100dvh]">
      <div className="announcement px-4 py-2 text-center text-[11px] sm:text-xs">
        A little local love, right here in Kwa Vonza <span className="mx-2 opacity-60">·</span> Shop by WhatsApp
      </div>
      <header className="site-wrap flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Dazzling Collections home" className="flex items-center gap-3 no-underline">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#245c49] text-[#f9e8bc]"><Sparkles size={21} strokeWidth={1.8} /></div>
          <div><div className="serif text-[21px] leading-none text-[#693826]">Dazzling</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.22em] text-[#245c49]">Collections</div></div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#574439] md:flex" aria-label="Main navigation">
          <a href="#shop" className="hover:text-[#c85034]">Shop all</a>
          <a href="#categories" className="hover:text-[#c85034]">Categories</a>
          <a href="#our-place" className="hover:text-[#c85034]">Find our shop</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/254716880778" target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#d9c8b5] px-4 py-2.5 text-xs font-bold text-[#245c49] transition hover:bg-[#e9efdf] sm:inline-flex">WhatsApp 0716 880 778</a>
          <button type="button" onClick={openCart} data-testid="button-open-cart" aria-label={`Open shopping bag, ${itemCount} items`} className="relative grid size-11 place-items-center rounded-full bg-[#c85034] text-white transition hover:bg-[#a9432c]"><ShoppingBag size={19} />{itemCount > 0 && <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#efcd76] text-[10px] font-bold text-[#483325]">{itemCount}</span>}</button>
        </div>
      </header>

      <main id="top">
        <section className="site-wrap px-4 pb-12 sm:px-8 lg:px-12">
          <div className="hero-surface relative grid min-h-[430px] overflow-hidden rounded-[30px] lg:min-h-[480px] lg:grid-cols-[1.06fr_.94fr]">
            <div className="relative z-10 flex flex-col items-start justify-center px-7 py-12 sm:px-12 lg:px-[4.5rem]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fff8e9] px-3 py-2 text-[11px] font-bold uppercase tracking-[.15em] text-[#245c49]"><span className="size-2 rounded-full bg-[#c85034]" /> Your neighbourhood style stop</div>
              <h1 className="serif max-w-[610px] text-[clamp(3.5rem,7.2vw,6.6rem)] leading-[.94] tracking-[-.055em] text-[#613b2c]">Find your<br /><span className="text-[#c85034]">little dazzle.</span></h1>
              <p className="mt-6 max-w-[420px] text-base leading-7 text-[#634d40] sm:text-lg">Beauty treats, good shoes and finishing touches for the everyday moments that deserve a little extra.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-[#c85034] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ad432e]">Browse the finds <ArrowDown size={16} /></a>
                <button type="button" onClick={openCart} className="rounded-full border border-[#bca48c] px-6 py-3.5 text-sm font-bold text-[#613b2c] transition hover:bg-[#f9eddc]">Your shopping bag</button>
              </div>
              <p className="mt-6 text-xs font-medium text-[#766255]">A sample storefront · Prices are illustrative and subject to confirmation</p>
            </div>
            <div className="relative min-h-[270px] overflow-hidden lg:min-h-full">
              <img src={dress} alt="Flowing teal floral dress from the clothing edit" className="absolute inset-0 size-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f3dfca] via-[#f3dfca]/45 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 right-6 rounded-2xl bg-[#fffaf0]/90 px-4 py-3 shadow-sm backdrop-blur">
                <div className="serif text-lg text-[#613b2c]">The feel-good edit</div><div className="mt-1 text-xs text-[#716052]">Little finds, lots of personality</div>
              </div>
              <div className="absolute right-8 top-8 grid size-[76px] rotate-6 place-items-center rounded-full bg-[#efcd76] text-center text-[10px] font-bold uppercase leading-[1.3] tracking-[.1em] text-[#513d2c]">Local<br />finds<br /><span className="text-[9px] tracking-[.17em]">NEARBY</span></div>
            </div>
          </div>
        </section>

        <section id="categories" className="site-wrap px-4 pb-12 sm:px-8 lg:px-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div><p className="mb-1 text-[11px] font-bold uppercase tracking-[.18em] text-[#c85034]">Browse your way</p><h2 className="serif text-3xl text-[#553a2b] sm:text-4xl">A little something for you</h2></div>
            <a href="#shop" className="hidden items-center gap-2 text-sm font-bold text-[#245c49] sm:inline-flex">See all finds <ArrowRight size={16} /></a>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => <button key={item} type="button" onClick={() => { setCategory(item); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }} data-testid={`filter-category-${item.replaceAll(' ', '-').toLowerCase()}`} aria-pressed={category === item} className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${category === item ? 'bg-[#245c49] text-[#fff8e9]' : 'border border-[#dacaba] bg-[#fffaf3] text-[#654f41] hover:border-[#245c49] hover:text-[#245c49]'}`}>{item}</button>)}
          </div>
        </section>

        <section id="shop" className="site-wrap px-4 pb-20 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#dccabb] pb-5 sm:flex-row sm:items-end">
            <div><p className="mb-1 text-[11px] font-bold uppercase tracking-[.18em] text-[#c85034]">The shop window</p><h2 className="serif text-4xl text-[#553a2b]">Good things, gathered.</h2><p className="mt-2 text-sm text-[#766255]">A selection of sample finds. Ask us on WhatsApp to confirm what is available.</p></div>
            <label className={`flex items-center gap-3 rounded-full border bg-[#fffaf3] px-4 py-3 transition ${queryFocused ? 'border-[#c85034]' : 'border-[#dacaba]'}`}><Search size={17} className="text-[#836f5e]" /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} onFocus={() => setQueryFocused(true)} onBlur={() => setQueryFocused(false)} placeholder="Search the finds" aria-label="Search products" data-testid="input-product-search" className="w-48 bg-transparent text-sm text-[#45372e] outline-none placeholder:text-[#a08d7d] sm:w-56" />{search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search" className="text-[#876f5d]"><X size={16} /></button>}</label>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-[#786759]"><span className="font-bold text-[#553a2b]">{filteredProducts.length}</span> sample finds <ChevronDown size={15} className="rotate-[-90deg]" /></div>
            <div className="flex gap-1.5 overflow-x-auto">
              {categories.slice(1).map((item) => <button type="button" key={item} onClick={() => setCategory(category === item ? 'All finds' : item)} className={`hidden rounded-full px-3 py-1.5 text-xs font-semibold transition sm:block ${category === item ? 'bg-[#e9efdf] text-[#245c49]' : 'text-[#7b695c] hover:text-[#c85034]'}`}>{item}</button>)}
            </div>
          </div>
          {filteredProducts.length ? <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product, index) => <article key={product.id} className="product-card group relative overflow-hidden rounded-[20px] border border-[#e5d8c8] bg-[#fffaf3] reveal" style={{ animationDelay: `${Math.min(index % 5, 4) * 45}ms` }} data-testid={`card-product-${product.id}`}>
              <button type="button" onClick={() => setSelected(product)} className="image-zoom relative block aspect-[.92] w-full overflow-hidden bg-[#ead9c9] text-left" aria-label={`View ${product.name} details`}>
                <img src={product.image} alt={product.name} loading="lazy" className="size-full object-cover" />
                {product.label && <span className="absolute left-3 top-3 max-w-[calc(100%-24px)] rounded-full bg-[#fff8e9]/95 px-3 py-1.5 text-[10px] font-bold text-[#245c49] shadow-sm">{product.label}</span>}
                <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-[#fffaf3]/95 text-[#654c3e] shadow-sm transition group-hover:bg-[#c85034] group-hover:text-white"><ArrowRight size={16} /></span>
              </button>
              <div className="p-3.5 sm:p-4">
                <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[.13em] text-[#8b7461]">{product.category}</div>
                <button type="button" onClick={() => setSelected(product)} className="min-h-10 text-left text-[14px] font-bold leading-5 text-[#543b2d] hover:text-[#c85034] sm:text-[15px]" data-testid={`text-product-name-${product.id}`}>{product.name}</button>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#245c49]">{money(product.price)}</span>
                  <button type="button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`} data-testid={`button-add-product-${product.id}`} className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f2e7d8] text-[#694937] transition hover:bg-[#c85034] hover:text-white"><Plus size={17} /></button>
                </div>
              </div>
            </article>)}
          </div> : <div className="rounded-[24px] border border-dashed border-[#d3bfab] bg-[#f7eddf] px-5 py-16 text-center"><Search className="mx-auto mb-4 text-[#8c735f]" size={26} /><h3 className="serif text-2xl text-[#543b2d]">No finds by that name</h3><p className="mt-2 text-sm text-[#766255]">Try another search, or browse all of our sample finds.</p><button type="button" onClick={() => { setSearch(''); setCategory('All finds'); }} className="mt-5 rounded-full bg-[#245c49] px-5 py-2.5 text-sm font-bold text-white">Show everything</button></div>}
        </section>

        <section id="our-place" className="bg-[#245c49] text-[#f8efde]">
          <div className="site-wrap grid gap-8 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-center sm:px-10 lg:px-16">
            <div><div className="mb-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#efcd76]">Around the corner</div><h2 className="serif text-3xl sm:text-4xl">Your neighbourhood shop, on WhatsApp.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#e1dfc8]">See something you like? Put together your picks and send them to us directly. We’ll confirm current availability, the final total and how to pay before you send any money.</p></div>
            <div className="flex flex-col gap-3 sm:items-end"><a href="https://wa.me/254716880778" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#efcd76] px-6 py-3.5 text-sm font-bold text-[#4f3d2a] transition hover:-translate-y-0.5"><ShoppingBag size={17} /> Chat with the shop</a><div className="text-center text-xs text-[#d8ddc7] sm:text-right">WhatsApp <strong className="text-[#fff4d9]">0716 880 778</strong></div></div>
          </div>
        </section>
      </main>

      <footer className="site-wrap flex flex-col gap-3 px-5 py-7 text-xs text-[#796759] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <div><span className="serif text-lg text-[#613b2c]">Dazzling Collections</span><div className="mt-1 flex items-center gap-1"><MapPin size={13} /> KV Trade Center - Kwa Vonza, Kitui</div></div>
        <div className="max-w-xl sm:text-right">Sample storefront with illustrative prices, not verified inventory or pricing. Please confirm all details with the shop on WhatsApp.</div>
      </footer>

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#37291f]/55 p-4 backdrop-blur-[3px]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        <section role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" className="relative grid w-full max-w-3xl overflow-hidden rounded-[26px] bg-[#fffaf3] shadow-2xl sm:grid-cols-2">
          <button type="button" onClick={() => setSelected(null)} aria-label="Close product details" className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-[#fffaf3]/90 text-[#533d2e]"><X size={19} /></button>
          <div className="aspect-square bg-[#ead9c9] sm:aspect-auto"><img src={selected.image} alt={selected.name} className="size-full object-cover" /></div>
          <div className="flex flex-col justify-center p-6 sm:p-9">
            <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#c85034]">{selected.category}</div>
            <h2 id="product-dialog-title" className="serif mt-3 text-3xl leading-tight text-[#543b2d]">{selected.name}</h2>
            <p className="mt-4 text-sm leading-6 text-[#756154]">{selected.description}</p>
            <div className="mt-6 text-xl font-bold text-[#245c49]">{money(selected.price)}</div>
            <p className="mt-1 text-xs leading-5 text-[#8a7767]">Illustrative sample price; please confirm availability and current price with the shop.</p>
            <button type="button" onClick={() => { addToCart(selected); setSelected(null); }} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c85034] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#aa432f]"><Plus size={17} /> Add to your bag</button>
          </div>
        </section>
      </div>}

      {cartOpen && <div className="fixed inset-0 z-50 bg-[#37291f]/45 backdrop-blur-[2px]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setCartOpen(false); setCheckoutOpen(false); } }}>
        <aside role="dialog" aria-modal="true" aria-labelledby="cart-title" className="cart-drawer ml-auto flex h-[100dvh] w-full max-w-[500px] flex-col bg-[#fffaf3] shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#e8dccd] px-5 py-5 sm:px-7">
            <div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c85034]">Your picks</div><h2 id="cart-title" className="serif mt-1 text-2xl text-[#543b2d]">Shopping bag <span className="text-[#927c69]">({itemCount})</span></h2></div>
            <button type="button" onClick={() => { setCartOpen(false); setCheckoutOpen(false); }} aria-label="Close shopping bag" className="grid size-10 place-items-center rounded-full bg-[#f2e7d8] text-[#533d2e]"><X size={19} /></button>
          </div>
          {cartProducts.length === 0 ? <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 grid size-20 place-items-center rounded-full bg-[#f3e6d4] text-[#245c49]"><ShoppingBag size={30} strokeWidth={1.5} /></div><h3 className="serif text-2xl text-[#543b2d]">Your bag is taking a breather.</h3><p className="mt-2 max-w-xs text-sm leading-6 text-[#766255]">Find something that feels like you, then come back here to send your order.</p><button type="button" onClick={() => setCartOpen(false)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#245c49] px-6 py-3 text-sm font-bold text-white">Browse the finds <ArrowRight size={16} /></button>
          </div> : <>
            <div className="flex-1 overflow-y-auto px-5 py-3 sm:px-7">
              {cartProducts.map(({ product, quantity }) => <div key={product.id} className="flex gap-4 border-b border-[#eadfD1] py-4">
                <img src={product.image} alt="" className="size-[86px] shrink-0 rounded-[14px] object-cover" />
                <div className="min-w-0 flex-1"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-[#8a7462]">{product.category}</div><div className="mt-1 font-bold leading-5 text-[#543b2d]">{product.name}</div><div className="mt-1 text-sm font-semibold text-[#245c49]">{money(product.price)}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-full border border-[#dfd1c1] bg-[#fffdf8] px-2 py-1"><button type="button" onClick={() => changeQuantity(product.id, quantity - 1)} aria-label={`Decrease ${product.name} quantity`} className="grid size-6 place-items-center rounded-full text-[#604938]"><Minus size={14} /></button><span className="min-w-4 text-center text-xs font-bold">{quantity}</span><button type="button" onClick={() => changeQuantity(product.id, quantity + 1)} aria-label={`Increase ${product.name} quantity`} className="grid size-6 place-items-center rounded-full text-[#604938]"><Plus size={14} /></button></div>
                    <button type="button" onClick={() => changeQuantity(product.id, 0)} aria-label={`Remove ${product.name}`} className="inline-flex items-center gap-1 text-xs font-semibold text-[#9a5946] hover:text-[#c85034]"><Trash2 size={14} /> Remove</button>
                  </div>
                </div>
              </div>)}
              {checkoutOpen && <div className="mt-5 rounded-[20px] border border-[#e4d6c6] bg-[#f8efe3] p-4 sm:p-5">
                <h3 className="serif text-xl text-[#543b2d]">A few details for the shop</h3>
                <p className="mt-1 text-xs leading-5 text-[#796759]">This sends an order request to WhatsApp. The shop will confirm your order directly.</p>
                <div className="mt-4 grid gap-3">
                  <label className="text-xs font-bold text-[#624b3b]">Your name<input value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} autoComplete="name" placeholder="Name" data-testid="input-customer-name" className="mt-1.5 w-full rounded-xl border border-[#d9c8b5] bg-[#fffaf3] px-3 py-2.5 text-sm font-normal outline-none focus:border-[#c85034]" /></label>
                  <label className="text-xs font-bold text-[#624b3b]">Phone number<input value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} type="tel" autoComplete="tel" placeholder="e.g. 07xx xxx xxx" data-testid="input-customer-phone" className="mt-1.5 w-full rounded-xl border border-[#d9c8b5] bg-[#fffaf3] px-3 py-2.5 text-sm font-normal outline-none focus:border-[#c85034]" /></label>
                  <fieldset><legend className="text-xs font-bold text-[#624b3b]">How would you like to receive it?</legend><div className="mt-2 grid grid-cols-2 gap-2">{(['Pickup at shop', 'Delivery'] as Delivery[]).map((option) => <button type="button" key={option} onClick={() => setCustomer({ ...customer, delivery: option })} aria-pressed={customer.delivery === option} className={`rounded-xl border px-3 py-2.5 text-xs font-bold ${customer.delivery === option ? 'border-[#245c49] bg-[#e7ecdf] text-[#245c49]' : 'border-[#d9c8b5] bg-[#fffaf3] text-[#705c4b]'}`}>{option}</button>)}</div></fieldset>
                  {customer.delivery === 'Delivery' && <label className="text-xs font-bold text-[#624b3b]">Delivery details<input value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} placeholder="Area and directions" data-testid="input-delivery-details" className="mt-1.5 w-full rounded-xl border border-[#d9c8b5] bg-[#fffaf3] px-3 py-2.5 text-sm font-normal outline-none focus:border-[#c85034]" /></label>}
                  <fieldset><legend className="text-xs font-bold text-[#624b3b]">Payment preference</legend><div className="mt-2 grid grid-cols-2 gap-2">{['M-Pesa', 'Discuss with shop'].map((option) => <button key={option} type="button" onClick={() => setCustomer({ ...customer, payment: option })} aria-pressed={customer.payment === option} className={`rounded-xl border px-3 py-2.5 text-xs font-bold ${customer.payment === option ? 'border-[#245c49] bg-[#e7ecdf] text-[#245c49]' : 'border-[#d9c8b5] bg-[#fffaf3] text-[#705c4b]'}`}>{option}</button>)}</div></fieldset>
                  {customer.payment === 'M-Pesa' && <div className="rounded-xl border border-[#ead69e] bg-[#fcf2d2] p-3 text-[11px] leading-5 text-[#675434]">M-Pesa is a payment preference only. Please confirm current payment details with the shop on WhatsApp before sending money. No till or paybill number is provided here.</div>}
                </div>
                {handoff && <p role="status" className="mt-3 rounded-xl bg-[#e6efe5] p-3 text-xs leading-5 text-[#245c49]" data-testid="status-order-handoff">{handoff}</p>}
              </div>}
            </div>
            <div className="border-t border-[#e8dccd] px-5 pb-5 pt-4 sm:px-7">
              <div className="flex items-center justify-between text-sm text-[#705c4b]"><span>Sample subtotal</span><strong className="text-base text-[#543b2d]">{money(subtotal)}</strong></div>
              <p className="mt-1 text-[11px] leading-5 text-[#8a7767]">Illustrative prices only. Any delivery arrangements or additional costs should be confirmed with the shop.</p>
              {!checkoutOpen ? <button type="button" onClick={() => setCheckoutOpen(true)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#c85034] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#a9432c]">Continue to order <ArrowRight size={17} /></button> : <button type="button" onClick={sendOrder} data-testid="button-send-whatsapp-order" className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#245c49] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#194937]"><Check size={17} /> Send order on WhatsApp</button>}
              <div className="mt-3 text-center text-xs text-[#806c5c]">Shop WhatsApp <a href="https://wa.me/254716880778" target="_blank" rel="noreferrer" className="font-bold text-[#245c49] underline underline-offset-2">0716 880 778</a></div>
            </div>
          </>}
        </aside>
      </div>}
    </div>
  );
}

export default App;

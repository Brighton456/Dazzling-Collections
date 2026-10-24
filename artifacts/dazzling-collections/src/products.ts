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

export type Category = 'Beauty & cosmetics' | 'Shoes' | 'Bags' | 'Clothing' | 'Accessories';
export type Product = { id: number; name: string; category: Category; price: number; description: string; image: string };

type ProductSeed = { name: string; price: number; description: string };
const catalog: Record<Category, ProductSeed[]> = {
  'Beauty & cosmetics': [
    { name: 'Velvet Kiss Lipstick', price: 650, description: 'A creamy berry-red swipe for a little colour between errands around Kwa Vonza.' },
    { name: 'Soft Glow Face Set', price: 1450, description: 'A simple skincare-and-makeup edit for unhurried mornings before the campus matatu.' },
    { name: 'Everyday Matte Lip', price: 550, description: 'A soft-matte neutral shade that moves easily from lecture notes to lunch.' },
    { name: 'Glow Drop Serum', price: 980, description: 'A lightweight serum-style step for a fresh-feeling start on warm Kitui mornings.' },
    { name: 'Lash Lift Mascara', price: 720, description: 'Buildable lash definition for an easy, awake look on busy market days.' },
    { name: 'Daily Moisture Cream', price: 850, description: 'A comforting face-cream step for skin that meets sun, breeze and town dust.' },
    { name: 'Colour Pop Lip Duo', price: 1100, description: 'Two complementary lip shades: one for daytime errands, one for evening plans.' },
    { name: 'Fresh Face Essentials', price: 1750, description: 'A considered mini edit of beauty staples for a tidy dressing-table routine.' },
    { name: 'Maua Blush Compact', price: 790, description: 'A soft floral flush with a compact size that slips into a handbag.' },
    { name: 'Nairobi Nude Lip Pencil', price: 480, description: 'A warm nude outline to pair with gloss or your favourite lipstick.' },
    { name: 'Coastal Breeze Face Mist', price: 690, description: 'A refreshing mist-inspired pick for humid afternoons and coastal-weather days.' },
    { name: 'Sunlit Skin Highlighter', price: 880, description: 'A subtle gleam for cheekbones when the late-afternoon light turns golden.' },
    { name: 'Soko Soft Brow Pencil', price: 520, description: 'A neat brow pencil for a quick definition before stepping out.' },
    { name: 'Kitui Clay Cleanser', price: 920, description: 'A clay-inspired cleanser concept for a considered evening wash routine.' },
    { name: 'Kikoy Coral Lip Tint', price: 740, description: 'A bright coral lip tint with colour inspired by lively kikoy stripes.' },
    { name: 'Dewdrop Eye Cream', price: 1050, description: 'A small eye-area care step to round out a calm morning routine.' },
    { name: 'Market Day Setting Powder', price: 860, description: 'A soft finishing powder concept for a polished look through a full day out.' },
    { name: 'Peach Tea Lip Gloss', price: 590, description: 'A sheer peach gloss that catches the light without feeling overdone.' },
    { name: 'Mombasa Sunset Palette', price: 1380, description: 'Warm sunset-inspired tones for an understated or softly colourful eye look.' },
    { name: 'Fresh Start Makeup Brush', price: 640, description: 'A soft-bristle face brush to make blending feel simple and even.' },
    { name: 'Nairobi Night Kohl', price: 570, description: 'A deep liner pencil for a defined eye when the day becomes an evening out.' },
    { name: 'Gentle Reset Cleansing Balm', price: 1150, description: 'A balm-style first cleanse for taking the day’s makeup off gently.' },
    { name: 'Golden Hour Body Lotion', price: 990, description: 'A smooth-feeling body lotion with a warm, after-shower finish.' },
    { name: 'Rosewater Comfort Toner', price: 780, description: 'A rosewater-inspired toner step for a light, refreshed feel after cleansing.' },
    { name: 'Cherry Chai Lip Butter', price: 430, description: 'A pocket-sized lip-butter idea for dry-air bus rides and breezy evenings.' },
    { name: 'Soft Focus Concealer', price: 810, description: 'A creamy concealer-style find for a quick, natural-looking touch-up.' },
    { name: 'Kwa Vonza Glow Oil', price: 1250, description: 'A lightweight glow-oil concept for a little sheen on shoulders and cheekbones.' },
    { name: 'Everyday Nail Colour', price: 460, description: 'A neat, wearable nail-colour pick for a fresh finish at home.' },
    { name: 'Maua Petal Face Mask', price: 890, description: 'A face-mask treat for a slower self-care evening after a full week.' },
    { name: 'City Lights Makeup Pouch', price: 1200, description: 'A beauty-bag edit imagined for keeping small daily essentials together.' },
  ],
  Shoes: [
    { name: 'Golden Hour Flats', price: 1850, description: 'Warm-toned slip-on flats for an easy walk through town and back.' },
    { name: 'Weekend Walk Sneakers', price: 3200, description: 'A clean low-top look for errands, campus paths and long catch-ups.' },
    { name: 'Cross-Strap Sandals', price: 1650, description: 'A simple cross-strap shape with an easy feel for sunny everyday plans.' },
    { name: 'Soft Step Trainers', price: 2950, description: 'Light-coloured trainers to bring a fresh finish to relaxed outfits.' },
    { name: 'Kwa Vonza Market Slides', price: 1350, description: 'Easy slides for a quick stop at the shops or a laid-back afternoon.' },
    { name: 'Nairobi Commute Loafers', price: 2750, description: 'A tidy loafer silhouette suited to office hours and city connections.' },
    { name: 'Coastline Buckle Sandals', price: 1900, description: 'Open sandals with a neat buckle detail for warm coastal-weather days.' },
    { name: 'Campus Canvas Kicks', price: 2850, description: 'Casual canvas-style sneakers for lecture days and walks between classes.' },
    { name: 'Market Morning Mules', price: 2100, description: 'Backless mules that add a polished note to a quick market-day outfit.' },
    { name: 'Kitui Sunset Straps', price: 1780, description: 'A warm, earthy sandal palette inspired by the evening light in Kitui.' },
    { name: 'City Stroll Court Shoes', price: 3300, description: 'A low court-shoe profile for plans that call for a little extra polish.' },
    { name: 'Rainy Season Trainers', price: 3100, description: 'A closed-toe casual shape for changeable weather and everyday wear.' },
    { name: 'Kikoy Stripe Slides', price: 1490, description: 'A playful stripe-inspired detail brings colour to these relaxed slides.' },
    { name: 'Sunday Visit Sandals', price: 1720, description: 'A simple dress-up sandal for visits, lunch and unhurried afternoons.' },
    { name: 'Nairobi Sidewalk Sneakers', price: 3400, description: 'A crisp sneaker shape imagined for busy pavements and city weekends.' },
    { name: 'Kwa Vonza Easy Loafers', price: 2600, description: 'A practical slip-on look that feels at home with smart-casual outfits.' },
    { name: 'Coastal Day Flats', price: 1980, description: 'An airy flat silhouette with a relaxed feel for warm-weather plans.' },
    { name: 'Campus Break Sandals', price: 1580, description: 'Simple sandals for the walk between class, library and a tea break.' },
    { name: 'Market Lane T-Bar Flats', price: 2250, description: 'A classic T-bar outline that lends a little character to everyday looks.' },
    { name: 'Golden Acacia Sneakers', price: 3250, description: 'A neutral low-top palette inspired by dry-season acacia country.' },
  ],
  Bags: [
    { name: 'Daylight Shoulder Bag', price: 2450, description: 'A structured neutral shoulder shape with understated gold-colour details.' },
    { name: 'Market Day Woven Tote', price: 1950, description: 'A roomy woven-look tote with a scarf accent for everyday outings.' },
    { name: 'Mini Date-Night Bag', price: 2150, description: 'A compact polished shape for the essentials you like to keep close.' },
    { name: 'Sunday Carryall', price: 2250, description: 'A relaxed, generous tote with natural texture for an easy weekend.' },
    { name: 'Nairobi Matatu Crossbody', price: 2380, description: 'A hands-free crossbody idea for keeping essentials close in town.' },
    { name: 'Kitui Market Basket Bag', price: 2050, description: 'A basket-inspired silhouette with a little texture for market-day style.' },
    { name: 'Coastal Weekend Pouch', price: 1280, description: 'A compact pouch concept for small essentials on a warm-weather outing.' },
    { name: 'Campus Notes Satchel', price: 2980, description: 'A neat satchel shape imagined for notebooks and a busy class schedule.' },
    { name: 'Kikoy Accent Mini Tote', price: 1850, description: 'A small tote with a colour-story detail inspired by kikoy patterning.' },
    { name: 'Kwa Vonza Everyday Hobo', price: 2650, description: 'A soft hobo profile for the things you carry through a full day.' },
    { name: 'Nairobi After-hours Clutch', price: 2200, description: 'A slim clutch shape for dinner plans and evenings around the city.' },
    { name: 'Market Lane Shoulder Tote', price: 2490, description: 'A shoulder-friendly carryall for a list of errands and little finds.' },
    { name: 'Coastline Woven Shopper', price: 2350, description: 'A woven-look shopper with an easygoing feel for sunny-day plans.' },
    { name: 'Study Break Mini Bag', price: 1980, description: 'A compact bag to take the small essentials on a campus coffee break.' },
    { name: 'Golden Hour Satchel', price: 2790, description: 'A warm neutral satchel-style piece with a classic, tidy outline.' },
  ],
  Clothing: [
    { name: 'Rust Petal Blouse', price: 1950, description: 'A warm patterned blouse for denim days or a special lunch in town.' },
    { name: 'Teal Garden Midi', price: 3250, description: 'A flowing floral midi that brings colour to visits and evening plans.' },
    { name: 'Everyday Print Top', price: 1650, description: 'A relaxed patterned top ready to mix with pieces already in your wardrobe.' },
    { name: 'After-Sunset Midi Dress', price: 3450, description: 'A graceful printed dress for celebrations and days you want to dress up.' },
    { name: 'Kitui Market-Day Shirt', price: 1850, description: 'A relaxed shirt silhouette with a lively print for a market-day outing.' },
    { name: 'Campus Coffee Wrap Top', price: 1780, description: 'A simple wrap-inspired top for class, coffee and whatever follows.' },
    { name: 'Kikoy Colour-Block Skirt', price: 2200, description: 'A swishy skirt concept with colour blocking inspired by kikoy stripes.' },
    { name: 'Nairobi Brunch Blouse', price: 2150, description: 'A softly patterned blouse for brunch plans and polished weekday looks.' },
    { name: 'Coastal Breeze Kaftan', price: 2890, description: 'An airy kaftan-inspired shape for humid afternoons and relaxed moments.' },
    { name: 'Kwa Vonza Sunday Dress', price: 3100, description: 'A comfortable printed dress for family visits and an easy Sunday.' },
    { name: 'Soko Lane Button Shirt', price: 1990, description: 'A neat button-front style with a print that brightens everyday separates.' },
    { name: 'Maua Garden Tunic', price: 2350, description: 'A floral tunic silhouette to wear loose or pair with simple trousers.' },
    { name: 'City Walk Pleat Dress', price: 3350, description: 'A softly pleated dress for a day moving between city plans.' },
    { name: 'Campus Layering Cardigan', price: 2550, description: 'A light layer for cool lecture rooms and breezy early mornings.' },
    { name: 'Kitui Sunset Wrap Dress', price: 3550, description: 'A wrap-inspired dress in a warm palette reminiscent of evening skies.' },
    { name: 'Market Morning Easy Trousers', price: 2280, description: 'An easy trouser shape for a comfortable start and a busy day ahead.' },
    { name: 'Coastline Print Blouse', price: 2050, description: 'A light-looking printed blouse inspired by the colour of the coast.' },
    { name: 'Nairobi Notes Midi Skirt', price: 2390, description: 'A versatile midi skirt for office hours, errands and after-work plans.' },
    { name: 'Kitenge-Inspired Panel Top', price: 2100, description: 'A graphic panel detail takes inspiration from bold kitenge pattern stories.' },
    { name: 'Sunday Market Shirt Dress', price: 3180, description: 'A shirt-dress outline for relaxed plans and an unhurried market stroll.' },
    { name: 'Kwa Vonza Soft Knit Top', price: 1720, description: 'A simple knit-style top for easy layering through the week.' },
    { name: 'Mombasa Evening Floral', price: 3690, description: 'A floral evening dress concept with colour inspired by coastal twilight.' },
    { name: 'Campus Day Pleated Top', price: 1890, description: 'A little pleat detail lends movement to this everyday campus-ready top.' },
    { name: 'Kitui Acacia Print Blouse', price: 2180, description: 'A delicate print nods to acacia silhouettes across the Kitui landscape.' },
    { name: 'Nairobi Weekend Jumpsuit', price: 3420, description: 'A one-piece outfit idea for weekend plans that call for easy style.' },
  ],
  Accessories: [
    { name: 'Golden Hour Hoops', price: 780, description: 'Classic gold-tone hoops bring a little brightness to everyday outfits.' },
    { name: 'Layered Shine Necklace', price: 950, description: 'A delicate layered necklace that works alone or with your favourite chain.' },
    { name: 'Weekend Edit Sunglasses', price: 1150, description: 'Tortoiseshell-look frames for sunny days and city strolls.' },
    { name: 'Colour Story Hair Scarf', price: 680, description: 'A printed scarf for your hair, handbag or neckline.' },
    { name: 'Kikoy Stripe Headband', price: 590, description: 'A stripe-inspired headband adds a playful note to an easy hairstyle.' },
    { name: 'Nairobi Layered Cuff', price: 880, description: 'A simple cuff-style accessory for a polished finish from day to dinner.' },
    { name: 'Coastline Shell-Shape Studs', price: 720, description: 'Small sculptural studs with a shape reminiscent of a coastal shell.' },
    { name: 'Market Day Belt', price: 990, description: 'A warm-toned belt detail to bring definition to a dress or loose shirt.' },
    { name: 'Kwa Vonza Charm Bracelet', price: 840, description: 'A delicate bracelet idea for adding a quiet glint to your wrist.' },
    { name: 'Golden Acacia Hair Clip', price: 540, description: 'A simple golden-toned clip for a quick, tidy finish on busy mornings.' },
  ],
};

const images: Record<Category, string[]> = {
  'Beauty & cosmetics': [beautyLipstick, beautySkincare],
  Shoes: [sandals, sneakers],
  Bags: [creamBag, wovenBag],
  Clothing: [blouse, dress],
  Accessories: [jewelry, styleAccessories],
};

let nextId = 1;
export const products: Product[] = (Object.entries(catalog) as [Category, ProductSeed[]][]).flatMap(([category, items]) =>
  items.map((item, index) => ({
    id: nextId++,
    ...item,
    category,
    image: images[category][index % images[category].length],
  })),
);

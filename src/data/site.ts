import cakesImage from "@/assets/cakes-category.jpg";
import breadsImage from "@/assets/breads-category.jpg";
import pastriesImage from "@/assets/pastries-category.jpg";
import heroImage from "@/assets/heidelberg-hero.jpg";

export const PHONE = "(703) 527-8394";
export const PHONE_HREF = "tel:7035278394";
export const ADDRESS_LINE1 = "2150 N. Culpeper Street";
export const ADDRESS_LINE2 = "Arlington, VA 22207";
export const MAPS_URL =
  "https://maps.google.com/?q=2150+N+Culpeper+Street+Arlington+VA+22207";

export const HOURS = [
  { day: "Tuesday – Friday", time: "6:30am – 5:00pm" },
  { day: "Saturday", time: "8:00am – 4:00pm" },
  { day: "Sunday", time: "8:00am – 1:00pm" },
  { day: "Monday", time: "Closed" },
];

export type Product = {
  slug: string;
  name: string;
  price: string;
  blurb: string;
  description: string;
  details: string[];
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
};

const p = (
  slug: string,
  name: string,
  price: string,
  blurb: string,
  description: string,
  details: string[],
  image: string,
): Product => ({ slug, name, price, blurb, description, details, image });

export const categories: Category[] = [
  {
    slug: "bread",
    name: "Bread",
    tagline: "Baked daily with imported German flour",
    image: breadsImage,
    products: [
      p("bauernbrot", "Bauernbrot Farmer's Loaf", "$8.50", "Dense rye-wheat sourdough with a deep crust.",
        "Our signature farmer's loaf is built on a natural rye sour and baked on stone hearth for a thick, crackling crust and a moist, long-keeping crumb.",
        ["Round 2 lb loaf", "Natural rye sourdough", "Slicing available in store", "Best within 4 days"], breadsImage),
      p("bavarian-pretzel", "Bavarian Pretzel", "$3.25", "Hand-rolled, lye-dipped, coarse salt.",
        "Hand-rolled every morning, dipped the traditional Bavarian way and finished with coarse salt for a glossy mahogany shell and a soft chew.",
        ["Hand-rolled daily", "Coarse sea salt", "Warm before serving", "Also sold by the dozen"], breadsImage),
      p("sunflower-seed-bread", "Sunflower Seed Bread", "$8.95", "Hearty seeded loaf, wonderful toasted.",
        "A moist wholegrain loaf packed with toasted sunflower seeds — our most popular sandwich bread and a natural partner for deli cheese and cold cuts.",
        ["Wholegrain rye and wheat", "Toasted sunflower seeds", "Sliced on request", "No preservatives"], breadsImage),
    ],
  },
  {
    slug: "cakes",
    name: "Cakes",
    tagline: "Buttercream, mousse and custom designs",
    image: cakesImage,
    products: [
      p("black-forest-torte", "Black Forest Torte", "$42.00", "Chocolate sponge, cherries, whipped cream.",
        "Layers of chocolate sponge brushed with kirsch, sour cherries and fresh whipped cream, finished with shaved chocolate — the classic Schwarzwälder Kirschtorte.",
        ["8 inch serves 10–12", "48 hours notice preferred", "Contains alcohol (kirsch)", "Refrigerate until serving"], cakesImage),
      p("buttercream-birthday-cake", "Buttercream Birthday Cake", "$38.00", "Your flavor, your message, our buttercream.",
        "Choose vanilla, chocolate or marble sponge with real buttercream, then tell us the message and colors. Photo designs can be added for $20.00.",
        ["8, 10 and 12 inch sizes", "Custom inscription included", "Photo design add-on available", "Order 48 hours ahead"], cakesImage),
      p("fruit-flan-torte", "Fresh Fruit Flan Torte", "$40.00", "Seasonal fruit over vanilla cream.",
        "A light sponge base with vanilla pastry cream and glazed seasonal fruit — bright, not too sweet, and always a table favorite.",
        ["Seasonal fruit selection", "Serves 10–12", "Best enjoyed same day", "Refrigerate until serving"], cakesImage),
    ],
  },
  {
    slug: "cheese-delights",
    name: "Cheese Delights",
    tagline: "Imported European cheeses, cut to order",
    image: pastriesImage,
    products: [
      p("aged-gouda", "Aged Gouda", "$14.95 / lb", "Caramel notes, crystalline bite.",
        "Matured for over a year, this gouda develops butterscotch sweetness and crunchy protein crystals. Cut to order at the counter.",
        ["Cut to order", "Aged 12+ months", "Vacuum sealed for travel", "Pairs with dark bread"], pastriesImage),
      p("cheese-platter", "European Cheese Platter", "$54.00", "A curated tray for gatherings.",
        "Five imported cheeses arranged with fruit and nuts, ready to serve. Sized for eight to twelve guests and made to order.",
        ["Serves 8–12", "48 hours notice", "Custom selections welcome", "Pickup in store"], pastriesImage),
    ],
  },
  {
    slug: "chocolate",
    name: "Chocolate",
    tagline: "Imported bars, pralines and truffles",
    image: pastriesImage,
    products: [
      p("praline-box", "Assorted Praline Box", "$28.00", "Sixteen hand-finished pralines.",
        "A rotating assortment of milk, dark and white chocolate pralines with nut, marzipan and ganache centers, packed in a gift box.",
        ["16 pieces", "Gift boxed", "Store cool and dry", "Seasonal assortments"], pastriesImage),
      p("marzipan-loaf", "Marzipan Loaf", "$9.50", "Almond marzipan in dark chocolate.",
        "A generous bar of soft almond marzipan enrobed in dark chocolate — a German pantry classic and a easy gift.",
        ["200g bar", "Dark chocolate coating", "Imported marzipan", "Great for gifting"], pastriesImage),
    ],
  },
  {
    slug: "deli",
    name: "Deli",
    tagline: "Sausage, cold cuts and prepared foods",
    image: heroImage,
    products: [
      p("bratwurst", "Fresh Bratwurst", "$10.95 / lb", "Mild, juicy, made the traditional way.",
        "Our house bratwurst is seasoned simply so the pork flavor leads. Sold fresh by the pound — pan-fry or grill gently.",
        ["Sold by the pound", "Fresh, not smoked", "Cook thoroughly", "Great with our pretzels"], heroImage),
      p("black-forest-ham", "Black Forest Ham", "$16.95 / lb", "Smoked, sliced to your thickness.",
        "Dry-cured and beechwood smoked, sliced to order at the deli counter as thin or thick as you like.",
        ["Sliced to order", "Beechwood smoked", "Vacuum sealed available", "Deli counter only"], heroImage),
    ],
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    tagline: "Always the right size",
    image: cakesImage,
    products: [
      p("gift-card", "Heidelberg Gift Card", "$25 – $200", "Redeemable in store on anything we make.",
        "Give a taste of Heidelberg. Gift cards can be used on bread, cakes, deli, chocolate and custom orders at our Arlington shop.",
        ["Choose any amount", "No expiration", "Mailed or picked up", "Redeemable in store"], cakesImage),
    ],
  },
  {
    slug: "holidays-special-occasions",
    name: "Holidays & Special Occasions",
    tagline: "Stollen, Lebkuchen and seasonal favorites",
    image: pastriesImage,
    products: [
      p("christmas-stollen", "Christmas Stollen", "$24.00", "Fruited, buttered and sugar-dusted.",
        "Our stollen is rested for weeks so butter, rum-soaked fruit and marzipan settle into one another. Available from November.",
        ["Marzipan center", "1.5 lb loaf", "Seasonal item", "Ships well as a gift"], pastriesImage),
      p("lebkuchen", "Lebkuchen Tin", "$19.50", "Spiced honey cakes in a keepsake tin.",
        "Soft honey-spice cakes on wafer bases, glazed and chocolate-dipped, packed in a decorative tin.",
        ["Assorted glazes", "Keepsake tin", "Seasonal item", "Contains nuts"], pastriesImage),
    ],
  },
  {
    slug: "pastries-cookies-and-sweets",
    name: "Pastries, Cookies and Sweets",
    tagline: "Strudel, rugulah, cookies and more",
    image: pastriesImage,
    products: [
      p("apple-strudel", "Apple Strudel", "$18.00", "Thin pastry, cinnamon apples, raisins.",
        "Stretched pastry rolled around cinnamon apples and raisins, baked until shattering-crisp. Warm briefly and serve with cream.",
        ["Serves 6–8", "Warm before serving", "Contains nuts and raisins", "Baked fresh daily"], pastriesImage),
      p("rugulah", "Rugulah Assortment", "$14.50", "Flaky rolled cookies, three fillings.",
        "Our most requested cookie: tender cream-cheese dough rolled with apricot, raspberry and chocolate fillings.",
        ["One pound box", "Three fillings", "Freezes beautifully", "Baked fresh daily"], pastriesImage),
      p("butter-cookies", "Butter Cookie Tin", "$22.00", "Piped, dipped and jam-filled classics.",
        "A traditional German cookie assortment with piped butter shapes, chocolate-dipped edges and jam centers.",
        ["Assorted shapes", "Gift tin", "Contains nuts", "Popular for holidays"], pastriesImage),
    ],
  },
  {
    slug: "picture-designs-for-cakes",
    name: "Picture Designs for Cakes",
    tagline: "Edible photo designs — $20.00 each",
    image: cakesImage,
    products: [
      p("photo-cake-design", "Edible Photo Design", "$20.00", "Your photo printed on edible sheet.",
        "Send us your photo or choose from our design library. We print on an edible sheet and apply it to any buttercream cake you order.",
        ["$20.00 per design", "Add to any cake order", "Email or bring your photo", "48 hours notice"], cakesImage),
    ],
  },
  {
    slug: "pies",
    name: "Pies",
    tagline: "Fruit, cream and holiday pies",
    image: pastriesImage,
    products: [
      p("apple-pie", "Apple Pie", "$26.00", "Butter crust, cinnamon apples.",
        "A deep-dish apple pie in an all-butter crust with just enough cinnamon. Order whole for the table or by the slice in store.",
        ["9 inch, serves 8", "All-butter crust", "Whole or by the slice", "Order ahead for holidays"], pastriesImage),
      p("cherry-pie", "Sour Cherry Pie", "$28.00", "Tart cherries under a lattice top.",
        "Sour cherries baked under a lattice crust — tart, jammy and a longtime Heidelberg favorite.",
        ["9 inch, serves 8", "Lattice top", "Sour cherry filling", "Order ahead for holidays"], pastriesImage),
    ],
  },
  {
    slug: "rolls-bagels-more",
    name: "Rolls, Bagels & More",
    tagline: "Brötchen, bagels and breakfast breads",
    image: breadsImage,
    products: [
      p("kaiser-rolls", "Kaiser Rolls", "$1.10 each", "Crisp crust, light interior.",
        "Traditional hand-shaped Kaiser rolls with a crackling crust — perfect for deli sandwiches or breakfast with butter and jam.",
        ["Sold individually or by dozen", "Baked twice daily", "Poppy or plain", "Best same day"], breadsImage),
      p("brotchen", "German Brötchen", "$1.10 each", "The everyday German breakfast roll.",
        "Small crusty rolls baked through the morning. Grab a bag on the way home and warm them for a few minutes before serving.",
        ["Sold individually or by dozen", "Baked twice daily", "Freeze and refresh", "Best same day"], breadsImage),
    ],
  },
  {
    slug: "wedding-cakes",
    name: "Wedding Cakes",
    tagline: "Tiered designs for your day",
    image: cakesImage,
    products: [
      p("classic-tiered-cake", "Classic Tiered Wedding Cake", "From $6.50 / serving",
        "Smooth buttercream, fresh or sugar flowers.",
        "We build tiered cakes to your guest count, flavor and finish. Consultations include tasting and a design sketch before you commit.",
        ["Priced per serving", "Tasting consultation", "Delivery available", "Book 3–6 months ahead"], cakesImage),
      p("grooms-cake", "Groom's Cake", "From $95.00", "Personal, playful and richly chocolate.",
        "Traditionally chocolate and always personal — we sculpt and decorate groom's cakes around a theme you choose.",
        ["Custom shapes and themes", "Serves 20–40", "Photo designs available", "Book 4 weeks ahead"], cakesImage),
    ],
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const allProducts = categories.flatMap((c) =>
  c.products.map((prod) => ({ ...prod, category: c })),
);

export const findProduct = (slug: string) =>
  allProducts.find((prod) => prod.slug === slug);

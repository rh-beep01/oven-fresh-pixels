import { createFileRoute } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ChevronDown, 
  Clock3, 
  MapPin, 
  Menu, 
  Phone, 
  ShoppingBag, 
  Star, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ChefHat, 
  Upload, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Smartphone, 
  Award,
  CreditCard,
  Cake,
  Sliders,
  User,
  Mail,
  Lock
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import officialLogo from "@/assets/heidelberg-official-logo.png";
import heroImage from "@/assets/heidelberg-hero.jpg";
import cakesImage from "@/assets/cakes-category.jpg";
import breadsImage from "@/assets/breads-category.jpg";
import pastriesImage from "@/assets/pastries-category.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heidelberg Pastry Shoppe | Modern German Bakery & Online Ordering" },
      { name: "description", content: "Order authentic German artisan breads, custom celebration cakes, fine European pastries and deli platters online. Serving Arlington, VA since 1975." },
      { property: "og:title", content: "Heidelberg Pastry Shoppe | Modern German Bakery & Custom Cakes" },
      { property: "og:description", content: "Authentic European baking crafted in Arlington since 1975. Order online with live order tracking and custom cake studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Menu categories and items with realistic pricing & descriptions
interface BakeryItem {
  id: string;
  name: string;
  germanName?: string;
  category: "breads" | "cakes" | "pastries" | "deli";
  price: number;
  badge: string;
  description: string;
  image: string;
  servings?: string;
}

const bakeryMenu: BakeryItem[] = [
  {
    id: "bread-1",
    name: "Authentic German Bauernbrot",
    germanName: "Rustikales Bauernbrot",
    category: "breads",
    price: 7.75,
    badge: "Imported German Rye",
    description: "Traditional sourdough rye loaf with a crisp, blistered crust and rich aromatic crumb. Sliced upon request.",
    image: breadsImage,
    servings: "2 lb round loaf",
  },
  {
    id: "bread-2",
    name: "Bavarian Soft Pretzels (Pack of 4)",
    germanName: "Bayrische Laugenbrezeln",
    category: "breads",
    price: 10.50,
    badge: "Baked Fresh at 6 AM",
    description: "Hand-twisted authentic lye pretzels with coarse Bavarian salt, soft and chewy interior.",
    image: breadsImage,
    servings: "4 large pretzels",
  },
  {
    id: "bread-3",
    name: "Whole Grain Sunflower Rye",
    germanName: "Sonnenblumenkernbrot",
    category: "breads",
    price: 8.25,
    badge: "Whole Grain & Seeds",
    description: "Nutrient-rich multigrain rye crusted with roasted sunflower seeds. Wolfgang's original 1975 recipe.",
    image: breadsImage,
    servings: "24 oz sliced loaf",
  },
  {
    id: "cake-1",
    name: "Black Forest Kirsch Torte",
    germanName: "Schwarzwälder Kirschtorte",
    category: "cakes",
    price: 46.00,
    badge: "Heidelberg Signature",
    description: "Layers of chocolate sponge infused with genuine Black Forest Kirschwasser, tart cherries, and real whipped cream.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
  },
  {
    id: "cake-2",
    name: "German Bee Sting Torte",
    germanName: "Bienenstich Torte",
    category: "cakes",
    price: 42.00,
    badge: "Crowd Favorite",
    description: "Brioche-style sweet cake topped with caramelized honey-glazed sliced almonds and filled with vanilla Bavarian cream.",
    image: cakesImage,
    servings: '9" round (10-12 servings)',
  },
  {
    id: "cake-3",
    name: "Bavarian Hazelnut Mousse Cake",
    germanName: "Haselnuss Mousse Torte",
    category: "cakes",
    price: 48.00,
    badge: "Gluten-Friendly Option",
    description: "Roasted Piedmont hazelnut sponge filled with velvety praline mousse and dark chocolate glaze.",
    image: cakesImage,
    servings: '8" round (10-12 servings)',
  },
  {
    id: "pastry-1",
    name: "Traditional Apple Strudel",
    germanName: "Hausgemachter Apfelstrudel",
    category: "pastries",
    price: 6.25,
    badge: "Warm & Flaky",
    description: "Paper-thin stretched dough rolled with spiced tart apples, golden raisins, and toasted buttered breadcrumbs.",
    image: pastriesImage,
    servings: "Generous individual slice",
  },
  {
    id: "pastry-2",
    name: "Almond Horn (Mandelhörnchen)",
    germanName: "Mandelhörnchen",
    category: "pastries",
    price: 4.95,
    badge: "Naturally Gluten-Free",
    description: "Chewy almond paste crescent dipped in roasted sliced almonds and Belgian dark chocolate tips.",
    image: pastriesImage,
    servings: "1 piece",
  },
  {
    id: "pastry-3",
    name: "Classic Viennese Rugelach (Dozen)",
    germanName: "Feines Butter-Rugelach",
    category: "pastries",
    price: 15.00,
    badge: "Box of 12",
    description: "Cream cheese pastry crescents filled with cinnamon walnuts, apricot jam, and chocolate.",
    image: pastriesImage,
    servings: "Assorted box of 12",
  },
  {
    id: "deli-1",
    name: "Black Forest Ham & Swiss on Rye",
    germanName: "Schwarzwälder Schinkenbrot",
    category: "deli",
    price: 11.95,
    badge: "Deli Specialty",
    description: "Smoked Black Forest ham, aged Swiss cheese, Düsseldorf mustard, and crisp butter pickles on fresh Bauernbrot.",
    image: breadsImage,
    servings: "Made to order sandwich",
  },
  {
    id: "deli-2",
    name: "Authentic German Bratwurst Roll",
    germanName: "Frische Bratwurst im Brötchen",
    category: "deli",
    price: 10.50,
    badge: "Served Hot",
    description: "Local artisan bratwurst simmered and grilled, served with warm sauerkraut and sweet Bavarian mustard in a crusty roll.",
    image: breadsImage,
    servings: "Individual meal",
  },
];

interface CartItem {
  item: BakeryItem;
  quantity: number;
}

// Order tracking mock statuses
type OrderStatusStep = "confirmed" | "baking" | "decorating" | "ready";

interface OrderTrackingData {
  orderId: string;
  customerName: string;
  itemsSummary: string;
  scheduledPickup: string;
  pickupLocation: string;
  status: OrderStatusStep;
  lastUpdated: string;
}

const mockOrders: Record<string, OrderTrackingData> = {
  "#HB-1975": {
    orderId: "#HB-1975",
    customerName: "Eleanor Vance",
    itemsSummary: 'Custom 8" Black Forest Cake (Gold Inscription) + 4x Bavarian Pretzels',
    scheduledPickup: "Today, 3:30 PM",
    pickupLocation: "2150 N. Culpeper St, Arlington (Curbside Counter #2)",
    status: "ready",
    lastUpdated: "5 minutes ago",
  },
  "#HB-8421": {
    orderId: "#HB-8421",
    customerName: "David Miller",
    itemsSummary: "2x Bauernbrot Sourdough, 1x Dozen Rugelach, 2x Apple Strudel",
    scheduledPickup: "Tomorrow, 9:00 AM",
    pickupLocation: "2150 N. Culpeper St, Arlington (Main Bakery Counter)",
    status: "baking",
    lastUpdated: "20 minutes ago",
  },
};

function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "breads" | "cakes" | "pastries" | "deli">("all");

  // Cart & Checkout State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [pickupTime, setPickupTime] = useState("Today, 3:00 PM – 4:00 PM");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "shoppay" | "counter">("card");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardExp, setCardExp] = useState("08/28");
  const [cardCvc, setCardCvc] = useState("789");
  const [orderPlacedMessage, setOrderPlacedMessage] = useState<string | null>(null);

  // Custom Cake Studio State
  const [cakeOccasion, setCakeOccasion] = useState("Birthday");
  const [cakeSize, setCakeSize] = useState({ name: '8" Round (15–20 guests)', price: 65 });
  const [cakeSponge, setCakeSponge] = useState("German Chocolate Fudge");
  const [cakeFilling, setCakeFilling] = useState("Authentic Bavarian Vanilla Custard");
  const [cakeInscription, setCakeInscription] = useState("Happy 50th Birthday!");
  const [cakeDate, setCakeDate] = useState("Saturday (72 hrs notice)");
  const [cakeCustomerName, setCakeCustomerName] = useState("");
  const [cakeCustomerPhone, setCakeCustomerPhone] = useState("");
  const [cakeCustomerEmail, setCakeCustomerEmail] = useState("");
  const [cakeSubmitted, setCakeSubmitted] = useState(false);

  // Order Tracker State
  const [trackingInput, setTrackingInput] = useState("#HB-1975");
  const [activeTracking, setActiveTracking] = useState<OrderTrackingData>(mockOrders["#HB-1975"]!);
  const [notificationToast, setNotificationToast] = useState<string | null>(null);

  // Helper to add item to cart
  const addToCart = (item: BakeryItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => (i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.item.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const cartItemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleCheckoutMock = () => {
    const finalName = customerName.trim() || "Valued Customer";
    const newOrderId = `#HB-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderPlacedMessage(`Thank you ${finalName}! Order ${newOrderId} is placed. SMS confirmation sent to ${customerPhone || "(703) 555-0199"}.`);
    
    setActiveTracking({
      orderId: newOrderId,
      customerName: finalName,
      itemsSummary: `${cartItemCount} item(s) • Paid via ${paymentMethod === "card" ? "Credit Card" : paymentMethod === "shoppay" ? "Shop Pay" : "Pay at Counter"}`,
      scheduledPickup: pickupTime,
      pickupLocation: "2150 N. Culpeper St, Arlington, VA (Counter #1)",
      status: "confirmed",
      lastUpdated: "Just now",
    });

    setCart([]);
    setTimeout(() => {
      setCartOpen(false);
      setOrderPlacedMessage(null);
      const trackElem = document.getElementById("track-order");
      if (trackElem) {
        trackElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 2400);
  };

  // Staff simulation switch
  const handleSimulateStatusChange = (newStatus: OrderStatusStep) => {
    setActiveTracking((prev) => ({
      ...prev,
      status: newStatus,
      lastUpdated: "Just now (via Kitchen Tablet)",
    }));
    const statusLabels: Record<OrderStatusStep, string> = {
      confirmed: "Order Confirmed via Shopify POS",
      baking: "Now in Hearth Oven: Bakers crafting fresh batch",
      decorating: "In Finishing: Decorators applying piping & packaging",
      ready: "Order Ready: SMS sent to customer for Pickup!",
    };
    setNotificationToast(`📱 Customer SMS Sent: "${statusLabels[newStatus]}"`);
    setTimeout(() => setNotificationToast(null), 4500);
  };

  const filteredMenu =
    selectedCategory === "all"
      ? bakeryMenu
      : bakeryMenu.filter((i) => i.category === selectedCategory);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      {/* Top Banner with Shopify & Heritage Notice */}
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-accent">
            <Award className="size-3.5" /> 50 Years in Arlington (Est. 1975)
          </span>
          <p className="mx-auto sm:mx-0">
            <strong>Authentic German Breads, Cakes & Delicatessen</strong> — Order ahead for scheduled pickup!
          </p>
          <a
            href="#track-order"
            className="hidden items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline md:inline-flex"
          >
            Track Existing Order &rarr;
          </a>
        </div>
      </div>

      {/* Main Navigation with OFFICIAL WEBSITE LOGO */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Heidelberg Pastry Shoppe home" className="flex items-center gap-3 shrink-0 py-1">
            <img
              src={officialLogo}
              alt="Heidelberg Pastry Shoppe Official Logo"
              className="h-13 w-auto object-contain transition-transform hover:scale-102"
              width="220"
              height="60"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#menu">Bakery Menu & Pricing</a>
            <a className="nav-link" href="#cake-builder">Custom Cake Studio</a>
            <a className="nav-link" href="#track-order">Live Order Tracker</a>
            <a className="nav-link" href="#reviews">Reviews</a>
            <a className="nav-link" href="#story">Our Story</a>
            <a className="nav-link" href="#visit">Visit & Hours</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:7035278394"
              className="hidden items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-accent md:inline-flex"
            >
              <Phone className="size-3.5 text-accent" /> (703) 527-8394
            </a>

            {/* Cart Trigger Button */}
            <Button
              variant="bakery"
              size="sm"
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 font-semibold text-xs h-10 px-4 cursor-pointer"
            >
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">Order Tray</span>
              {cartItemCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground animate-in zoom-in-50">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden cursor-pointer"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileNavOpen && (
          <nav className="border-t border-border bg-background px-6 py-5 shadow-xl lg:hidden animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a href="#menu" onClick={() => setMobileNavOpen(false)} className="py-1">Bakery Menu & Pricing</a>
              <a href="#cake-builder" onClick={() => setMobileNavOpen(false)} className="py-1">Custom Cake Studio</a>
              <a href="#track-order" onClick={() => setMobileNavOpen(false)} className="py-1">Live Order Tracker</a>
              <a href="#reviews" onClick={() => setMobileNavOpen(false)} className="py-1">Customer Reviews</a>
              <a href="#story" onClick={() => setMobileNavOpen(false)} className="py-1">Our Heritage (Since 1975)</a>
              <a href="#visit" onClick={() => setMobileNavOpen(false)} className="py-1">Hours & Location</a>
              <div className="pt-2 border-t border-border">
                <Button
                  onClick={() => {
                    setMobileNavOpen(false);
                    setCartOpen(true);
                  }}
                  variant="bakery"
                  className="w-full justify-center"
                >
                  View Order ({cartItemCount} items)
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative min-h-[660px] border-b border-border md:min-h-[720px] flex items-center">
        <img
          src={heroImage}
          alt="European cakes, pastries and breads arranged on a bakery table"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="hero-shade absolute inset-0" />
        
        <div className="relative mx-auto flex w-full max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl text-hero-foreground">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-xs">
              <Sparkles className="size-3.5" /> Authentic German Master Bakery & Deli
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.12] sm:text-6xl lg:text-6xl text-balance">
              A little piece of Heidelberg, baked fresh every day.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
              Crusty European rye breads with imported German flour, hand-rolled pretzels, milestone celebration cakes, and delicatessen favorites—crafted with pride in Arlington since 1975.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="bakery" size="bakery" className="bg-accent text-accent-foreground hover:bg-white hover:text-foreground">
                <a href="#menu">
                  Browse Menu & Order <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="bakeryOutline" size="bakery" className="border-hero-foreground/60 text-hero-foreground hover:bg-white/10">
                <a href="#cake-builder">Design a Custom Cake</a>
              </Button>
              <Button asChild variant="ghost" size="bakery" className="text-hero-muted hover:text-white">
                <a href="#track-order">Track My Order &rarr;</a>
              </Button>
            </div>

            {/* Live Trust Metrics Strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 text-xs text-hero-muted">
              <div>
                <p className="font-display text-lg font-bold text-white">4.9 ★</p>
                <p>1,400+ Local Reviews</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">1975</p>
                <p>Wolfgang & Carla’s Heritage</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">Shopify Ready</p>
                <p>Real-Time Order Tracking</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#menu"
          aria-label="Scroll to bakery menu"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-hero-foreground/70 hover:text-white transition-colors"
        >
          <ChevronDown className="size-7 animate-bounce" />
        </a>
      </section>

      {/* Feature Highlights Proof Bar */}
      <section className="border-b border-border bg-card py-7">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <ChefHat className="size-6 text-accent shrink-0" />
              <div>
                <strong className="block text-sm font-semibold">German Master Bakers</strong>
                <span className="text-xs text-muted-foreground">Flour imported directly from Germany</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShoppingBag className="size-6 text-accent shrink-0" />
              <div>
                <strong className="block text-sm font-semibold">Scheduled Local Pickup</strong>
                <span className="text-xs text-muted-foreground">Select your convenient pickup hour</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="size-6 text-accent shrink-0" />
              <div>
                <strong className="block text-sm font-semibold">Live SMS Order Tracking</strong>
                <span className="text-xs text-muted-foreground">Oven ➔ Decorating ➔ Ready alerts</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-accent shrink-0" />
              <div>
                <strong className="block text-sm font-semibold">Instant Shop Pay Checkout</strong>
                <span className="text-xs text-muted-foreground">1-click secure payment guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Modern Bakery Menu with Prices & Order Options */}
      <section id="menu" className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-8">
            <div>
              <p className="eyebrow">Direct From Our Hearth Ovens</p>
              <h2 className="section-title">Explore Our Bakery & Order Ahead</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every loaf, torte, and pastry is baked in Arlington each morning. Add to your order tray and select your preferred pickup time slot.
            </p>
          </div>

          {/* STICKY CATEGORY NAV BAR: Stays pinned while scrolling through the menu */}
          <div className="sticky top-20 z-30 mb-8 rounded-lg border border-border bg-card/90 px-4 py-3 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between gap-2 overflow-x-auto">
              <div className="flex items-center gap-2 shrink-0">
                <Sliders className="size-4 text-accent hidden sm:inline" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground hidden sm:inline">
                  Categories:
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: "all", label: "All Items" },
                  { id: "breads", label: "Artisan Breads & Pretzels" },
                  { id: "cakes", label: "Milestone Cakes & Tortes" },
                  { id: "pastries", label: "European Pastries" },
                  { id: "deli", label: "Deli Sandwiches & Savory" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid with PRICE IN BOTTOM-RIGHT OF BOX */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-border bg-card shadow-xs transition-all hover:shadow-md hover:border-accent/60"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold text-primary-foreground backdrop-blur-xs">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-5 pb-3">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    {item.germanName && (
                      <p className="text-xs italic text-muted-foreground mt-0.5">{item.germanName}</p>
                    )}

                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>

                    {item.servings && (
                      <p className="mt-3 inline-block rounded-xs bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                        {item.servings}
                      </p>
                    )}
                  </div>
                </div>

                {/* BOTTOM SECTION: Left has pickup info, RIGHT has PROMINENT PRICE & Add button */}
                <div className="border-t border-border/80 p-4 bg-muted/30 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-muted-foreground block">Hearth Pickup</span>
                    <span className="text-xs font-semibold text-foreground/80">Fresh Daily</span>
                  </div>

                  {/* Lower-Right Price & Action Block */}
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Price</span>
                      <span className="font-display text-lg font-bold text-accent">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <Button
                      variant="bakery"
                      size="sm"
                      onClick={() => addToCart(item)}
                      className="font-semibold text-xs cursor-pointer shadow-xs"
                    >
                      <Plus className="size-3.5" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-secondary p-8 rounded-md border border-border">
            <h3 className="font-display text-xl font-bold">Planning an Event or Need a Custom Cake?</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Use our interactive Custom Cake Studio below to select tiers, Bavarian fillings, custom piping messages, and enter your details to secure your celebration date.
            </p>
            <Button asChild variant="bakery" className="mt-5 cursor-pointer">
              <a href="#cake-builder">Open Custom Cake Studio &rarr;</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Custom Cake & Catering Studio with Customer Contact Fields */}
      <section id="cake-builder" className="border-y border-border bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow">Interactive Cake Studio</span>
            <h2 className="section-title">Design Your Custom Celebration Cake</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Eliminate phone tag and paper forms. Customize size, fillings, and piping in seconds with an instant price estimate, contact details, and 72-hour lead time scheduling.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Interactive Configurator */}
            <div className="space-y-8 rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs lg:col-span-7">
              {/* Step 1: Occasion */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Step 1: What is the Occasion?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {["Birthday", "Wedding", "Anniversary", "Graduation", "Milestone", "Corporate"].map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setCakeOccasion(occ)}
                      className={`rounded-md border p-3 text-left text-xs font-semibold transition-all cursor-pointer ${
                        cakeOccasion === occ
                          ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                          : "border-border bg-background text-muted-foreground hover:border-foreground/30"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Size & Servings */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Step 2: Choose Cake Size & Servings
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    { name: '6" Round (8–10 guests)', price: 45 },
                    { name: '8" Round (15–20 guests)', price: 65 },
                    { name: '10" Round (25–30 guests)', price: 85 },
                    { name: '1/4 Sheet (25 guests)', price: 75 },
                    { name: '1/2 Sheet (50 guests)', price: 135 },
                    { name: "2-Tier Wedding Cake (50–60 guests)", price: 240 },
                  ].map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setCakeSize(s)}
                      className={`flex items-center justify-between rounded-md border p-3.5 text-left text-xs transition-all cursor-pointer ${
                        cakeSize.name === s.name
                          ? "border-accent bg-accent/15 text-foreground font-bold ring-1 ring-accent"
                          : "border-border bg-background text-foreground/80 hover:border-foreground/30"
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="font-display font-bold text-accent">${s.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Sponge */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Step 3: Cake Sponge Layer
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    "German Chocolate Fudge",
                    "Classic European Vanilla",
                    "Almond Sponge",
                    "Red Velvet",
                    "Hazelnut Genoise",
                    "Lemon Chiffon",
                  ].map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setCakeSponge(flavor)}
                      className={`rounded-md border p-2.5 text-xs transition-all cursor-pointer ${
                        cakeSponge === flavor
                          ? "border-accent bg-accent/15 font-semibold text-foreground ring-1 ring-accent"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Filling & Cream */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Step 4: Bavarian Filling & Preserves
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Authentic Bavarian Vanilla Custard",
                    "Black Forest Tart Cherries & Cream",
                    "Rich Dark Chocolate Mousse",
                    "Fresh Strawberries & Whipped Cream",
                    "Raspberry Purée & Cream Cheese",
                  ].map((fill) => (
                    <button
                      key={fill}
                      onClick={() => setCakeFilling(fill)}
                      className={`rounded-md border p-2.5 text-left text-xs transition-all cursor-pointer ${
                        cakeFilling === fill
                          ? "border-accent bg-accent/15 font-semibold text-foreground ring-1 ring-accent"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {fill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Piping Inscription */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Step 5: Custom Piping Inscription on Cake (Included)
                </label>
                <input
                  type="text"
                  value={cakeInscription}
                  onChange={(e) => setCakeInscription(e.target.value)}
                  placeholder="e.g. Happy 40th Birthday Marcus!"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* Step 6: Customer Contact Details */}
              <div className="border-t border-border pt-6 space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <User className="size-3.5" /> Step 6: Your Contact Details for Bakery Confirmation
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground block mb-1">Full Name *</span>
                    <input
                      type="text"
                      value={cakeCustomerName}
                      onChange={(e) => setCakeCustomerName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground block mb-1">Phone Number (SMS) *</span>
                    <input
                      type="tel"
                      value={cakeCustomerPhone}
                      onChange={(e) => setCakeCustomerPhone(e.target.value)}
                      placeholder="(703) 555-0199"
                      className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted-foreground block mb-1">Email Address *</span>
                    <input
                      type="email"
                      value={cakeCustomerEmail}
                      onChange={(e) => setCakeCustomerEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 7: Pickup Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Step 7: Requested Pickup Day (Minimum 72 Hours Lead Time)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Friday (3 days notice)",
                    "Saturday (72 hrs notice)",
                    "Sunday (Weekend pickup)",
                    "Next Tuesday",
                    "Custom Date",
                  ].map((d) => (
                    <button
                      key={d}
                      onClick={() => setCakeDate(d)}
                      className={`rounded-md border px-3.5 py-2 text-xs font-medium transition-all cursor-pointer ${
                        cakeDate === d
                          ? "border-accent bg-accent/15 text-foreground font-bold"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real-time Cake Summary Card & Quote Lock */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="rounded-lg border border-border bg-primary text-primary-foreground p-6 sm:p-8 shadow-lg">
                <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent font-bold">Live Configuration</span>
                    <h3 className="font-display text-2xl font-bold mt-1">Custom {cakeOccasion} Cake</h3>
                  </div>
                  <span className="font-display text-3xl font-bold text-accent">${cakeSize.price}</span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs text-primary-muted">
                  <div className="flex justify-between">
                    <span>Size & Servings:</span>
                    <strong className="text-primary-foreground text-right">{cakeSize.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sponge Layer:</span>
                    <strong className="text-primary-foreground text-right">{cakeSponge}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Bavarian Filling:</span>
                    <strong className="text-primary-foreground text-right">{cakeFilling}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Piping Inscription:</span>
                    <strong className="text-accent text-right italic font-serif">"{cakeInscription || "None"}"</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer:</span>
                    <strong className="text-primary-foreground text-right">{cakeCustomerName || "Eleanor Vance"}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Scheduled Pickup:</span>
                    <strong className="text-primary-foreground text-right">{cakeDate}</strong>
                  </div>
                </div>

                <div className="mt-6 rounded-md bg-white/10 p-3 text-[11px] text-primary-muted flex items-start gap-2">
                  <Calendar className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong>72-Hour Lead Time Respected:</strong> Wolfgang & our master cake decorators prepare sponges & creams fresh for your scheduled time.
                  </span>
                </div>

                {cakeSubmitted ? (
                  <div className="mt-6 rounded-md bg-emerald-950/80 border border-emerald-500/40 p-4 text-center animate-in zoom-in-95">
                    <CheckCircle2 className="size-8 text-emerald-400 mx-auto mb-2" />
                    <strong className="block text-sm text-emerald-200">Custom Cake Order Received!</strong>
                    <p className="mt-1 text-xs text-emerald-300">
                      Ticket <strong>#HB-CUSTOM-92</strong> created for {cakeCustomerName || "Eleanor Vance"}. Confirmation sent via SMS.
                    </p>
                  </div>
                ) : (
                  <Button
                    variant="bakery"
                    onClick={() => {
                      setCakeSubmitted(true);
                      setTimeout(() => setCakeSubmitted(false), 8000);
                    }}
                    className="mt-6 w-full justify-center bg-accent text-accent-foreground font-bold hover:bg-white hover:text-foreground h-12 text-sm cursor-pointer"
                  >
                    Lock in Date & Request Cake Order &rarr;
                  </Button>
                )}

                <p className="mt-3 text-center text-[11px] text-primary-muted">
                  Questions? Call Wolfgang's team directly at (703) 527-8394
                </p>
              </div>

              {/* Photo Upload Feature Highlight */}
              <div className="rounded-lg border border-dashed border-border bg-card p-5 text-center">
                <Upload className="size-6 text-accent mx-auto mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Have an Inspiration Photo?</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our Shopify customer portal allows direct image uploads for custom wedding tiers & photo cakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Live Order Status Tracker (The Shopify Transformation Demo) */}
      <section id="track-order" className="py-20 sm:py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow">Shopify Post-Purchase Experience</span>
            <h2 className="section-title">Live Order Status & Pickup Tracker</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              No more customers calling the counter to ask <em>"Is my cake ready?"</em>. With Shopify, customers track their order progress live via SMS link from hearth oven to curbside pickup.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6 sm:p-10 shadow-sm">
            {/* Tracking Search & Presets */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
              <div className="flex-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Enter Bakery Order Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder="#HB-1975"
                    className="w-full max-w-xs rounded-md border border-input bg-background px-3.5 py-2 text-sm font-semibold focus:border-accent focus:outline-none"
                  />
                  <Button
                    variant="bakery"
                    size="sm"
                    onClick={() => {
                      if (mockOrders[trackingInput]) {
                        setActiveTracking(mockOrders[trackingInput]);
                      }
                    }}
                  >
                    Track
                  </Button>
                </div>
              </div>

              {/* Demo quick selector */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Try Demo Orders:
                </span>
                <div className="flex gap-2">
                  {Object.keys(mockOrders).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setTrackingInput(code);
                        if (mockOrders[code]) {
                          setActiveTracking(mockOrders[code]);
                        }
                      }}
                      className={`rounded-xs border px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTracking.orderId === code
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-muted text-muted-foreground border-border hover:bg-secondary"
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Order Card */}
            <div className="mt-6 rounded-md bg-secondary/40 p-4 border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block rounded-xs bg-accent/20 px-2 py-0.5 text-[11px] font-bold text-accent-foreground uppercase tracking-wide">
                  Active Order: {activeTracking.orderId}
                </span>
                <h4 className="mt-1 text-sm font-bold text-foreground">
                  Customer: {activeTracking.customerName}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">{activeTracking.itemsSummary}</p>
              </div>
              <div className="text-right sm:border-l sm:border-border sm:pl-6">
                <span className="text-xs text-muted-foreground block">Scheduled Pickup:</span>
                <strong className="text-sm font-display text-foreground">{activeTracking.scheduledPickup}</strong>
                <span className="text-[11px] text-accent block mt-0.5 font-medium">2150 N. Culpeper St</span>
              </div>
            </div>

            {/* 4-Step Animated Pipeline */}
            <div className="mt-10">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-5 left-8 right-8 h-1 bg-border hidden sm:block -z-0" />
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-2 relative z-10">
                  {[
                    { id: "confirmed", label: "1. Order Confirmed", desc: "Payment captured via Shop Pay" },
                    { id: "baking", label: "2. In the Oven", desc: "Master bakers crafting dough" },
                    { id: "decorating", label: "3. Finishing & Packaging", desc: "Icing, decoration & boxing" },
                    { id: "ready", label: "4. Ready for Pickup", desc: "On counter at Culpeper St" },
                  ].map((step, idx) => {
                    const stepOrder: OrderStatusStep[] = ["confirmed", "baking", "decorating", "ready"];
                    const currentIdx = stepOrder.indexOf(activeTracking.status);
                    const isPassed = currentIdx >= idx;
                    const isCurrent = activeTracking.status === step.id;

                    return (
                      <div key={step.id} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2">
                        <div
                          className={`flex size-10 items-center justify-center rounded-full font-bold text-xs transition-all shadow-sm ${
                            isCurrent
                              ? "bg-accent text-accent-foreground ring-4 ring-accent/30 scale-110"
                              : isPassed
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground border border-border"
                          }`}
                        >
                          {isPassed ? <CheckCircle2 className="size-5" /> : idx + 1}
                        </div>
                        <div>
                          <strong
                            className={`block text-xs font-bold ${
                              isCurrent ? "text-accent font-display text-sm" : isPassed ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {step.label}
                          </strong>
                          <span className="text-[11px] text-muted-foreground block max-w-[160px] mx-auto">
                            {step.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Owner & Staff Interactive Simulator */}
            <div className="mt-12 rounded-lg border-2 border-accent/40 bg-accent/10 p-6">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-2">
                <ChefHat className="size-4" /> Bakery Staff & Kitchen Simulator (For Wolfgang & Team)
              </div>
              <p className="text-xs text-foreground/80 mb-4">
                <strong>Try it yourself:</strong> Click any button below to see how Heidelberg’s kitchen staff updates the customer’s phone in 1 tap from an iPad:
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: "confirmed", label: "Set: Confirmed" },
                    { id: "baking", label: "Set: In Oven" },
                    { id: "decorating", label: "Set: Decorating" },
                    { id: "ready", label: "Set: Ready for Pickup 🔔" },
                  ] as const
                ).map((btn) => (
                  <Button
                    key={btn.id}
                    size="sm"
                    variant={activeTracking.status === btn.id ? "bakery" : "outline"}
                    onClick={() => handleSimulateStatusChange(btn.id)}
                    className="text-xs cursor-pointer"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {notificationToast && (
                <div className="mt-4 rounded-md bg-primary text-primary-foreground p-3 text-xs font-medium animate-in slide-in-from-bottom-2 flex items-center justify-between">
                  <span>{notificationToast}</span>
                  <span className="text-[10px] text-accent font-bold">Simulated Notification</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Customer Reviews & Social Proof */}
      <section id="reviews" className="py-20 sm:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Arlington Community Love</p>
              <h2 className="section-title">Loved by Washington Families Since 1975</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-500" />
                ))}
              </div>
              <span>4.9 / 5.0 Rating (Google & Yelp)</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Wolfgang’s Black Forest cake was the centerpiece of our parents’ 50th anniversary. Authentic Bavarian cream, real Kirschwasser, and not overly sweet American icing. Absolutely world-class.",
                author: "Sarah M.",
                location: "North Arlington, VA",
                tag: "Custom Anniversary Cake",
              },
              {
                quote:
                  "As a German expat living in DC, this is the only bakery in the DMV where the rye bread has that true crust and dense, sourdough crumb. We drive across the bridge every Saturday morning.",
                author: "Marcus & Greta H.",
                location: "Washington, D.C.",
                tag: "Weekly Bauernbrot & Pretzels",
              },
              {
                quote:
                  "Ordering online and knowing exactly when my order is fresh and ready for pickup is a game-changer. No phone tag, no waiting in line with two toddlers. Heidelberg is a neighborhood treasure.",
                author: "Elena K.",
                location: "Ballston, Arlington",
                tag: "Online Pickup Customer",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-md border border-border bg-background p-6 shadow-xs"
              >
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90 italic font-serif">
                    "{review.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between">
                  <div>
                    <strong className="block text-xs font-bold text-foreground">{review.author}</strong>
                    <span className="text-[11px] text-muted-foreground">{review.location}</span>
                  </div>
                  <span className="rounded-xs bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Heritage & Wolfgang's Story */}
      <section id="story" className="border-b border-border bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative">
            <img
              src={breadsImage}
              alt="Fresh European breads and pretzels"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover rounded-md shadow-md"
            />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-lg rounded-xs">
              <p className="font-display text-2xl font-bold">Since 1975</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Arlington, Virginia</p>
            </div>
          </div>
          <div className="lg:pl-6">
            <p className="eyebrow">The Heidelberg Story</p>
            <h2 className="section-title max-w-xl">German Master Craftsmanship, Part of Washington Life.</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-sm sm:text-base">
              Wolfgang Büchler arrived in Washington from Heidelberg, Germany with master baking diplomas and a vision. In 1975, Wolfgang and Carla opened their doors on Culpeper Street, introducing genuine European hearth breads made with imported flour when most of the area had only tasted factory white bread.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-sm sm:text-base">
              Over the past 50 years, Heidelberg has baked for White House state events, European embassies, wedding couples, and three generations of local neighborhood families. Today, we combine that same master craftsmanship with modern pickup convenience.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Store Hours, Directions & Visit */}
      <section id="visit" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Come Visit Us</p>
            <h2 className="section-title">Your Neighborhood Bakery, With a European Accent.</h2>
          </div>
          <div className="grid border border-border bg-card rounded-md overflow-hidden md:grid-cols-3">
            <div className="visit-panel">
              <MapPin />
              <h3>Visit the Shoppe</h3>
              <p>
                2150 N. Culpeper Street<br />
                Arlington, VA 22207
              </p>
              <a
                href="https://maps.google.com/?q=2150+N+Culpeper+Street+Arlington+VA+22207"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <ArrowRight />
              </a>
            </div>
            <div className="visit-panel">
              <Clock3 />
              <h3>Bakery Opening Hours</h3>
              <p>
                Tuesday–Friday · 6:30am–5:00pm<br />
                Saturday · 8:00am–4:00pm<br />
                Sunday · 8:00am–1:00pm<br />
                <span className="font-semibold text-foreground">Monday · Closed for Hearth Baking</span>
              </p>
            </div>
            <div className="visit-panel">
              <Phone />
              <h3>Talk to Our Team</h3>
              <p>
                Questions about custom wedding cakes, catering platters, or order status? We are always happy to help.
              </p>
              <a href="tel:7035278394">(703) 527-8394 <ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Pitch Deck / Why Shopify Transformation Bar */}
      <section className="bg-primary text-primary-foreground py-12 border-t border-accent/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Business Modernization</span>
              <h3 className="font-display text-2xl font-bold mt-1">Ready to bring Heidelberg onto Shopify?</h3>
              <p className="text-xs text-primary-muted mt-2">
                Replace slow WordPress plugins, eliminate paper fax orders, and save 20+ hours of staff phone calls every week with automated order notifications and 1-click Shop Pay.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="bakery" className="bg-accent text-accent-foreground hover:bg-white hover:text-foreground font-bold">
                <a href="mailto:info@heidelbergbakery.com?subject=New%20Website%20Proposal%20Review">
                  Schedule Walkthrough &rarr;
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with OFFICIAL WEBSITE LOGO */}
      <footer className="bg-primary/95 py-12 text-primary-foreground border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <img
              src={officialLogo}
              alt="Heidelberg Pastry Shoppe Official Logo"
              loading="lazy"
              width="220"
              height="60"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-muted">
              Authentic German bakery, wedding cakes, and European delicatessen serving Arlington, Virginia since 1975.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-primary-muted">
            <a href="#menu" className="hover:text-primary-foreground">Menu & Pricing</a>
            <a href="#cake-builder" className="hover:text-primary-foreground">Custom Cakes</a>
            <a href="#track-order" className="hover:text-primary-foreground">Order Tracker</a>
            <a href="#reviews" className="hover:text-primary-foreground">Reviews</a>
            <a href="#story" className="hover:text-primary-foreground">Our Story</a>
            <a href="#visit" className="hover:text-primary-foreground">Visit</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/15 px-5 pt-5 text-xs text-primary-muted lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 1975–2026 Heidelberg Pastry Shoppe. All rights reserved.</span>
          <span>2150 N. Culpeper St, Arlington, VA 22207</span>
        </div>
      </footer>

      {/* FLOATING ACTION WIDGET: Always visible on screen as the user scrolls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
        <Button
          onClick={() => setCartOpen(true)}
          variant="bakery"
          className="shadow-2xl flex items-center gap-2 text-xs font-bold h-11 px-4 border border-accent/40 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
        >
          <ShoppingBag className="size-4 text-accent" />
          <span>Order Tray</span>
          {cartItemCount > 0 && (
            <span className="rounded-full bg-accent text-accent-foreground px-2 py-0.5 text-[11px] font-bold">
              {cartItemCount}
            </span>
          )}
        </Button>

        <Button asChild variant="bakery" className="shadow-2xl text-xs font-bold h-11 px-4 bg-accent text-accent-foreground hover:bg-white hover:text-foreground cursor-pointer">
          <a href="#cake-builder">
            <Cake className="size-4" /> Design Custom Cake
          </a>
        </Button>
      </div>

      {/* Cart Drawer Slide-Over Modal with CUSTOMER DETAILS & PAYMENT FORM */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in-50">
          <div className="w-full max-w-md bg-card text-card-foreground shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300 border-l border-border">
            {/* Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-muted/40">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-accent" />
                <h3 className="font-display font-bold text-lg">Your Bakery Tray</h3>
                <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-bold">
                  {cartItemCount}
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>

            {/* Cart Items List & Customer Details Form */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground">
                  <ShoppingBag className="size-12 mx-auto mb-3 text-muted-foreground/40" />
                  <p className="font-display text-base font-bold text-foreground">Your tray is empty</p>
                  <p className="text-xs mt-1">Browse our fresh loaves, cakes, and pastries to add items.</p>
                  <Button variant="bakery" size="sm" onClick={() => setCartOpen(false)} className="mt-5 cursor-pointer">
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                      Order Items
                    </span>
                    {cart.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3 border-b border-border pb-3"
                      >
                        <div className="flex-1">
                          <strong className="block text-xs font-bold text-foreground">{item.name}</strong>
                          <span className="text-xs text-accent font-semibold">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 border border-border rounded-md px-2 py-1 bg-background">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="text-xs font-bold min-w-4 text-center">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <span className="text-xs font-display font-bold text-foreground min-w-14 text-right">
                          ${(item.price * quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pickup Slot Selector */}
                  <div className="rounded-md bg-secondary p-4 border border-border space-y-2">
                    <label className="block text-xs font-bold text-foreground flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-accent" /> Select Pickup Window (Culpeper St)
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full rounded-md border border-input bg-background p-2 text-xs font-semibold focus:border-accent focus:outline-none cursor-pointer"
                    >
                      <option value="Today, 3:00 PM – 4:00 PM">Today, 3:00 PM – 4:00 PM</option>
                      <option value="Today, 4:00 PM – 5:00 PM">Today, 4:00 PM – 5:00 PM</option>
                      <option value="Tomorrow, 8:00 AM – 9:00 AM">Tomorrow, 8:00 AM – 9:00 AM</option>
                      <option value="Tomorrow, 11:00 AM – 12:00 PM">Tomorrow, 11:00 AM – 12:00 PM</option>
                      <option value="Saturday, 9:00 AM – 10:00 AM">Saturday, 9:00 AM – 10:00 AM</option>
                    </select>
                  </div>

                  {/* CUSTOMER CONTACT INFORMATION */}
                  <div className="rounded-md border border-border p-4 bg-card space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                      <User className="size-3.5" /> Customer Details for Pickup
                    </span>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Eleanor Vance"
                        className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Phone Number (For SMS Ready Alert) *</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(703) 555-0199"
                        className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Email (Digital Receipt) *</label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full rounded-md border border-input bg-background p-2 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* PAYMENT METHOD SELECTION & DEMO PAYMENT FORM */}
                  <div className="rounded-md border border-border p-4 bg-card space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <CreditCard className="size-3.5 text-accent" /> Payment Method (Demo)
                    </span>
                    
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`rounded-md border p-2 text-center text-[11px] font-semibold transition-all cursor-pointer ${
                          paymentMethod === "card"
                            ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        Credit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("shoppay")}
                        className={`rounded-md border p-2 text-center text-[11px] font-semibold transition-all cursor-pointer ${
                          paymentMethod === "shoppay"
                            ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        Shop Pay
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("counter")}
                        className={`rounded-md border p-2 text-center text-[11px] font-semibold transition-all cursor-pointer ${
                          paymentMethod === "counter"
                            ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        Pay at Store
                      </button>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-2 pt-2 border-t border-border">
                        <div>
                          <label className="text-[10px] text-muted-foreground block mb-0.5">Card Number</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              className="w-full rounded-md border border-input bg-background p-2 text-xs font-mono focus:border-accent focus:outline-none"
                            />
                            <Lock className="size-3 text-muted-foreground absolute right-2.5 top-2.5" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-0.5">Expires</label>
                            <input
                              type="text"
                              value={cardExp}
                              onChange={(e) => setCardExp(e.target.value)}
                              className="w-full rounded-md border border-input bg-background p-2 text-xs font-mono focus:border-accent focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-0.5">CVC</label>
                            <input
                              type="text"
                              value={cardCvc}
                              onChange={(e) => setCardCvc(e.target.value)}
                              className="w-full rounded-md border border-input bg-background p-2 text-xs font-mono focus:border-accent focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "shoppay" && (
                      <div className="rounded-md bg-purple-950/20 border border-purple-500/30 p-2.5 text-center text-xs text-purple-800 dark:text-purple-300">
                        <span className="font-bold">⚡ 1-Click Shop Pay Checkout</span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">Verified via SMS 6-digit code for 50% faster checkout.</p>
                      </div>
                    )}

                    {paymentMethod === "counter" && (
                      <div className="rounded-md bg-secondary p-2.5 text-center text-xs text-muted-foreground">
                        <span>Pay with cash or card at the pickup counter (2150 N. Culpeper St).</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Footer with Subtotals & Submit Checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-border bg-muted/40 space-y-3">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Estimated Tax (VA 6%)</span>
                  <span className="font-semibold text-foreground">${(cartTotal * 0.06).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-foreground border-t border-border pt-2">
                  <span>Total Due</span>
                  <span className="font-display text-base text-accent">
                    ${(cartTotal * 1.06).toFixed(2)}
                  </span>
                </div>

                {orderPlacedMessage ? (
                  <div className="rounded-md bg-emerald-900/90 text-emerald-100 p-3 text-xs text-center font-bold animate-in zoom-in-95">
                    {orderPlacedMessage}
                  </div>
                ) : (
                  <Button
                    variant="bakery"
                    onClick={handleCheckoutMock}
                    className="w-full justify-center bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-bold h-12 text-sm cursor-pointer"
                  >
                    Confirm & Place Bakery Order &rarr;
                  </Button>
                )}
                <p className="text-[10px] text-center text-muted-foreground">
                  Secured by Shopify • Real-time SMS status tracking included
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

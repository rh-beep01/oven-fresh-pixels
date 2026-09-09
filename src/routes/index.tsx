import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Clock3, MapPin, Menu, Phone, ShoppingBag, Star, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/heidelberg-logo.png.asset.json";
import heroImage from "@/assets/heidelberg-hero.jpg";
import cakesImage from "@/assets/cakes-category.jpg";
import breadsImage from "@/assets/breads-category.jpg";
import pastriesImage from "@/assets/pastries-category.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heidelberg Pastry Shoppe | German Bakery Arlington" },
      { name: "description", content: "Discover authentic German breads, cakes, pastries and deli favorites from Heidelberg Pastry Shoppe in Arlington, Virginia." },
      { property: "og:title", content: "Heidelberg Pastry Shoppe | Arlington, VA" },
      { property: "og:description", content: "Authentic German breads, cakes, pastries and deli favorites, crafted in Arlington since 1975." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const shopUrl = "https://heidelbergbakery.com/shop/";

const categories = [
  { title: "Celebration Cakes", note: "Buttercream, mousse & custom designs", image: cakesImage, href: "https://heidelbergbakery.com/product-category/cakes/" },
  { title: "Breads & Pretzels", note: "German flour, baked fresh daily", image: breadsImage, href: "https://heidelbergbakery.com/product-category/bread/" },
  { title: "Pastries & Sweets", note: "Cookies, strudel, rugulah & more", image: pastriesImage, href: "https://heidelbergbakery.com/product-category/pastries-cookies-and-sweets/" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="bg-primary px-5 py-2 text-center text-xs font-medium text-primary-foreground">
        Arlington’s authentic German bakery & delicatessen since 1975
      </div>

      <header className="relative z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Heidelberg home" className="shrink-0">
            <img src={logoAsset.url} alt="Heidelberg Pastry Shoppe" className="h-16 w-auto" width="184" height="112" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#shop">Shop</a>
            <a className="nav-link" href="#cakes">Custom Cakes</a>
            <a className="nav-link" href="#story">Our Story</a>
            <a className="nav-link" href="#visit">Visit</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="tel:7035278394" className="hidden text-sm font-medium text-muted-foreground md:inline">(703) 527-8394</a>
            <Button asChild variant="bakery" size="bakery"><a href={shopUrl}>Order Online <ShoppingBag /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
              <a href="#cakes" onClick={() => setMenuOpen(false)}>Custom Cakes</a>
              <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
              <a href="#visit" onClick={() => setMenuOpen(false)}>Visit</a>
              <Button asChild variant="bakery" size="bakery"><a href={shopUrl}>Order Online</a></Button>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[680px] border-b border-border md:min-h-[720px]">
        <img src={heroImage} alt="European cakes, pastries and breads arranged on a bakery table" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1000} />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-24 pt-16 md:min-h-[720px] lg:px-8">
          <div className="max-w-2xl text-hero-foreground">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"><span className="h-px w-10 bg-accent" /> Made in Arlington, Virginia</p>
            <h1 className="font-display text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">A little piece of Heidelberg, baked fresh every day.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">Authentic German breads, elegant cakes, European pastries and delicatessen favorites—made with care since 1975.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="bakery" size="bakery"><a href={shopUrl}>Explore the Bakery <ArrowRight /></a></Button>
              <Button asChild variant="bakeryOutline" size="bakery" className="border-hero-foreground/60 text-hero-foreground hover:border-hero-foreground"><a href="#cakes">Plan a Custom Cake</a></Button>
            </div>
          </div>
        </div>
        <a href="#shop" aria-label="Explore products" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-hero-foreground/80"><ChevronDown className="size-7 animate-bounce" /></a>
      </section>

      <section id="shop" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">From our ovens</p><h2 className="section-title">Find your favorite</h2></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">From everyday loaves to milestone cakes, every order begins with time-honored European technique.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((item) => (
              <a key={item.title} href={item.href} className="category-card group">
                <img src={item.image} alt={item.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="category-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-hero-foreground">
                  <p className="text-xs uppercase tracking-[0.14em] text-hero-muted">{item.note}</p>
                  <div className="mt-2 flex items-center justify-between"><h3 className="font-display text-2xl font-bold">{item.title}</h3><ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center"><Button asChild variant="bakeryOutline" size="bakery"><a href={shopUrl}>Shop All Products <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="story" className="border-y border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative">
            <img src={breadsImage} alt="Fresh European breads and pretzels" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-lg"><p className="font-display text-2xl font-bold">Since 1975</p><p className="text-xs font-semibold uppercase tracking-[0.12em]">Arlington, Virginia</p></div>
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow">The Heidelberg story</p>
            <h2 className="section-title max-w-xl">German tradition, made part of Washington life.</h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">Wolfgang Büchler came to Washington from Heidelberg, Germany. Since 1975, Wolfgang and Carla have brought authentic European baking to the D.C. area—from crusty breads made with imported German flour to cakes for presidents, ambassadors and neighborhood celebrations.</p>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">Today, Heidelberg remains a full-line European bakery and deli: personal, friendly, and always worth the trip.</p>
            <Button asChild variant="link" className="mt-5 h-auto p-0 font-semibold text-accent"><a href="https://heidelbergbakery.com/about-us/">Read Our Story <ArrowRight /></a></Button>
          </div>
        </div>
      </section>

      <section id="cakes" className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-accent">Made for your moment</p>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">A celebration deserves a cake people remember.</h2>
            <p className="mt-5 max-w-lg leading-7 text-primary-muted">Browse wedding cakes, groom’s cakes, photo cakes and designs for every milestone. Our team will help you find the right size, flavor and finish.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="bakery" size="bakery" className="bg-accent text-accent-foreground hover:bg-background hover:text-foreground"><a href="https://heidelbergbakery.com/cakes-gallery/">View Cake Gallery <ArrowRight /></a></Button>
              <Button asChild variant="bakeryOutline" size="bakery" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="tel:7035278394">Call the Bakery</a></Button>
            </div>
          </div>
          <img src={cakesImage} alt="European celebration cakes at Heidelberg Pastry Shoppe" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 border-y border-border py-8 md:grid-cols-3">
            <div className="proof-item"><Star /><div><strong>Best of Virginia 2026</strong><span>A celebrated local favorite</span></div></div>
            <div className="proof-item"><Clock3 /><div><strong>Baked fresh daily</strong><span>Traditional European breads and pastries</span></div></div>
            <div className="proof-item"><ShoppingBag /><div><strong>Order online</strong><span>Plan ahead for pickup and celebrations</span></div></div>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-2xl"><p className="eyebrow">Come see us</p><h2 className="section-title">Your neighborhood bakery, with a European accent.</h2></div>
          <div className="grid border border-border bg-background md:grid-cols-3">
            <div className="visit-panel"><MapPin /><h3>Visit the shoppe</h3><p>2150 N. Culpeper Street<br />Arlington, VA 22207</p><a href="https://maps.google.com/?q=2150+N+Culpeper+Street+Arlington+VA+22207">Get directions <ArrowRight /></a></div>
            <div className="visit-panel"><Clock3 /><h3>Opening hours</h3><p>Tuesday–Friday · 6:30am–5pm<br />Saturday · 8am–4pm<br />Sunday · 8am–1pm<br />Monday · Closed</p></div>
            <div className="visit-panel"><Phone /><h3>Talk to our team</h3><p>Questions about an order or planning a celebration? We’re happy to help.</p><a href="tel:7035278394">(703) 527-8394 <ArrowRight /></a></div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div><img src={logoAsset.url} alt="Heidelberg Pastry Shoppe" loading="lazy" width="184" height="112" className="logo-invert h-20 w-auto" /><p className="mt-4 max-w-sm text-sm leading-6 text-primary-muted">A full-line European bakery and delicatessen serving Arlington since 1975.</p></div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm"><a href="#shop">Shop</a><a href="#cakes">Custom Cakes</a><a href="#story">Our Story</a><a href="#visit">Visit</a></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/15 px-5 pt-5 text-xs text-primary-muted lg:px-8">© 2026 Heidelberg Pastry Shoppe</div>
      </footer>
    </main>
  );
}

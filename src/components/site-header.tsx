
import { ChevronDown, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import officialLogo from "@/assets/heidelberg-official-logo.png";
import { PHONE, PHONE_HREF, categories } from "@/data/site";

const cakeLinks = [
  { to: "/cakes-gallery", label: "Cakes Gallery" },
  { to: "/wedding-cake-gallery", label: "Wedding Cake Gallery" },
  { to: "/grooms-cake-gallery", label: "Groom’s Cake Gallery" },
  { to: "/wedding-favors-gallery", label: "Wedding Favors Gallery" },
  { to: "/wedding-cakes-options-prices", label: "Wedding Cakes Options & Prices" },
] as const;

const pageLinks = [
  { to: "/price-sheets", label: "Price Sheets" },
  { to: "/policies", label: "Policies" },
  { to: "/shipping", label: "Shipping" },
  { to: "/welcome", label: "Welcome" },
  { to: "/about-us", label: "About Us" },
  { to: "/press", label: "Press" },
  { to: "/employment", label: "Employment" },
  { to: "/customer-letters", label: "Customer Letters" },
  { to: "/contact", label: "Contact" },
] as const;

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="nav-link inline-flex items-center gap-1" type="button">
        {label}
        <ChevronDown className="size-3.5" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="border border-border bg-card py-2 shadow-xl">
          {items.map((item) => (
            <li key={item.to}>
              <a href={item.to as any}
                className="block px-5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shopItems = categories.map((c) => ({
    to: `/shop/${c.slug}`,
    label: c.name,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-primary px-5 py-2 text-center text-xs font-medium text-primary-foreground">
        Arlington’s authentic German bakery &amp; delicatessen since 1975
      </div>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <a href={"/" as any} aria-label="Heidelberg home" className="shrink-0">
          <img
            src={officialLogo}
            alt="Heidelberg Pastry Shoppe"
            className="h-14 w-auto"
            width="184"
            height="112"
          />
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          <a href={"/" as any} className="nav-link" >
            Home
          </a>
          <Dropdown label="Shop Our Store" items={shopItems} />
          <Dropdown label="Cakes" items={[...cakeLinks]} />
          <Dropdown label="Information" items={[...pageLinks]} />
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <Phone className="size-4" /> {PHONE}
          </a>
          <Button asChild variant="bakery" size="bakery">
            <a href={"/shop" as any}>
              Order Online <ShoppingBag />
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {menuOpen && (
        <nav
          className="max-h-[70vh] overflow-y-auto border-t border-border bg-background px-5 py-6 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5 text-sm">
            <a href={"/" as any} className="font-semibold" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <div>
              <p className="eyebrow">Shop our store</p>
              <div className="flex flex-col gap-2.5">
                {shopItems.map((item) => (
                  <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Cakes</p>
              <div className="flex flex-col gap-2.5">
                {cakeLinks.map((item) => (
                  <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Information</p>
              <div className="flex flex-col gap-2.5">
                {pageLinks.map((item) => (
                  <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <Button asChild variant="bakery" size="bakery">
              <a href={"/shop" as any} onClick={() => setMenuOpen(false)}>
                Order Online
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

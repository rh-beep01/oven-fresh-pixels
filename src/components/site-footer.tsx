import officialLogo from "@/assets/heidelberg-official-logo.png";
import { Facebook, Instagram, MapPin } from "lucide-react";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  HOURS,
  PHONE,
  PHONE_HREF,
  categories,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-block rounded-lg bg-white p-3 shadow-md">
            <img
              src={officialLogo}
              alt="Heidelberg Pastry Shoppe"
              loading="lazy"
              width="200"
              height="55"
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-primary-muted">
            A full-line European bakery and delicatessen serving Arlington since 1975.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com/HeidelbergPastryShoppe"
              target="_blank"
              rel="noreferrer"
              aria-label="Heidelberg on Facebook"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://instagram.com/heidelbergpastry"
              target="_blank"
              rel="noreferrer"
              aria-label="Heidelberg on Instagram"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://maps.google.com/?q=2150+N+Culpeper+Street+Arlington+VA+22207"
              target="_blank"
              rel="noreferrer"
              aria-label="Heidelberg on Google Maps"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <MapPin className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Shop</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-muted">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <a href={`/shop/${c.slug as any}`} className="hover:text-primary-foreground">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Information</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-muted">
            <li><a href={"/about-us" as any} className="hover:text-primary-foreground">About Us</a></li>
            <li><a href={"/price-sheets" as any} className="hover:text-primary-foreground">Price Sheets</a></li>
            <li><a href={"/policies" as any} className="hover:text-primary-foreground">Policies</a></li>
            <li><a href={"/shipping" as any} className="hover:text-primary-foreground">Shipping</a></li>
            <li><a href={"/press" as any} className="hover:text-primary-foreground">Press</a></li>
            <li><a href={"/employment" as any} className="hover:text-primary-foreground">Employment</a></li>
            <li><a href={"/contact" as any} className="hover:text-primary-foreground">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Visit</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-primary-muted">
            <p>
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2}
            </p>
            <p>
              <a href={PHONE_HREF} className="hover:text-primary-foreground">
                {PHONE}
              </a>
            </p>
          </address>
          <ul className="mt-4 space-y-1 text-xs text-primary-muted">
            {HOURS.map((h) => (
              <li key={h.day}>
                {h.day} · {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-5 pt-6 text-xs text-primary-muted lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© 1975–2026 Heidelberg Pastry Shoppe · European Gourmet & Deli</span>
        <span>Crafted with pride in Arlington, Virginia</span>
      </div>
    </footer>
  );
}

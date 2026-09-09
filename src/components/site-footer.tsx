
import logoAsset from "@/assets/heidelberg-logo.png.asset.json";
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
          <img
            src={logoAsset.url}
            alt="Heidelberg Pastry Shoppe"
            loading="lazy"
            width="184"
            height="112"
            className="logo-invert h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-primary-muted">
            A full-line European bakery and delicatessen serving Arlington since 1975.
          </p>
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
      <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-5 pt-6 text-xs text-primary-muted lg:px-8">
        © 2026 Heidelberg Pastry Shoppe · European Gourmet &amp; Deli
      </div>
    </footer>
  );
}

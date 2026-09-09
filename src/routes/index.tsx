import { createFileRoute } from "@tanstack/react-router";
import { 
  FileText,
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
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
  Lock,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  Search,
  Check,
  Eye
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import officialLogo from "@/assets/heidelberg-official-logo.png";
import heroImage from "@/assets/heidelberg-hero.jpg";
import cakesImage from "@/assets/cakes-category.jpg";
import breadsImage from "@/assets/breads-category.jpg";
import pastriesImage from "@/assets/pastries-category.jpg";
import goldCakeImg from "@/assets/cake-gold-anniversary.jpg";
import frozenCakeImg from "@/assets/cake-frozen-birthday.jpg";
import pinkCakeImg from "@/assets/cake-pink-first-birthday.jpg";
import croissantBasketImg from "@/assets/croissant-basket.jpg";
import chocolateSwirlCookiesImg from "@/assets/pastry-chocolate-swirl-cookies.jpg";
import florentineCookiesImg from "@/assets/pastry-florentine-cookies.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heidelberg Pastry Shoppe | Modern German Bakery, Custom Cakes & Online Ordering" },
      { name: "description", content: "Order authentic German artisan breads, custom celebration cakes, fine European pastries and deli platters online. Serving Arlington, VA since 1975." },
      { property: "og:title", content: "Heidelberg Pastry Shoppe | Modern German Bakery & Custom Cakes" },
      { property: "og:description", content: "Authentic European baking crafted in Arlington since 1975. Order online with interactive cake studio and fast pickup." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// REAL PRODUCTS EXTRACTED DIRECTLY FROM HEIDELBERG'S OFFICIAL CATALOG
export interface BakeryOption {
  name: string;
  priceDelta: number;
  servings?: string;
}

export interface BakeryItem {
  id: string;
  name: string;
  germanName?: string;
  category: "cakes" | "breads" | "pastries" | "deli";
  price: number;
  badge: string;
  description: string;
  image: string;
  servings?: string;
  isFeatured?: boolean;
  sizeOptions?: BakeryOption[];
  slicingOptions?: string[];
  packOptions?: BakeryOption[];
}

const bakeryMenu: BakeryItem[] = [
  // --- REAL REMASTERED CAKES & TORTES ---
  {
    id: "cake-gold-milestone",
    name: "Golden Milestone Celebration Torte",
    germanName: "Goldene Festtagstorte",
    category: "cakes",
    price: 58.00,
    badge: "Remastered Signature",
    description: "Shimmering edible gold luster over European buttercream with hand-piped golden rosettes and custom gold script lettering. Perfect for 50th, 70th, or anniversary milestones.",
    image: goldCakeImg,
    servings: '8" round (12-16 servings)',
    isFeatured: true,
    sizeOptions: [
      { name: '8" Round (12-16 servings)', priceDelta: 0, servings: '12-16 servings' },
      { name: '10" Round (20-25 servings)', priceDelta: 28.00, servings: '20-25 servings' },
      { name: '1/4 Sheet (25-30 servings)', priceDelta: 47.00, servings: '25-30 servings' },
      { name: '1/2 Sheet (50-60 servings)', priceDelta: 112.00, servings: '50-60 servings' }
    ]
  },
  {
    id: "cake-pink-first-birthday",
    name: "Handcrafted 2-Tier First Birthday Cake",
    germanName: "Zweistöckige Festtorte mit Schleife",
    category: "cakes",
    price: 78.00,
    badge: "2-Tier Masterpiece",
    description: "Pastel pink fondant with delicate gold sugar pearls, beaded royal icing borders, custom milestone number medallion, and a handcrafted pink-and-white sugar ribbon bow.",
    image: pinkCakeImg,
    servings: "2-Tier (25-30 servings)",
    isFeatured: true,
    sizeOptions: [
      { name: "2-Tier Small (20-25 servings)", priceDelta: 0, servings: "20-25 servings" },
      { name: "2-Tier Medium (30-35 servings)", priceDelta: 35.00, servings: "30-35 servings" },
      { name: "3-Tier Grand (55-65 servings)", priceDelta: 115.00, servings: "55-65 servings" }
    ]
  },
  {
    id: "cake-frozen-themed",
    name: "Custom 2-Tier Themed Celebration Cake",
    germanName: "Individuelle 2-Stöckige Thementorte",
    category: "cakes",
    price: 85.00,
    badge: "Hand-Piped Icicles",
    description: "Two-tiered celebration cake featuring ombré blue frosting, hand-piped white icicle drips, edible snowflake plaques, and custom personalized picture topper.",
    image: frozenCakeImg,
    servings: "2-Tier (25-30 servings)",
    isFeatured: true,
    sizeOptions: [
      { name: "2-Tier (25-30 servings)", priceDelta: 0, servings: "25-30 servings" },
      { name: "2-Tier Large (35-42 servings)", priceDelta: 40.00, servings: "35-42 servings" }
    ]
  },
  {
    id: "pastry-croissants",
    name: "Artisan Bavarian Butter Croissants",
    germanName: "Bayerische Butterhörnchen",
    category: "pastries",
    price: 4.25,
    badge: "Remastered Signature",
    description: "Golden, multi-layered Viennoiserie pastry folded with pure European butter for a crisp flaky exterior and an airy, melt-in-your-mouth interior.",
    image: croissantBasketImg,
    servings: "Baked fresh 5:00 AM daily",
    isFeatured: true,
    packOptions: [
      { name: "Single Warm Croissant", priceDelta: 0 },
      { name: "4-Pack Breakfast Basket", priceDelta: 12.25 },
      { name: "Baker's Half-Dozen (6 Pack)", priceDelta: 19.75 },
      { name: "Baker's Dozen (13 Pack)", priceDelta: 43.75 }
    ]
  },
  {
    id: "pastry-chocolate-swirl",
    name: "European Chocolate Ganache Swirl Cookies",
    germanName: "Schoko-Spritzgebäck mit Ganache",
    category: "pastries",
    price: 13.50,
    badge: "Belgian Dark Ganache",
    description: "Buttery, crumbly spritz shortbread rounds generously piped with high-gloss swirls of rich dark Belgian chocolate ganache and dusted with powdered sugar.",
    image: chocolateSwirlCookiesImg,
    servings: "4-Pack on slate board",
    isFeatured: true,
    packOptions: [
      { name: "4-Pack Specialty Box", priceDelta: 0 },
      { name: "8-Pack Gathering Tray", priceDelta: 12.50 },
      { name: "Baker's Dozen (13 Cookies)", priceDelta: 25.50 }
    ]
  },
  {
    id: "pastry-florentine",
    name: "Authentic Florentiner Almond Lace Cookies",
    germanName: "Florentiner Mandelgebäck",
    category: "pastries",
    price: 16.00,
    badge: "Caramelized Almond Lace",
    description: "Crisp, wafer-thin lace cookies made with toasted sliced almonds, honey, and orange zest, half-dipped in decadent Belgian dark chocolate and filled with sweet vanilla cream.",
    image: florentineCookiesImg,
    servings: "1/2 lb Gift Selection (approx 10-12 pcs)",
    isFeatured: true,
    packOptions: [
      { name: "1/2 lb Bakery Box", priceDelta: 0 },
      { name: "1 lb Gift Tin", priceDelta: 15.00 }
    ]
  },
  {
    id: "cake-black-forest",
    name: "Authentic Black Forest Cake",
    germanName: "Schwarzwälder Kirschtorte",
    category: "cakes",
    price: 46.95,
    badge: "Master Signature",
    description: "Layers of chocolate sponge infused with genuine Black Forest Kirschwasser cherry schnapps, tart cherries, and real whipped Bavarian cream.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
    isFeatured: true,
    sizeOptions: [
      { name: '6" Round (6-8 servings)', priceDelta: -12.95, servings: '6-8 servings' },
      { name: '8" Round (12-14 servings)', priceDelta: 0, servings: '12-14 servings' },
      { name: '9" Round (16-20 servings)', priceDelta: 10.55, servings: '16-20 servings' },
      { name: '12" Round (25-30 servings)', priceDelta: 75.55, servings: '25-30 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 58.05, servings: '20-25 servings' },
      { name: '1/2 Sheet (45-50 servings)', priceDelta: 123.05, servings: '45-50 servings' }
    ]
  },
  {
    id: "cake-buttercream",
    name: "Made-To-Order Buttercream Cake",
    germanName: "Klassische Festtagstorte",
    category: "cakes",
    price: 46.95,
    badge: "Customizable Design",
    description: "Velvety European buttercream over golden vanilla or chocolate genoise. Hand-piped borders with fresh edible decor.",
    image: cakesImage,
    servings: '8" round (12-16 servings)',
    isFeatured: true,
    sizeOptions: [
      { name: '6" Round (6-8 servings)', priceDelta: -12.95, servings: '6-8 servings' },
      { name: '8" Round (12-16 servings)', priceDelta: 0, servings: '12-16 servings' },
      { name: '9" Round (16-20 servings)', priceDelta: 10.55, servings: '16-20 servings' },
      { name: '10" Round (20-25 servings)', priceDelta: 28.05, servings: '20-25 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 58.05, servings: '20-25 servings' },
      { name: '1/2 Sheet (45-50 servings)', priceDelta: 123.05, servings: '45-50 servings' }
    ]
  },
  {
    id: "cake-dark-mousse",
    name: "Dark Chocolate Mousse Cake",
    germanName: "Schokoladenmousse Torte",
    category: "cakes",
    price: 48.00,
    badge: "Belgian Chocolate",
    description: "Rich dark Belgian chocolate mousse layered with chocolate chiffon sponge, coated in a glossy dark chocolate mirror glaze.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
    isFeatured: true,
    sizeOptions: [
      { name: '6" Round (6-8 servings)', priceDelta: -14.00, servings: '6-8 servings' },
      { name: '8" Round (12-14 servings)', priceDelta: 0, servings: '12-14 servings' },
      { name: '10" Round (20-24 servings)', priceDelta: 32.00, servings: '20-24 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 62.00, servings: '20-25 servings' }
    ]
  },
  {
    id: "cake-bienenstich",
    name: "Bienenstich (Bee Sting Cake)",
    germanName: "Traditioneller Bienenstich",
    category: "cakes",
    price: 42.00,
    badge: "Bavarian Classic",
    description: "Tender yeast dough filled with luscious homemade Bavarian vanilla custard and finished with a crunchy caramelized honey-almond crust.",
    image: cakesImage,
    servings: '8" round (10-12 servings)',
    isFeatured: true,
    sizeOptions: [
      { name: '8" Round (10-12 servings)', priceDelta: 0, servings: '10-12 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 53.00, servings: '20-25 servings' },
      { name: '1/2 Sheet (40-45 servings)', priceDelta: 110.00, servings: '40-45 servings' }
    ]
  },
  {
    id: "cake-carrot",
    name: "Classic Spiced Carrot Cake",
    germanName: "Rüblitorte",
    category: "cakes",
    price: 42.00,
    badge: "Neighborhood Favorite",
    description: "Finely grated fresh carrots, toasted walnuts, and warm cinnamon spice layered with tangy cream cheese frosting and piped marzipan carrots.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
    sizeOptions: [
      { name: '6" Round (6-8 servings)', priceDelta: -10.00, servings: '6-8 servings' },
      { name: '8" Round (12-14 servings)', priceDelta: 0, servings: '12-14 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 53.00, servings: '20-25 servings' }
    ]
  },
  {
    id: "cake-cheesecake-fruit",
    name: "German Cheesecake with Glazed Fruit",
    germanName: "Käsekuchen mit Frischem Obst",
    category: "cakes",
    price: 36.50,
    badge: "Fresh Fruit",
    description: "Lighter traditional European-style baked quark cheesecake atop shortbread crust, crowned with glazed strawberries, kiwi, and blueberries.",
    image: cakesImage,
    servings: '8" round (10-12 servings)',
    sizeOptions: [
      { name: '8" Round (10-12 servings)', priceDelta: 0, servings: '10-12 servings' },
      { name: '10" Round (16-18 servings)', priceDelta: 18.50, servings: '16-18 servings' }
    ]
  },
  {
    id: "cake-raspberry-mousse",
    name: "Raspberry Mousse Torte",
    germanName: "Himbeermousse Torte",
    category: "cakes",
    price: 48.00,
    badge: "Berry Special",
    description: "Light vanilla genoise sponge layered with tart red raspberry mousse and finished with raspberry glaze and white chocolate curls.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
    sizeOptions: [
      { name: '8" Round (12-14 servings)', priceDelta: 0, servings: '12-14 servings' },
      { name: '10" Round (20-24 servings)', priceDelta: 32.00, servings: '20-24 servings' }
    ]
  },
  {
    id: "cake-mocha",
    name: "Traditional Mocha Buttercream Torte",
    germanName: "Mokkatorte",
    category: "cakes",
    price: 46.95,
    badge: "Espresso Infused",
    description: "Layers of coffee chiffon sponge infused with dark roast espresso buttercream and roasted almond pralines.",
    image: cakesImage,
    servings: '8" round (12-14 servings)',
    sizeOptions: [
      { name: '8" Round (12-14 servings)', priceDelta: 0, servings: '12-14 servings' },
      { name: '1/4 Sheet (20-25 servings)', priceDelta: 58.05, servings: '20-25 servings' }
    ]
  },

  // --- REAL ARTISAN BREADS ---
  {
    id: "bread-aachener",
    name: "Aachener Brot (Dark Rye)",
    germanName: "Aachener Sauerteigbrot",
    category: "breads",
    price: 5.40,
    badge: "Imported German Flour",
    description: "Dense, aromatic natural rye sourdough loaf made with Type 1150 German rye flour for that authentic old-world crust and moist crumb.",
    image: breadsImage,
    servings: "1 lb Loaf",
    isFeatured: true,
    sizeOptions: [
      { name: "1 lb Loaf", priceDelta: 0 },
      { name: "2 lb Loaf", priceDelta: 4.80 }
    ],
    slicingOptions: ["Whole Unsliced Loaf", "Sliced (Standard Sandwich)"]
  },
  {
    id: "bread-baltic",
    name: "Baltic Rye Bread",
    germanName: "Baltisches Roggenbrot",
    category: "breads",
    price: 5.40,
    badge: "Natural Sourdough",
    description: "Traditional Baltic style dark sourdough fermented with caraway seeds and dark malt for a hearty, robust flavor profile.",
    image: breadsImage,
    servings: "1 lb Loaf",
    sizeOptions: [
      { name: "1 lb Loaf", priceDelta: 0 },
      { name: "2 lb Loaf", priceDelta: 4.80 }
    ],
    slicingOptions: ["Whole Unsliced Loaf", "Sliced (Standard Sandwich)"]
  },
  {
    id: "bread-pretzels",
    name: "Soft Bavarian Pretzels (4-Pack)",
    germanName: "Bayerische Laugenbrezeln",
    category: "breads",
    price: 10.50,
    badge: "Lye-Dipped Daily",
    description: "Hand-twisted daily from yeast dough, given a traditional Bavarian lye bath, and sprinkled with crunchy coarse pretzel salt.",
    image: breadsImage,
    servings: "Pack of 4 pretzels",
    isFeatured: true,
    packOptions: [
      { name: "4-Pack Fresh Pretzels", priceDelta: 0 },
      { name: "8-Pack Party Pretzels", priceDelta: 9.50 },
      { name: "Baker's Dozen (13 Pretzels)", priceDelta: 19.50 }
    ]
  },
  {
    id: "bread-dinkel",
    name: "Dinkel Spelt Brot",
    germanName: "Dinkel-Vollkornbrot",
    category: "breads",
    price: 6.20,
    badge: "100% Ancient Grain",
    description: "Nutritious whole spelt grain loaf with nutty undertones and digestible ancient wheat proteins. Perfect for morning toast.",
    image: breadsImage,
    servings: "1 lb Loaf",
    sizeOptions: [
      { name: "1 lb Loaf", priceDelta: 0 },
      { name: "2 lb Loaf", priceDelta: 5.50 }
    ],
    slicingOptions: ["Whole Unsliced Loaf", "Sliced (Standard Sandwich)"]
  },
  {
    id: "bread-sourdough-rye",
    name: "Heidelberg Sourdough Rye",
    germanName: "Natursauerteig Roggen",
    category: "breads",
    price: 5.80,
    badge: "50-Yr Mother Starter",
    description: "Crafted with Heidelberg's original 1975 live sourdough culture. Crackling blistered crust and tangy, chewy interior.",
    image: breadsImage,
    servings: "1 lb Round Boule",
    sizeOptions: [
      { name: "1 lb Round Boule", priceDelta: 0 },
      { name: "2 lb Round Boule", priceDelta: 5.00 }
    ],
    slicingOptions: ["Whole Unsliced Loaf", "Sliced (Standard Sandwich)"]
  },
  {
    id: "bread-pumpernickel",
    name: "Westphalian Pumpernickel",
    germanName: "Westfälischer Pumpernickel",
    category: "breads",
    price: 6.50,
    badge: "16-Hr Slow Bake",
    description: "Slow-baked for 16 hours at gentle heat to naturally caramelize the whole rye berries and produce an earthy, dark crumb.",
    image: breadsImage,
    servings: "1 lb Loaf",
    slicingOptions: ["Whole Unsliced Loaf", "Sliced (Thin German Deli Cut)"]
  },
  {
    id: "bread-challah",
    name: "Traditional Braided Challah",
    germanName: "Geflochtener Hefezopf",
    category: "breads",
    price: 7.25,
    badge: "Egg Glazed",
    description: "Golden 6-strand braided egg bread with a pillowy soft crumb and shiny golden crust. Baked fresh every Friday & Saturday.",
    image: breadsImage,
    servings: "Large Braided Loaf",
    slicingOptions: ["Whole Braided Loaf", "Sliced Thick (French Toast Cut)"]
  },

  // --- REAL EUROPEAN PASTRIES & SWEETS ---
  {
    id: "pastry-apple-strudel",
    name: "Authentic Bavarian Apple Strudel",
    germanName: "Bayerischer Apfelstrudel",
    category: "pastries",
    price: 6.25,
    badge: "Hand-Pulled Pastry",
    description: "Paper-thin hand-stretched dough wrapped around tart Granny Smith apples, plump raisins, cinnamon, and toasted breadcrumbs.",
    image: pastriesImage,
    servings: "Single generous slice",
    isFeatured: true,
    packOptions: [
      { name: "Single Warm Slice", priceDelta: 0 },
      { name: "4-Pack Gift Box", priceDelta: 17.75 },
      { name: "Whole Family Strudel (Serves 10)", priceDelta: 41.75 }
    ]
  },
  {
    id: "pastry-berliner",
    name: "Berliner Jelly Donuts (4-Pack)",
    germanName: "Traditionelle Berliner Pfannkuchen",
    category: "pastries",
    price: 14.50,
    badge: "Fried Fresh 4 AM",
    description: "Golden yeast donuts filled with premium red raspberry jam or Bavarian vanilla custard, dusted with superfine European sugar.",
    image: pastriesImage,
    servings: "Pack of 4 donuts",
    packOptions: [
      { name: "4-Pack Red Raspberry Jam", priceDelta: 0 },
      { name: "4-Pack Bavarian Vanilla Custard", priceDelta: 0 },
      { name: "4-Pack Mixed Assortment", priceDelta: 0 },
      { name: "Baker's Dozen (13 Donuts)", priceDelta: 27.50 }
    ]
  },
  {
    id: "pastry-almond-horn",
    name: "German Almond Horn (Mandelhörnchen)",
    germanName: "Mandelhörnchen",
    category: "pastries",
    price: 4.95,
    badge: "Naturally Gluten-Free",
    description: "Chewy marzipan almond cookie dough rolled in sliced almonds, baked golden, and dipped on both ends in rich Belgian dark chocolate.",
    image: pastriesImage,
    servings: "Single large horn",
    packOptions: [
      { name: "Single Almond Horn", priceDelta: 0 },
      { name: "4-Pack Bakery Box", priceDelta: 13.55 }
    ]
  },
  {
    id: "pastry-rugelach",
    name: "European Rugelach Assortment",
    germanName: "Feines Rugelach Gebäck",
    category: "pastries",
    price: 15.00,
    badge: "Cream Cheese Pastry",
    description: "Flaky cream cheese pastry rolled with Dutch cocoa chocolate, cinnamon walnuts, and sweet apricot preserve. Half-pound box.",
    image: pastriesImage,
    servings: "1/2 lb Box (approx 12-14 pcs)",
    packOptions: [
      { name: "1/2 lb Gift Box", priceDelta: 0 },
      { name: "1 lb Gift Tin", priceDelta: 14.00 }
    ]
  },
  {
    id: "pastry-linzer",
    name: "Linzer Cookies with Raspberry",
    germanName: "Linzer Augen mit Himbeere",
    category: "pastries",
    price: 12.50,
    badge: "Spiced Hazelnut",
    description: "Delicate hazelnut-cinnamon shortbread cookies filled with tart raspberry preserves and dusted with powdered sugar.",
    image: pastriesImage,
    servings: "6-Pack Box",
    packOptions: [
      { name: "6-Pack Box", priceDelta: 0 },
      { name: "Baker's Dozen (13 Cookies)", priceDelta: 11.50 }
    ]
  },
  {
    id: "pastry-eclairs",
    name: "Bavarian Cream Eclairs (2-Pack)",
    germanName: "Schokoladen-Eclairs",
    category: "pastries",
    price: 8.50,
    badge: "Choux Pastry",
    description: "Crisp choux pastry shells filled with fresh Bavarian cream and topped with shiny chocolate fudge icing.",
    image: pastriesImage,
    servings: "Pack of 2 large eclairs",
    packOptions: [
      { name: "2-Pack Eclairs", priceDelta: 0 },
      { name: "4-Pack Eclairs", priceDelta: 7.50 }
    ]
  },

  // --- REAL GERMAN DELICATESSEN & PLATTERS ---
  {
    id: "deli-ham-swiss",
    name: "Black Forest Ham & Swiss on Rye",
    germanName: "Schwarzwälder Schinken Sandwich",
    category: "deli",
    price: 11.95,
    badge: "Fresh Made Daily",
    description: "Thinly sliced Black Forest ham, aged Swiss cheese, spicy German Dusseldorf mustard, and crisp lettuce on fresh Aachener rye.",
    image: heroImage,
    servings: "1 Full Delicatessen Sandwich",
    isFeatured: true,
    sizeOptions: [
      { name: "Single Sandwich", priceDelta: 0 },
      { name: "Combo with German Potato Salad & Pickle", priceDelta: 4.50 }
    ]
  },
  {
    id: "deli-bratwurst",
    name: "Grilled Bratwurst on Pretzel Roll",
    germanName: "Gegrillte Bratwurst im Laugenbrötchen",
    category: "deli",
    price: 10.50,
    badge: "Butcher Crafted",
    description: "Authentic German pork bratwurst grilled to order, served on our freshly baked soft pretzel roll with sauerkraut and brown mustard.",
    image: heroImage,
    servings: "1 Sausage in Pretzel Bun",
    sizeOptions: [
      { name: "Single Bratwurst Pretzel Roll", priceDelta: 0 },
      { name: "Double Bratwurst Platter with Potato Salad", priceDelta: 6.50 }
    ]
  },
  {
    id: "deli-party-platter",
    name: "Heidelberg Executive Party Deli Platter",
    germanName: "Große Festtags-Aufschnittplatte",
    category: "deli",
    price: 65.00,
    badge: "Catering Favorite",
    description: "Arrangement of Black Forest ham, roast beef, smoked turkey, Bavarian Swiss, and Gouda, served with sliced artisan breads and mustards.",
    image: heroImage,
    servings: "Medium serves 10-12 guests",
    sizeOptions: [
      { name: "Medium Platter (Serves 10-12)", priceDelta: 0, servings: "10-12 guests" },
      { name: "Large Platter (Serves 20-25)", priceDelta: 50.00, servings: "20-25 guests" }
    ]
  },
  {
    id: "deli-potato-salad",
    name: "Authentic Warm German Potato Salad",
    germanName: "Warmes Bayerisches Kartoffelsalat",
    category: "deli",
    price: 7.50,
    badge: "House Specialty",
    description: "Sliced red potatoes tossed in a warm smoked bacon and apple cider vinegar dressing with fresh chopped parsley.",
    image: heroImage,
    servings: "1 Pint (Serves 2-3)",
    sizeOptions: [
      { name: "1 Pint (Serves 2-3)", priceDelta: 0 },
      { name: "1 Quart (Serves 4-6)", priceDelta: 6.50 }
    ]
  }
];

export interface CartItem {
  id: string; // unique cart entry ID
  item: BakeryItem;
  quantity: number;
  selectedOption?: string;
  customPrice: number;
  inscription?: string;
}

function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "cakes" | "breads" | "pastries" | "deli">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Product Specification Modal State
  const [selectedProduct, setSelectedProduct] = useState<BakeryItem | null>(null);
  const [modalOption, setModalOption] = useState<string>("");
  const [modalOptionPrice, setModalOptionPrice] = useState<number>(0);
  const [modalInscription, setModalInscription] = useState<string>("");
  const [modalSlicing, setModalSlicing] = useState<string>("Whole Unsliced Loaf");

  // Cart Drawer State (Only Items & Totals)
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Dedicated Checkout Modal State (Separate Window)
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "confirmed">("form");
  const [pickupTime, setPickupTime] = useState("Today, 3:00 PM – 4:00 PM");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [billingCountry, setBillingCountry] = useState("United States (US)");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartmentSuite, setApartmentSuite] = useState("");
  const [townCity, setTownCity] = useState("Arlington");
  const [stateProvince, setStateProvince] = useState("Virginia");
  const [zipCode, setZipCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "shoppay" | "counter">("card");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardExp, setCardExp] = useState("08/28");
  const [cardCvc, setCardCvc] = useState("789");
  const [confirmedOrderId, setConfirmedOrderId] = useState("#HB-1975");

  // Custom Cake Studio State
  const [cakeOccasion, setCakeOccasion] = useState("Birthday");
  const [cakeSize, setCakeSize] = useState({ name: '8" Round (15–20 guests)', price: 65 });
  const [cakeSponge, setCakeSponge] = useState("German Chocolate Fudge");
  const [cakeFilling, setCakeFilling] = useState("Authentic Bavarian Vanilla Custard");
  const [cakeInscription, setCakeInscription] = useState("Happy 50th Birthday!");
  const [cakeDate, setCakeDate] = useState("Saturday (72 hrs notice)");

  // Quick Contact Modal State
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  // Toast & Item Added Animation States
  const [toastItem, setToastItem] = useState<{ item: BakeryItem; count: number; option?: string } | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Carousel State for Featured Products
  const featuredProducts = bakeryMenu.filter(i => i.isFeatured);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-dismiss toast after 4.5 seconds of inactivity
  useEffect(() => {
    if (!toastItem) return undefined;
    const timer = setTimeout(() => {
      setToastItem(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toastItem]);

  // Open Product Specification Modal with Default Options
  const openProductModal = (product: BakeryItem) => {
    setSelectedProduct(product);
    setModalInscription("");
    
    const firstSize = product.sizeOptions?.[0];
    const firstPack = product.packOptions?.[0];
    const firstSlicing = product.slicingOptions?.[0];

    if (firstSize) {
      setModalOption(firstSize.name);
      setModalOptionPrice(product.price + firstSize.priceDelta);
    } else if (firstPack) {
      setModalOption(firstPack.name);
      setModalOptionPrice(product.price + firstPack.priceDelta);
    } else {
      setModalOption("");
      setModalOptionPrice(product.price);
    }

    if (firstSlicing) {
      setModalSlicing(firstSlicing);
    } else {
      setModalSlicing("");
    }
  };

  // Add Item to Cart from Modal with specifications
  const addItemFromModal = () => {
    if (!selectedProduct) return;

    let optionsSummary = modalOption;
    if (modalSlicing) {
      optionsSummary = optionsSummary ? `${optionsSummary} • ${modalSlicing}` : modalSlicing;
    }

    const uniqueId = `${selectedProduct.id}-${optionsSummary || "standard"}-${modalInscription || "no-ins"}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === uniqueId);
      if (existing) {
        return prev.map((i) => (i.id === uniqueId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: uniqueId,
          item: selectedProduct,
          quantity: 1,
          selectedOption: optionsSummary,
          customPrice: modalOptionPrice,
          inscription: modalInscription
        }
      ];
    });

    setJustAddedId(selectedProduct.id);
    setTimeout(() => {
      setJustAddedId((curr) => (curr === selectedProduct.id ? null : curr));
    }, 1800);

    const currentQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    setToastItem({
      item: selectedProduct,
      count: currentQty + 1,
      option: optionsSummary
    });

    setSelectedProduct(null);
    setCartOpen(true);
  };

  // Quick direct add (default specifications)
  const quickAddToCart = (item: BakeryItem) => {
    const defaultPrice = item.price;
    const defaultOption = item.sizeOptions?.[0]?.name || item.packOptions?.[0]?.name || "";
    const uniqueId = `${item.id}-${defaultOption || "standard"}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === uniqueId);
      if (existing) {
        return prev.map((i) => (i.id === uniqueId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: uniqueId,
          item,
          quantity: 1,
          selectedOption: defaultOption,
          customPrice: defaultPrice
        }
      ];
    });

    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((curr) => (curr === item.id ? null : curr));
    }, 1800);

    const currentQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    setToastItem({ item, count: currentQty + 1 });
    setCartOpen(true);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === cartId ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.customPrice * i.quantity, 0);
  const cartItemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  // Handle Checkout Completion
  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = customerName.trim() || "Valued Customer";
    const newOrderId = `#HB-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(newOrderId);
    setCheckoutStep("confirmed");
    setCart([]);
  };

  // Custom Cake Studio Submission -> Redirect to Checkout
  const handleCustomCakeTransferToCheckout = () => {
    const customCakeItem: BakeryItem = {
      id: `custom-cake-${Date.now()}`,
      name: `Custom ${cakeOccasion} Cake`,
      germanName: "Individuelle Festtagstorte",
      category: "cakes",
      price: cakeSize.price,
      badge: "Custom Handcrafted",
      description: `${cakeSponge} with ${cakeFilling}. Inscription: "${cakeInscription || "None"}". Pickup: ${cakeDate}.`,
      image: cakesImage,
      servings: cakeSize.name
    };

    setCart((prev) => [
      ...prev,
      {
        id: customCakeItem.id,
        item: customCakeItem,
        quantity: 1,
        selectedOption: `${cakeSize.name} • ${cakeSponge}`,
        customPrice: cakeSize.price,
        inscription: cakeInscription
      }
    ]);

    setPickupTime(`${cakeDate} Window`);

    const currentQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    setToastItem({
      item: customCakeItem,
      count: currentQty + 1,
      option: `${cakeSize.name} • ${cakeSponge}`
    });

    // Add to cart first & open cart drawer
    setCartOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactModalOpen(false);
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
    }, 2800);
  };

  // Filtered menu with search
  const filteredMenu = bakeryMenu.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.germanName && item.germanName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleCategoryExpand = (cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      {/* Top Banner with Heritage Notice (No track order link) */}
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-accent">
            <Award className="size-3.5" /> 50 Years in Arlington (Est. 1975)
          </span>
          <p className="mx-auto sm:mx-0">
            <strong>Authentic German Breads, Milestone Cakes &amp; Deli</strong> — Order ahead for scheduled bakery pickup!
          </p>
          <span className="hidden md:inline-flex items-center gap-1 text-xs text-primary-muted">
            <Clock3 className="size-3 text-accent" /> Tue–Sat from 6:30 AM
          </span>
        </div>
      </div>

      {/* Main Navigation with OFFICIAL WEBSITE LOGO - Single Line & Centered */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8">
          {/* Official Brand Logo */}
          <a href="#top" aria-label="Heidelberg Pastry Shoppe home" className="flex items-center shrink-0 py-1">
            <img
              src={officialLogo}
              alt="Heidelberg Pastry Shoppe Official Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-102"
              width="190"
              height="50"
            />
          </a>

          {/* Navigation - Centered, Single Line, Refined & Crisp */}
          <nav
            className="hidden items-center justify-center flex-1 mx-2 lg:flex whitespace-nowrap gap-1.5 xl:gap-5"
            aria-label="Main navigation"
          >
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#featured-reel"
            >
              Featured
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#cakes-highlight"
            >
              Cakes
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#menu"
            >
              Menu &amp; Pricing
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#cake-builder"
            >
              Custom Cakes
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#reviews"
            >
              Reviews
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#story"
            >
              Our Story
            </a>
            <a
              className="nav-link px-2 py-1 text-xs xl:text-sm font-semibold text-foreground/85 hover:text-accent transition-colors whitespace-nowrap"
              href="#visit"
            >
              Visit &amp; Hours
            </a>
          </nav>

          {/* Right Action Items: Phone (Single-line guaranteed) + Order Tray */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:7035278394"
              className="hidden items-center gap-1.5 text-xs font-semibold text-foreground/90 hover:text-accent md:inline-flex whitespace-nowrap shrink-0 px-2.5 py-1.5 rounded-full border border-border/70 bg-muted/30 transition-colors hover:border-accent"
            >
              <Phone className="size-3.5 text-accent shrink-0" />
              <span className="whitespace-nowrap font-mono tracking-tight">(703) 527-8394</span>
            </a>

            {/* Cart Trigger Button */}
            <Button
              variant="bakery"
              size="sm"
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 font-semibold text-xs h-10 px-3.5 sm:px-4 cursor-pointer whitespace-nowrap shrink-0"
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
              className="lg:hidden cursor-pointer shrink-0"
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
              <a href="#featured-reel" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Featured Highlights
              </a>
              <a href="#cakes-highlight" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Cakes Showcase
              </a>
              <a href="#menu" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Bakery Menu &amp; Pricing
              </a>
              <a href="#cake-builder" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Custom Cake Studio
              </a>
              <a href="#reviews" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Customer Reviews
              </a>
              <a href="#story" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Our Heritage (Since 1975)
              </a>
              <a href="#visit" onClick={() => setMobileNavOpen(false)} className="py-1 hover:text-accent">
                Hours &amp; Location
              </a>
              <div className="pt-3 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:7035278394"
                  className="flex items-center gap-2 text-xs font-semibold text-foreground/90 py-1"
                >
                  <Phone className="size-3.5 text-accent" /> (703) 527-8394
                </a>
                <Button
                  onClick={() => {
                    setMobileNavOpen(false);
                    setCartOpen(true);
                  }}
                  variant="bakery"
                  className="w-full justify-center cursor-pointer"
                >
                  View Order Tray ({cartItemCount} items)
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative min-h-[600px] border-b border-border md:min-h-[660px] flex items-center">
        <img
          src={heroImage}
          alt="European cakes, pastries and breads arranged on a bakery table"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-white lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Authentic European Gourmet • Est. 1975</span>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
              Arlington’s Master German Bakery, Built for Seamless Ordering.
            </h1>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-200">
              Fifty years of imported Bavarian flours, stone-hearth artisan loaves, and handcrafted celebration tortes. Choose your size and options online and skip the line at our Culpeper Street counter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="bakery" size="lg" className="h-12 px-6 text-sm font-bold shadow-lg">
                <a href="#menu">
                  Browse Online Menu <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-white/40 bg-black/40 text-white hover:bg-white hover:text-black font-semibold text-sm backdrop-blur-xs"
              >
                <a href="#cake-builder">Design Custom Cake</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SIGNATURE PRODUCT REEL (HORIZONTAL CAROUSEL TO ELIMINATE SCROLLING) */}
      <section id="featured-reel" className="py-14 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow">Chef Wolfgang's Signatures</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Featured Bakery Bestsellers</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Our most sought-after loaves, tortes, and Bavarian specialties. Click any card to customize size and options.
              </p>
            </div>
            {/* Carousel Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCarouselIndex(prev => Math.max(0, prev - 1))}
                disabled={carouselIndex === 0}
                className="size-9 rounded-full cursor-pointer disabled:opacity-40"
                aria-label="Previous featured items"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCarouselIndex(prev => Math.min(featuredProducts.length - 3, prev + 1))}
                disabled={carouselIndex >= featuredProducts.length - 3}
                className="size-9 rounded-full cursor-pointer disabled:opacity-40"
                aria-label="Next featured items"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Smooth Horizontal Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${carouselIndex * 340}px)` }}
            >
              {featuredProducts.map((item) => (
                <div
                  key={item.id}
                  className="w-[310px] shrink-0 flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-xl hover:border-accent transition-all group"
                >
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-full bg-primary/95 px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      {item.germanName && (
                        <p className="text-[11px] italic text-muted-foreground mt-0.5">{item.germanName}</p>
                      )}
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border/80 p-3.5 bg-muted/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">From</span>
                      <span className="font-display text-base font-bold text-accent">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openProductModal(item)}
                        className="text-xs h-8 px-2.5 cursor-pointer hover:border-accent"
                      >
                        <Eye className="size-3 mr-1" /> Options
                      </Button>
                      <Button
                        variant={justAddedId === item.id ? "secondary" : "bakery"}
                        size="sm"
                        onClick={() => quickAddToCart(item)}
                        className={`text-xs h-8 px-3 cursor-pointer transition-all ${
                          justAddedId === item.id
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold ring-2 ring-emerald-400 scale-105"
                            : ""
                        }`}
                      >
                        {justAddedId === item.id ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="size-3.5 animate-in zoom-in" /> Added!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Plus className="size-3" /> Add
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED PROMINENT CAKES SHOWCASE SECTION */}
      <section id="cakes-highlight" className="py-16 sm:py-20 bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
            <div>
              <span className="eyebrow">Celebration &amp; Milestone Showcase</span>
              <h2 className="section-title">Heidelberg Master Cakes &amp; Tortes</h2>
              <p className="max-w-xl text-xs sm:text-sm text-muted-foreground mt-1">
                Authentic Bavarian cream, genuine Kirschwasser cherry schnapps, and custom inscription options for every occasion.
              </p>
            </div>
            <Button asChild variant="bakery" className="shrink-0 cursor-pointer shadow-md">
              <a href="#cake-builder">Design Custom Tiered Cake &rarr;</a>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bakeryMenu.filter(i => i.category === "cakes").slice(0, 4).map((cake) => (
              <div
                key={cake.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-xl hover:border-accent"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-106"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-primary/95 px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground backdrop-blur-xs">
                      {cake.badge}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                      {cake.name}
                    </h3>
                    {cake.germanName && (
                      <p className="text-[11px] italic text-muted-foreground mt-0.5">{cake.germanName}</p>
                    )}
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {cake.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/80 p-3.5 bg-muted/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-medium">Starts at</span>
                    <span className="font-display text-base font-bold text-accent">
                      ${cake.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openProductModal(cake)}
                      className="text-xs h-8 px-2.5 cursor-pointer hover:border-accent"
                    >
                      Sizes &amp; Options
                    </Button>
                    <Button
                      variant={justAddedId === cake.id ? "secondary" : "bakery"}
                      size="sm"
                      onClick={() => quickAddToCart(cake)}
                      className={`text-xs h-8 px-3 cursor-pointer transition-all ${
                        justAddedId === cake.id
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold ring-2 ring-emerald-400 scale-105"
                          : ""
                      }`}
                    >
                      {justAddedId === cake.id ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="size-3.5 animate-in zoom-in" /> Added!
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Plus className="size-3" /> Add
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL BAKERY MENU WITH INSTANT SEARCH & COMPACT EXPANDABLE TABS (PREVENTS SCROLLING) */}
      <section id="menu" className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-8">
            <div>
              <p className="eyebrow">Direct From Our Hearth Ovens</p>
              <h2 className="section-title">Explore Our Full Bakery Catalog</h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground mt-1">
                Filter by category or use instant search to find your favorites. Customize sizes, bread slicing, and special packaging.
              </p>
            </div>
            {/* Quick Instant Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="size-4 text-muted-foreground absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search breads, cakes, strudel..."
                className="w-full rounded-full border border-input bg-card pl-9 pr-4 py-2 text-xs focus:border-accent focus:outline-none shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* STICKY CATEGORY NAV BAR */}
          <div className="sticky top-20 z-30 mb-8 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-md backdrop-blur-md">
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
                  { id: "cakes", label: "🎂 Milestone Cakes" },
                  { id: "breads", label: "🥖 Artisan Breads" },
                  { id: "pastries", label: "🥐 European Pastries" },
                  { id: "deli", label: "🥪 Deli & Platters" },
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

          {/* Product Grid with COMPACT VIEW (Initial 6 items) + EXPAND TOGGLE */}
          {filteredMenu.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              <p className="font-display text-lg font-bold">No products match your search</p>
              <p className="text-xs mt-1">Try searching for "rye", "strudel", or "Black Forest".</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-4 cursor-pointer"
              >
                Clear Search &amp; Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(expandedCategories[selectedCategory] || searchQuery ? filteredMenu : filteredMenu.slice(0, 6)).map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-md hover:border-accent/70"
                  >
                    <div>
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                        />
                        <div className="absolute top-2.5 left-2.5 rounded-full bg-primary/95 px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground backdrop-blur-xs">
                          {item.badge}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                              {item.name}
                            </h3>
                            {item.germanName && (
                              <p className="text-[11px] italic text-muted-foreground mt-0.5">{item.germanName}</p>
                            )}
                          </div>
                        </div>

                        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>

                        {item.servings && (
                          <p className="mt-2 text-[11px] font-semibold text-accent/90">
                            {item.servings}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="border-t border-border/80 p-4 bg-muted/30 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                          {item.sizeOptions || item.packOptions ? "Starting at" : "Price"}
                        </span>
                        <span className="font-display text-lg font-bold text-accent">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openProductModal(item)}
                          className="text-xs h-8 px-2.5 cursor-pointer hover:border-accent"
                        >
                          <Eye className="size-3 mr-1" /> Customize
                        </Button>
                        <Button
                          variant={justAddedId === item.id ? "secondary" : "bakery"}
                          size="sm"
                          onClick={() => quickAddToCart(item)}
                          className={`font-semibold text-xs h-8 px-3 cursor-pointer shadow-xs transition-all ${
                            justAddedId === item.id
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold ring-2 ring-emerald-400 scale-105"
                              : ""
                          }`}
                        >
                          {justAddedId === item.id ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="size-3.5 animate-in zoom-in" /> Added!
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Plus className="size-3.5" /> Add
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More / View Less Expand Button (Prevents Long Scrolling) */}
              {!searchQuery && filteredMenu.length > 6 && (
                <div className="mt-10 text-center">
                  <Button
                    variant="outline"
                    onClick={() => toggleCategoryExpand(selectedCategory)}
                    className="rounded-full px-6 py-2 text-xs font-bold hover:bg-accent hover:text-accent-foreground cursor-pointer shadow-sm"
                  >
                    {expandedCategories[selectedCategory] ? (
                      <>Show Less Products &uarr;</>
                    ) : (
                      <>View All {filteredMenu.length} Products in this Category &darr;</>
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* SECTION 2: Interactive Custom Cake Studio */}
      <section id="cake-builder" className="border-y border-border bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow">Interactive Cake Studio</span>
            <h2 className="section-title">Design Your Custom Celebration Cake</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Eliminate phone tag and paper forms. Customize size, fillings, and piping in seconds with an instant price estimate and 72-hour lead time scheduling.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-accent" /> 1. Select Celebration Occasion
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Birthday", "Wedding", "Anniversary", "Corporate"].map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setCakeOccasion(occ)}
                      className={`rounded-md border p-2.5 text-xs font-semibold transition-all cursor-pointer ${
                        cakeOccasion === occ
                          ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                  <ChefHat className="size-3.5 text-accent" /> 2. Cake Dimensions &amp; Servings
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { name: '8" Round (15–20 guests)', price: 65 },
                    { name: '10" Round (25–30 guests)', price: 88 },
                    { name: '1/4 Sheet (20–25 guests)', price: 105 },
                    { name: '1/2 Sheet (45–50 guests)', price: 170 },
                    { name: 'Full Sheet (90–100 guests)', price: 335 },
                    { name: '2-Tier Wedding (40–50 guests)', price: 240 },
                  ].map((sz) => (
                    <button
                      key={sz.name}
                      type="button"
                      onClick={() => setCakeSize(sz)}
                      className={`rounded-md border p-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                        cakeSize.name === sz.name
                          ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="block font-bold">{sz.name}</span>
                      <span className="text-accent text-[11px] font-mono">${sz.price}.00</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    3. Sponge Flavor
                  </label>
                  <select
                    value={cakeSponge}
                    onChange={(e) => setCakeSponge(e.target.value)}
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-semibold focus:border-accent focus:outline-none cursor-pointer"
                  >
                    <option value="Golden Genoese Sponge">Golden Genoese Sponge</option>
                    <option value="German Chocolate Fudge">German Chocolate Fudge</option>
                    <option value="Traditional Marble Swirl">Traditional Marble Swirl</option>
                    <option value="Almond White Genoese">Almond White Genoese</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    4. Filling &amp; Bavarian Cream
                  </label>
                  <select
                    value={cakeFilling}
                    onChange={(e) => setCakeFilling(e.target.value)}
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-semibold focus:border-accent focus:outline-none cursor-pointer"
                  >
                    <option value="Authentic Bavarian Vanilla Custard">Authentic Bavarian Vanilla Custard</option>
                    <option value="Belgian Chocolate Ganache">Belgian Chocolate Ganache</option>
                    <option value="Black Forest Tart Cherries">Black Forest Tart Cherries</option>
                    <option value="Fresh Raspberry Preserve">Fresh Raspberry Preserve</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  5. Hand-Piped Custom Inscription (Free)
                </label>
                <input
                  type="text"
                  value={cakeInscription}
                  onChange={(e) => setCakeInscription(e.target.value)}
                  placeholder="e.g. Happy 50th Birthday Wolfgang!"
                  className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-accent" /> 6. Required Pickup Date (72-Hour Lead Time)
                </label>
                <select
                  value={cakeDate}
                  onChange={(e) => setCakeDate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-semibold focus:border-accent focus:outline-none cursor-pointer"
                >
                  <option value="Friday (72 hrs notice)">Friday · Pickup between 9:00 AM – 4:30 PM</option>
                  <option value="Saturday (72 hrs notice)">Saturday · Pickup between 8:00 AM – 3:30 PM</option>
                  <option value="Sunday (72 hrs notice)">Sunday · Pickup between 8:00 AM – 12:30 PM</option>
                  <option value="Next Tuesday">Next Tuesday · Pickup between 7:00 AM – 4:30 PM</option>
                </select>
              </div>
            </div>

            {/* Right Live Spec & Order Summary */}
            <div className="lg:col-span-5 rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
              <div className="border-b border-border pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Real-Time Cake Spec</span>
                <h3 className="font-display text-xl font-bold mt-1">{cakeOccasion} Cake Design</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Handcrafted by Master Pastry Chefs in Arlington</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Dimensions &amp; Capacity:</span>
                  <span className="font-semibold text-foreground">{cakeSize.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Sponge Flavor:</span>
                  <span className="font-semibold text-foreground">{cakeSponge}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Bavarian Filling:</span>
                  <span className="font-semibold text-foreground">{cakeFilling}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Piped Message:</span>
                  <span className="font-semibold italic text-accent">"{cakeInscription || "None"}"</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Pickup Schedule:</span>
                  <span className="font-semibold text-foreground">{cakeDate}</span>
                </div>
              </div>

              <div className="rounded-lg bg-secondary/80 p-4 border border-border flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">Estimated Cake Total</span>
                  <span className="font-display text-2xl font-bold text-accent">${cakeSize.price}.00</span>
                </div>
                <Button
                  variant="bakery"
                  onClick={handleCustomCakeTransferToCheckout}
                  className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-bold text-xs h-11 px-5 cursor-pointer shadow-md"
                >
                  Add Custom Cake to Cart &rarr;
                </Button>
              </div>

              <div className="space-y-2 text-[11px] text-muted-foreground">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-accent" /> 100% Satisfaction &amp; Freshness Guarantee
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-accent" /> 72-Hour Lead Time strictly adhered to for best quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Reviews & Customer Testimonials */}
      <section id="reviews" className="py-20 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="eyebrow">Customer Letters &amp; Reviews</span>
            <h2 className="section-title">Loved by Washington Families for 50 Years</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              From birthday milestones to foreign embassy celebrations, here is what our customers say about Wolfgang's bakery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Katherine M.",
                role: "Arlington Resident (Customer since 1994)",
                text: "The Black Forest Cake is identical to what I had in Baden-Württemberg. Real kirschwasser, proper sour cherries, and light fresh cream. Unmatched in the D.C. area."
              },
              {
                name: "Dr. Stefan Weber",
                role: "German Embassy D.C.",
                text: "Heidelberg's Aachener Brot and soft pretzels are the real deal. When we host German national celebrations, Wolfgang is our exclusive choice."
              },
              {
                name: "Lauren & David S.",
                role: "Wedding Couple (McLean, VA)",
                text: "Ordering our 3-tier wedding cake was completely effortless. The Bavarian vanilla cream and buttercream piping looked stunning and tasted divine."
              }
            ].map((rev, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <strong className="block text-xs font-bold text-foreground">{rev.name}</strong>
                  <span className="text-[11px] text-muted-foreground">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Heritage & Wolfgang's Story */}
      <section id="story" className="border-t border-border bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative">
            <img
              src={breadsImage}
              alt="Fresh European breads and pretzels"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover rounded-xl shadow-md"
            />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-lg rounded-md">
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

      {/* SECTION 5: Store Hours, Directions & Visit */}
      <section id="visit" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Come Visit Us</p>
            <h2 className="section-title">Your Neighborhood Bakery, With a European Accent.</h2>
          </div>
          <div className="grid border border-border bg-card rounded-xl overflow-hidden md:grid-cols-3 shadow-xs">
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
                Questions about custom wedding cakes, catering platters, or pickup orders? We are always happy to help.
              </p>
              <a href="tel:7035278394" className="whitespace-nowrap">(703) 527-8394 <ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: Crisply formatted official colored logo + Social Media Links */}
      <footer className="bg-primary/95 py-14 text-primary-foreground border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between lg:px-8">
          <div className="max-w-md">
            {/* Crisp authentic logo in clean white badge so colors pop without blur or whiteout */}
            <div className="inline-block rounded-lg bg-white p-3 shadow-md">
              <img
                src={officialLogo}
                alt="Heidelberg Pastry Shoppe Authentic Logo"
                loading="lazy"
                width="200"
                height="55"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-muted">
              Authentic German bakery, custom celebration cakes, and European delicatessen serving Arlington, Virginia and the Washington D.C. area since 1975.
            </p>

            {/* Official Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Follow Us:</span>
              <a
                href="https://facebook.com/HeidelbergPastryShoppe"
                target="_blank"
                rel="noreferrer"
                aria-label="Heidelberg on Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://instagram.com/heidelbergpastry"
                target="_blank"
                rel="noreferrer"
                aria-label="Heidelberg on Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://maps.google.com/?q=2150+N+Culpeper+Street+Arlington+VA+22207"
                target="_blank"
                rel="noreferrer"
                aria-label="Heidelberg on Google Maps"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MapPin className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm font-medium text-primary-muted">
            <div className="space-y-2.5">
              <strong className="block text-xs font-bold text-white uppercase tracking-wider mb-3">Explore Menu</strong>
              <a href="#featured-reel" className="block hover:text-white">Bestsellers Reel</a>
              <a href="#cakes-highlight" className="block hover:text-white">Milestone Cakes</a>
              <a href="#menu" className="block hover:text-white">Artisan Breads</a>
              <a href="#menu" className="block hover:text-white">Pastries &amp; Sweets</a>
              <a href="#menu" className="block hover:text-white">Deli &amp; Platters</a>
            </div>
            <div className="space-y-2.5">
              <strong className="block text-xs font-bold text-white uppercase tracking-wider mb-3">Services</strong>
              <a href="#cake-builder" className="block hover:text-white">Custom Cake Studio</a>
              <a href="#visit" className="block hover:text-white">Store Hours</a>
              <button onClick={() => setContactModalOpen(true)} className="text-left block hover:text-white cursor-pointer">
                Contact &amp; Inquiries
              </button>
            </div>
            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <strong className="block text-xs font-bold text-white uppercase tracking-wider mb-3">Location</strong>
              <p className="text-xs leading-5">2150 N. Culpeper St<br />Arlington, VA 22207</p>
              <p className="text-xs leading-5 text-accent font-mono whitespace-nowrap">(703) 527-8394</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-5 pt-6 text-xs text-primary-muted lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 1975–2026 Heidelberg Pastry Shoppe. All rights reserved.</span>
          <span>Crafted with pride in Arlington, Virginia</span>
        </div>
      </footer>

      {/* FLOATING ACTION WIDGET: Vertically stacked sleek circles on the bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Contact Button */}
        <div className="group relative flex items-center">
          <span className="mr-2 hidden rounded-md bg-black/85 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-xs group-hover:block transition-all">
            Contact &amp; Message
          </span>
          <button
            onClick={() => setContactModalOpen(true)}
            aria-label="Contact Bakery"
            className="flex size-13 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="size-5 text-accent" />
          </button>
        </div>

        {/* Floating Custom Cake Button */}
        <div className="group relative flex items-center">
          <span className="mr-2 hidden rounded-md bg-black/85 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-xs group-hover:block transition-all">
            Custom Cake Studio
          </span>
          <a
            href="#cake-builder"
            aria-label="Design Custom Cake"
            className="flex size-13 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Cake className="size-5" />
          </a>
        </div>

        {/* Floating Cart Button */}
        <div className="group relative flex items-center">
          <span className="mr-2 hidden rounded-md bg-black/85 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-xs group-hover:block transition-all">
            View Order Tray
          </span>
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Open Order Tray"
            className="relative flex size-13 items-center justify-center rounded-full border border-accent/40 bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="size-5 text-accent" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground shadow-sm animate-in zoom-in-50">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MODAL 1: PRODUCT DETAILS & SPECIFICATIONS MODAL (E-COMMERCE OPTIONS) */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-in fade-in-50 overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col cursor-default"
          >
            {/* Modal Header Bar */}
            <div className="relative aspect-16/9 bg-muted overflow-hidden shrink-0">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 cursor-pointer transition-colors"
                aria-label="Close product details"
              >
                <X className="size-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full">
                  {selectedProduct.badge}
                </span>
                <h3 className="font-display text-2xl font-bold mt-1 text-white">{selectedProduct.name}</h3>
                {selectedProduct.germanName && (
                  <p className="text-xs italic text-zinc-300">{selectedProduct.germanName}</p>
                )}
              </div>
            </div>

            {/* Scrollable Options Body */}
            <div className="p-6 space-y-5 overflow-y-auto flex-1 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* SPECIFICATION 1: SIZE OPTIONS (FOR CAKES & BREADS) */}
              {selectedProduct.sizeOptions && selectedProduct.sizeOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                    <Sliders className="size-3.5 text-accent" /> Select Size &amp; Servings
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.sizeOptions.map((opt) => {
                      const optPrice = selectedProduct.price + opt.priceDelta;
                      return (
                        <button
                          key={opt.name}
                          type="button"
                          onClick={() => {
                            setModalOption(opt.name);
                            setModalOptionPrice(optPrice);
                          }}
                          className={`rounded-lg border p-3 text-left transition-all cursor-pointer ${
                            modalOption === opt.name
                              ? "border-accent bg-accent/15 text-foreground ring-2 ring-accent"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span className="block font-bold text-foreground">{opt.name}</span>
                          <div className="flex justify-between items-center mt-1">
                            {opt.servings && (
                              <span className="text-[10px] text-muted-foreground">{opt.servings}</span>
                            )}
                            <span className="text-accent font-mono font-bold">${optPrice.toFixed(2)}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SPECIFICATION 2: PACK OPTIONS (FOR PASTRIES & PRETZELS) */}
              {selectedProduct.packOptions && selectedProduct.packOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                    <Sliders className="size-3.5 text-accent" /> Select Pack Quantity
                  </label>
                  <div className="space-y-2">
                    {selectedProduct.packOptions.map((opt) => {
                      const optPrice = selectedProduct.price + opt.priceDelta;
                      return (
                        <button
                          key={opt.name}
                          type="button"
                          onClick={() => {
                            setModalOption(opt.name);
                            setModalOptionPrice(optPrice);
                          }}
                          className={`w-full rounded-lg border p-3 flex items-center justify-between transition-all cursor-pointer ${
                            modalOption === opt.name
                              ? "border-accent bg-accent/15 text-foreground ring-2 ring-accent"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span className="font-bold text-foreground">{opt.name}</span>
                          <span className="text-accent font-mono font-bold">${optPrice.toFixed(2)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SPECIFICATION 3: BREAD SLICING PREFERENCE */}
              {selectedProduct.slicingOptions && selectedProduct.slicingOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Bread Slicing Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.slicingOptions.map((slicing) => (
                      <button
                        key={slicing}
                        type="button"
                        onClick={() => setModalSlicing(slicing)}
                        className={`rounded-lg border p-2.5 text-center text-xs font-semibold transition-all cursor-pointer ${
                          modalSlicing === slicing
                            ? "border-accent bg-accent/15 text-foreground ring-1 ring-accent"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {slicing}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SPECIFICATION 4: CUSTOM CAKE INSCRIPTION */}
              {selectedProduct.category === "cakes" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    Custom Hand-Piped Inscription (Optional, Free)
                  </label>
                  <input
                    type="text"
                    value={modalInscription}
                    onChange={(e) => setModalInscription(e.target.value)}
                    placeholder='e.g. "Happy Birthday Alexander!"'
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                  />
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Hand-piped in dark chocolate ganache or European royal icing.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Bottom Sticky CTA */}
            <div className="p-4 border-t border-border bg-muted/40 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] text-muted-foreground block">Customized Price</span>
                <span className="font-display text-xl font-bold text-accent">
                  ${modalOptionPrice.toFixed(2)}
                </span>
              </div>
              <Button
                variant="bakery"
                onClick={addItemFromModal}
                className="bg-accent text-accent-foreground font-bold hover:bg-primary hover:text-primary-foreground h-11 px-6 text-xs cursor-pointer shadow-md"
              >
                Add to Order Tray (${modalOptionPrice.toFixed(2)}) &rarr;
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: PURE CART DRAWER (ORDER TRAY ONLY - ITEMS, QUANTITIES, TOTALS) */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-card text-card-foreground shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300 border-l border-border cursor-default"
          >
            {/* Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-muted/40">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-accent" />
                <h3 className="font-display font-bold text-lg">Your Order Tray</h3>
                <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-bold">
                  {cartItemCount}
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  <ShoppingBag className="size-12 mx-auto mb-3 text-muted-foreground/40" />
                  <p className="font-display text-base font-bold text-foreground">Your tray is empty</p>
                  <p className="text-xs mt-1">Browse our loaves, cakes, and pastries to add items.</p>
                  <Button variant="bakery" size="sm" onClick={() => setCartOpen(false)} className="mt-5 cursor-pointer">
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Selected Bakery Items ({cartItemCount})
                  </span>
                  {cart.map((c) => (
                    <div
                      key={c.id}
                      className="rounded-xl border border-border p-3.5 bg-background flex flex-col gap-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <strong className="block text-xs font-bold text-foreground">{c.item.name}</strong>
                          {c.selectedOption && (
                            <span className="inline-block text-[11px] text-accent font-medium mt-0.5">
                              {c.selectedOption}
                            </span>
                          )}
                          {c.inscription && (
                            <p className="text-[10px] text-muted-foreground italic mt-0.5">
                              Inscription: "{c.inscription}"
                            </p>
                          )}
                        </div>
                        <span className="text-xs font-display font-bold text-accent min-w-14 text-right">
                          ${(c.customPrice * c.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-border/60 pt-2 mt-1">
                        <span className="text-[10px] text-muted-foreground">
                          ${c.customPrice.toFixed(2)} each
                        </span>
                        <div className="flex items-center gap-2 border border-border rounded-md px-2 py-0.5 bg-muted/40">
                          <button
                            onClick={() => updateQuantity(c.id, -1)}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="text-xs font-bold min-w-4 text-center">{c.quantity}</span>
                          <button
                            onClick={() => updateQuantity(c.id, 1)}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tray Footer & Proceed to Checkout CTA */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-border bg-muted/40 space-y-3">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Estimated VA Tax (6%)</span>
                  <span className="font-semibold text-foreground">${(cartTotal * 0.06).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-foreground border-t border-border pt-2">
                  <span>Total Due</span>
                  <span className="font-display text-base text-accent">
                    ${(cartTotal * 1.06).toFixed(2)}
                  </span>
                </div>

                <Button
                  variant="bakery"
                  onClick={() => {
                    setCartOpen(false);
                    setCheckoutModalOpen(true);
                    setCheckoutStep("form");
                  }}
                  className="w-full justify-center bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-bold h-12 text-sm cursor-pointer shadow-md"
                >
                  Proceed to Checkout (${(cartTotal * 1.06).toFixed(2)}) &rarr;
                </Button>

                <p className="text-[10px] text-center text-muted-foreground">
                  Fast in-store pickup at 2150 N. Culpeper St, Arlington
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: DEDICATED SHOPIFY CHECKOUT WINDOW (SEPARATE FROM CART DRAWER) */}
      {checkoutModalOpen && (
        <div
          onClick={() => setCheckoutModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-in fade-in-50 overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-8 my-8 max-h-[92vh] overflow-y-auto cursor-default"
          >
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {checkoutStep === "form" ? (
              <form onSubmit={handleCompleteOrder} className="space-y-6">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="size-5 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Shopify Express Checkout</span>
                </div>
                <h3 className="font-display text-2xl font-bold">Complete Your Bakery Order</h3>

                {/* Order Summary Snapshot */}
                <div className="rounded-lg bg-secondary/60 p-4 border border-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-muted-foreground block">Order Items</span>
                    <strong className="text-foreground">{cartItemCount} item{cartItemCount > 1 ? "s" : ""} in Tray</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground block">Total with VA Tax</span>
                    <strong className="text-accent font-display text-base">${(cartTotal * 1.06).toFixed(2)}</strong>
                  </div>
                </div>

                {/* Section 1: Customer Contact Info */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <User className="size-3.5 text-accent" /> 1. Customer Contact Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Eleanor Vance"
                        className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                        Email (Order Receipt) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Billing & Order Address */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-accent" /> 2. Billing &amp; Order Address
                  </span>

                  {/* Country * */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={billingCountry}
                      onChange={(e) => setBillingCountry(e.target.value)}
                      required
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-medium focus:border-accent focus:outline-none cursor-pointer"
                    >
                      <option value="United States (US)">United States (US)</option>
                    </select>
                  </div>

                  {/* Street address * */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                      Street address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="House number and street name"
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>

                  {/* Apartment, suite, unit etc. (optional) */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                      Apartment, suite, unit etc. (optional) <span className="text-muted-foreground/70 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={apartmentSuite}
                      onChange={(e) => setApartmentSuite(e.target.value)}
                      placeholder="Apartment, suite, unit etc. (optional)"
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>

                  {/* Town / City *, State *, ZIP * */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                        Town / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={townCity}
                        onChange={(e) => setTownCity(e.target.value)}
                        placeholder="Arlington"
                        className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={stateProvince}
                        onChange={(e) => setStateProvince(e.target.value)}
                        required
                        className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-medium focus:border-accent focus:outline-none cursor-pointer"
                      >
                        <option value="Virginia">Virginia</option>
                        <option value="District of Columbia">District of Columbia</option>
                        <option value="Maryland">Maryland</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                        ZIP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="22207"
                        className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone * */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="(703) 555-0199"
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 3: Pickup Slot Window */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 mb-2">
                    <Clock3 className="size-3.5 text-accent" /> 3. Pickup Window (2150 N. Culpeper St)
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs font-semibold focus:border-accent focus:outline-none cursor-pointer"
                  >
                    <option value="Today, 3:00 PM – 4:00 PM">Today, 3:00 PM – 4:00 PM</option>
                    <option value="Today, 4:00 PM – 5:00 PM">Today, 4:00 PM – 5:00 PM</option>
                    <option value="Tomorrow, 8:00 AM – 9:00 AM">Tomorrow, 8:00 AM – 9:00 AM</option>
                    <option value="Tomorrow, 11:00 AM – 12:00 PM">Tomorrow, 11:00 AM – 12:00 PM</option>
                    <option value="Saturday, 9:00 AM – 10:00 AM">Saturday, 9:00 AM – 10:00 AM</option>
                  </select>
                </div>

                {/* Section 4: Special Notes of the Customer */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <FileText className="size-3.5 text-accent" /> 4. Special Notes of the Customer
                  </label>
                  <textarea
                    rows={3}
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Notes about your order, e.g. special delivery or pickup instructions, allergy precautions, message for the baker."
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Section 5: Payment Method Selection */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <CreditCard className="size-3.5 text-accent" /> 5. Payment Method (Demo Gateway)
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`rounded-md border p-2.5 text-center text-xs font-semibold transition-all cursor-pointer ${
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
                      className={`rounded-md border p-2.5 text-center text-xs font-semibold transition-all cursor-pointer ${
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
                      className={`rounded-md border p-2.5 text-center text-xs font-semibold transition-all cursor-pointer ${
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
                            className="w-full rounded-md border border-input bg-background p-2 text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-muted-foreground block mb-0.5">CVC</label>
                          <input
                            type="text"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            className="w-full rounded-md border border-input bg-background p-2 text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "shoppay" && (
                    <div className="rounded-md bg-purple-950/20 border border-purple-500/30 p-3 text-center text-xs text-purple-800 dark:text-purple-300">
                      <span className="font-bold">⚡ 1-Click Shop Pay Checkout</span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        Verified via SMS 6-digit code for instant payment.
                      </p>
                    </div>
                  )}

                  {paymentMethod === "counter" && (
                    <div className="rounded-md bg-secondary p-3 text-center text-xs text-muted-foreground">
                      <span>Pay with cash or card at the pickup counter (2150 N. Culpeper St).</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="bakery"
                  className="w-full justify-center bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground font-bold h-12 text-sm cursor-pointer shadow-md"
                >
                  Authorize &amp; Place Order (${(cartTotal * 1.06).toFixed(2)}) &rarr;
                </Button>
              </form>
            ) : (
              /* Order Confirmation Screen */
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
                <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="font-display text-2xl font-bold">Thank You! Order Confirmed</h3>
                <p className="text-xs text-muted-foreground">
                  Your order ticket <strong className="text-foreground">{confirmedOrderId}</strong> has been received by Heidelberg Pastry Shoppe.
                </p>

                <div className="rounded-xl border border-border bg-secondary/50 p-4 text-left text-xs space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Customer:</span>
                    <strong className="text-foreground">{customerName || "Valued Customer"}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-mono font-bold text-accent">{customerPhone || "(703) 555-0199"}</span>
                  </div>
                  {streetAddress && (
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-muted-foreground shrink-0">Address:</span>
                      <span className="text-right font-medium text-foreground">
                        {streetAddress}{apartmentSuite ? `, ${apartmentSuite}` : ""}, {townCity}, {stateProvince} {zipCode}, {billingCountry}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pickup Time:</span>
                    <strong className="text-foreground">{pickupTime}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pickup Location:</span>
                    <span className="font-semibold text-foreground">2150 N. Culpeper St, Counter #1</span>
                  </div>
                  {orderNotes && (
                    <div className="border-t border-border/80 pt-2 text-left">
                      <span className="text-muted-foreground block text-[11px] mb-0.5">Special Customer Notes:</span>
                      <p className="font-medium text-foreground italic bg-background/80 p-2 rounded border border-border/60">
                        "{orderNotes}"
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  variant="bakery"
                  onClick={() => setCheckoutModalOpen(false)}
                  className="mt-4 cursor-pointer"
                >
                  Back to Bakery
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 4: HOVERING / FLOATING CONTACT US POPUP */}
      {contactModalOpen && (
        <div
          onClick={() => setContactModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs animate-in fade-in-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-7 cursor-default"
          >
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="size-5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Contact Heidelberg Bakery</span>
            </div>
            <h3 className="font-display text-xl font-bold">Send Wolfgang &amp; Team a Message</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-5">
              Have questions about specialty breads, custom wedding cakes, or catering platters? We reply within 2 hours.
            </p>

            {contactSent ? (
              <div className="rounded-md bg-emerald-950/80 border border-emerald-500/40 p-5 text-center animate-in zoom-in-95">
                <CheckCircle2 className="size-8 text-emerald-400 mx-auto mb-2" />
                <strong className="block text-sm text-emerald-200">Message Sent to Heidelberg!</strong>
                <p className="mt-1 text-xs text-emerald-300">
                  Wolfgang's team will contact you at {contactEmail || contactPhone || "your email/phone"} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Marcus Miller"
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="marcus@example.com"
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="(703) 527-8394"
                      className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Your Message or Inquiry *</label>
                  <textarea
                    required
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Hello! I would like to ask about a custom 3-tier cake for our anniversary..."
                    className="w-full rounded-md border border-input bg-background p-2.5 text-xs focus:border-accent focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="bakery"
                  className="w-full justify-center bg-accent text-accent-foreground font-bold hover:bg-primary hover:text-primary-foreground h-11 text-xs cursor-pointer shadow-md"
                >
                  <Send className="size-3.5" /> Send Message Directly to Bakery
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FLOATING TOAST: Non-blocking Add to Cart feedback with instant checkout option */}
      {toastItem && (
        <aside
          aria-label="Item added notification"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex max-w-lg w-[94%] sm:w-auto items-center justify-between gap-3 sm:gap-4 rounded-xl border border-emerald-500/40 bg-zinc-950/95 text-white p-3 sm:px-5 sm:py-3.5 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-emerald-500/30"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="size-4 sm:size-5 animate-in zoom-in" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <span>Added to Order Tray!</span>
                <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-1.5 py-0.5 rounded font-mono font-bold">
                  {cartItemCount} item{cartItemCount > 1 ? "s" : ""}
                </span>
              </p>
              <p className="text-xs text-zinc-300 font-medium truncate max-w-[170px] sm:max-w-xs">
                {toastItem.item.name} {toastItem.option ? `(${toastItem.option})` : `($${toastItem.item.price.toFixed(2)})`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setToastItem(null);
                setCartOpen(true);
              }}
              className="rounded-lg bg-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-accent-foreground shadow-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              Go to Cart for Checkout &rarr;
            </button>
            <button
              onClick={() => setToastItem(null)}
              className="text-zinc-400 hover:text-white p-1 rounded-md cursor-pointer transition-colors"
              aria-label="Close notification"
            >
              <X className="size-4" />
            </button>
          </div>
        </aside>
      )}
    </main>
  );
}

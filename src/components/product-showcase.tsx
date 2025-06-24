"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export function ProductShowcase() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="products"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Наши товары
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент продукции для создания уникального
            корпоративного стиля
          </p>
        </div>

        <div
          className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3
          "
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="
                group relative rounded-xl overflow-hidden shadow-lg
                transition-transform bg-black
                aspect-[4/5]
              "
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority
              />
              <div
                className="
                  absolute bottom-0 left-0 w-full
                  bg-gradient-to-t from-black/90 via-black/50 to-transparent
                  p-4
                "
              >
                <h3 className="text-2xl font-bold text-white drop-shadow">
                  {category.name}
                </h3>
                <p className="text-xl text-white/80">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-medium px-8 py-4"
          >
            Заказать сейчас
            <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

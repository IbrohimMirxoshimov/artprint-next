"use client";

import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export function ProductShowcase() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наши товары</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент продукции для создания уникального корпоративного стиля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-secondary/5 hover-lift">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={category.image} 
                    alt={`${category.name} с логотипом`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
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

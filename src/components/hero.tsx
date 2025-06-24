"use client";

import { Button } from '@/components/ui/button';
import { VALUE_PROPOSITIONS } from '@/lib/constants';
import { Star, Tag, Clock, Award, ArrowRight, Phone } from 'lucide-react';

const iconMap = {
  '⭐': Star,
  '🏷️': Tag,
  '⏰': Clock,
  '🏆': Award,
};

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Почему <span className="text-gradient">ArtPrint</span>?
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Ведущая компания по изготовлению корпоративной одежды и сувениров с логотипом в Узбекистане
          </p>
          <div className="flex items-center justify-center mb-12">
            <Phone className="h-6 w-6 text-secondary mr-3" />
            <a href="tel:+998991305000" className="phone-highlight text-3xl font-bold hover:scale-105 transition-transform">
              +998 99 130-50-00
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {VALUE_PROPOSITIONS.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Star;
              return (
                <div key={index} className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-secondary text-2xl w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer%204-gigapixel-standard%20v2-2x.png-WQSnhQOCNVfXtL99UQnVx81hYTfF04.jpeg" 
                alt="Корпоративная одежда с логотипом" 
                className="rounded-xl shadow-lg w-full h-auto hover-lift" 
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl font-bold text-primary mb-6">Корпоративная одежда с вашим логотипом</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Создаем уникальную корпоративную одежду, которая подчеркивает стиль вашей компании и делает ваш бренд узнаваемым.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-medium"
              >
                Заказать сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

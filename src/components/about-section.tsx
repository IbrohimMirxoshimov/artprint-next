"use client";

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">О нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создаем качественную корпоративную продукцию, которая подчеркивает уникальность вашего бренда
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column - Quality badge and main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <Image 
                src="https://i.postimg.cc/5ttzTwV5/badge-1.png" 
                alt="Quality badge" 
                className="w-16 h-16 flex-shrink-0" 
                width={64}
                height={64}
              />
              <h3 className="text-2xl font-bold text-primary">Гарантия качества</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы используем только высококачественные материалы, которые обеспечивают комфорт и долговечность нашей одежды. Кроме того, наши принты наносятся с использованием современных технологий, что гарантирует их яркость и насыщенность на длительный период времени.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Независимо от того, какой бизнес вы ведете, наша одежда с принтами подходит для всех видов мероприятий, от встреч с клиентами до корпоративных мероприятий. Мы уверены, что наши уникальные принты помогут вашей компании привлечь внимание и создать неповторимый имидж.
              </p>
            </div>

            {/* Call to action moved here */}
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
              <Image 
                src="https://i.postimg.cc/zf9cfDpQ/shop.png" 
                alt="Order icon" 
                className="w-12 h-12 flex-shrink-0" 
                width={48}
                height={48}
              />
              <div>
                <p className="text-lg font-semibold text-primary mb-1">Закажите нашу одежду с принтами уже сегодня</p>
                <p className="text-muted-foreground">и сделайте ваш бизнес заметным и успешным!</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Image 
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern printing equipment and quality materials" 
                className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" 
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-medium px-8 py-4"
          >
            Заказать сейчас
            <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

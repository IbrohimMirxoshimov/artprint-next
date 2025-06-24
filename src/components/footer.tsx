import { Facebook, Instagram, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ArtPrint</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Ведущая компания по изготовлению корпоративной одежды и сувениров с логотипом в Узбекистане. Качество, скорость, надежность.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Печать на футболках</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Корпоративная одежда</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Промо продукция</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Брендинг</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>г. Ташкент, Узбекистан</li>
              <li>
                <a href="tel:+998991305000" className="phone-highlight text-lg font-bold hover:scale-105 transition-transform inline-block">
                  +998 99 130-50-00
                </a>
              </li>
              <li>
                <a href="mailto:info@artprint.uz" className="hover:text-foreground transition-colors">
                  info@artprint.uz
                </a>
              </li>
              <li>Пн-Пт: 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ArtPrint. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

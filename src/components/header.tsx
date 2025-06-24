"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">ArtPrint</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Товары
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Клиенты
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Контакты
              </button>
              <a 
                href="tel:+998991305000"
                className="premium-phone-button text-white font-bold px-6 py-3 rounded-lg flex items-center relative overflow-hidden hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="phone-highlight text-lg">+998 99 130-50-00</span>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Товары
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Клиенты
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Контакты
              </button>
              <div className="px-3 py-2 border-t border-muted">
                <a 
                  href="tel:+998991305000"
                  className="premium-phone-button text-white font-bold px-6 py-4 rounded-lg flex items-center justify-center w-full relative overflow-hidden hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="phone-highlight text-xl">+998 99 130-50-00</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { CLIENT_LOGOS } from '@/lib/constants';
import Image from 'next/image';

export function ClientShowcase() {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Помогаем компаниям <span className="text-secondary">становиться узнаваемыми</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам создание своего корпоративного имиджа
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {CLIENT_LOGOS.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 logo-hover"
            >
              <Image 
                src={logo.image} 
                alt={logo.name} 
                className="max-h-12 max-w-full object-contain" 
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

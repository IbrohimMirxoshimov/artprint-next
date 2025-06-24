"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: '', phone: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Ошибка отправки",
        description: error.message || "Не удалось отправить заявку. Попробуйте еще раз.",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        variant: "destructive",
        title: "Заполните обязательные поля",
        description: "Имя и телефон обязательны для заполнения.",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наша локация</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и оформления заказа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Контактная информация</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-secondary text-xl w-6 h-6" />
                <span className="text-muted-foreground ml-3">Узбекистан, г. Ташкент</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-secondary text-xl w-6 h-6" />
                <a href="tel:+998991305000" className="phone-highlight ml-3 text-xl font-bold hover:scale-105 transition-transform">
                  +998 99 130-50-00
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-secondary text-xl w-6 h-6" />
                <span className="text-muted-foreground ml-3">info@artprint.uz</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-secondary text-xl w-6 h-6" />
                <span className="text-muted-foreground ml-3">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Ваше имя *
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Телефон *
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Расскажите о вашем проекте..."
                  className="mt-1"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Отправляем...' : 'Отправить заявку'}
              </Button>
            </form>
          </div>

          <Card className="overflow-hidden">
            <div className="h-96 bg-muted/50 flex items-center justify-center relative">
              <YMaps>
                <Map
                  width="100%"
                  height="100%"
                  defaultState={{
                    center: [41.284226, 69.219469],
                    zoom: 15,
                  }}
                  options={{
                    suppressMapOpenBlock: true,
                  }}
                >
                  <Placemark
                    geometry={[41.284226, 69.219469]}
                    options={{
                      preset: 'islands#redDotIcon',
                    }}
                    properties={{
                      balloonContent: `
                        <div style="padding: 10px;">
                          <h3 style="margin: 0 0 10px 0; color: #333;">ArtPrint</h3>
                          <p style="margin: 0; color: #666;">Производство корпоративной одежды и сувениров</p>
                          <p style="margin: 5px 0 0 0; color: #666;">Узбекистан, г. Ташкент</p>
                        </div>
                      `,
                    }}
                  />
                </Map>
              </YMaps>
            </div>
            <CardContent className="p-6">
              <h4 className="font-semibold text-primary mb-2">ArtPrint</h4>
              <p className="text-muted-foreground text-sm mb-4">Производство корпоративной одежды и сувениров</p>
              <a 
                href="https://yandex.ru/maps/?from=mapframe&ll=69.219469%2C41.284226&source=mapframe&um=constructor%3Aea8ab171310c7a0ded42c8feca2454baf4b9a20944786bf949feeb20dd71ad46&utm_source=mapframe&z=12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в Яндекс Картах
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const memories = [
    {
      image: '/img/f33d3c1b-dc4b-4bc4-8643-955ba06b5da5.jpg',
      date: 'Наше первое свидание',
      description: 'Тот особенный вечер, когда всё началось ✨'
    },
    {
      image: '/img/a7b3bf5a-f9d9-4e68-87f5-a302c4c957cd.jpg',
      date: 'Первые выходные вместе',
      description: 'Когда мы поняли, что не хотим расставаться'
    },
    {
      image: '/img/f176ac74-2eba-42c8-a91e-904a730f74d2.jpg',
      date: 'Наше путешествие',
      description: 'Собирая воспоминания по всему миру'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Музыкальный плеер */}
      <audio ref={audioRef} loop>
        <source src="#" type="audio/mpeg" />
      </audio>

      {/* Плавающая кнопка музыки */}
      <Button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg"
        size="icon"
      >
        <Icon name={isPlaying ? "Pause" : "Play"} size={20} className="text-white" />
      </Button>

      {/* Главный герой */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/img/f33d3c1b-dc4b-4bc4-8643-955ba06b5da5.jpg')`
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 animate-fade-in">
            Наш
            <span className="block text-pink-500">первый год</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-300">
            365 дней счастья, смеха и любви
          </p>
          <div className="flex items-center justify-center space-x-2 animate-fade-in delay-500">
            <Icon name="Heart" size={24} className="text-pink-500 animate-pulse" />
            <span className="text-lg text-gray-700 font-medium">21 июля 2024 - 21 июля 2025</span>
            <Icon name="Heart" size={24} className="text-pink-500 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Поздравления */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Мои слова для тебя
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-0">
                <Icon name="Heart" size={32} className="text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Мой самый дорогой человек</h3>
                <p className="text-gray-600 leading-relaxed">
                  Этот год с тобой стал самым счастливым в моей жизни. Каждый день рядом с тобой — это подарок, 
                  который я ценю больше всего на свете. Ты делаешь мой мир ярче и наполняешь его смыслом.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-0">
                <Icon name="Stars" size={32} className="text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Наша любовь</h3>
                <p className="text-gray-600 leading-relaxed">
                  За этот год мы пережили столько прекрасных моментов вместе. Наша любовь стала крепче, 
                  глубже и искреннее. Я благодарен судьбе за то, что она подарила мне тебя.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-0">
                <Icon name="Sparkles" size={32} className="text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Наши мечты</h3>
                <p className="text-gray-600 leading-relaxed">
                  Впереди у нас еще так много планов и мечтаний! Я хочу строить наше будущее вместе с тобой, 
                  путешествовать по миру и создавать новые незабываемые воспоминания.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-0">
                <Icon name="Sun" size={32} className="text-orange-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Мое обещание</h3>
                <p className="text-gray-600 leading-relaxed">
                  Я обещаю любить тебя каждый день, поддерживать во всем и быть рядом в любых обстоятельствах. 
                  Ты — мой человек, моя половинка, мое счастье на всю жизнь.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея воспоминаний */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Наши драгоценные моменты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={memory.image} 
                    alt={memory.date}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{memory.date}</h3>
                  <p className="text-gray-600">{memory.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 italic">
              "Каждая фотография рассказывает историю нашей любви..."
            </p>
          </div>
        </div>
      </section>

      {/* Финальное сообщение */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-3xl p-12 shadow-2xl">
            <Icon name="Heart" size={48} className="mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              С годовщиной, моя любовь! 💕
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Спасибо за этот невероятный год. Ты сделала мою жизнь полной смысла и счастья. 
              Я люблю тебя больше, чем слова могут выразить, и с нетерпением жду наших следующих 
              приключений вместе. Ты — мое всё! ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            Создано с любовью • 19 июля 2025 • Наш первый год ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ArchitectureCard {
  title: string;
  description: string;
  icon: string;
  applications: string[];
  keyFeatures: string[];
}

const architectures: ArchitectureCard[] = [
  {
    title: 'Сверточные нейронные сети (CNN)',
    description: 'Специализированная архитектура для обработки данных с сеточной топологией, таких как изображения',
    icon: 'Grid3x3',
    applications: ['Компьютерное зрение', 'Распознавание образов', 'Медицинская диагностика'],
    keyFeatures: ['Свертка', 'Pooling', 'Feature extraction', 'Иерархическое обучение']
  },
  {
    title: 'Рекуррентные сети (RNN/LSTM)',
    description: 'Архитектура для работы с последовательными данными и временными рядами',
    icon: 'GitBranch',
    applications: ['Обработка естественного языка', 'Предсказание временных рядов', 'Генерация текста'],
    keyFeatures: ['Память состояний', 'Долгосрочные зависимости', 'Backpropagation through time']
  },
  {
    title: 'Трансформеры (Transformer)',
    description: 'Современная архитектура на основе механизма внимания для параллельной обработки последовательностей',
    icon: 'Sparkles',
    applications: ['GPT модели', 'BERT', 'Машинный перевод', 'Мультимодальные модели'],
    keyFeatures: ['Self-attention', 'Позиционное кодирование', 'Параллелизация', 'Масштабируемость']
  },
  {
    title: 'Генеративные состязательные сети (GAN)',
    description: 'Две нейросети соревнуются: генератор создает данные, дискриминатор их оценивает',
    icon: 'Users',
    applications: ['Генерация изображений', 'Style transfer', 'Deepfake', 'Дополнение данных'],
    keyFeatures: ['Adversarial training', 'Генератор', 'Дискриминатор', 'Nash equilibrium']
  }
];

const researchAreas = [
  {
    title: 'Компьютерное зрение',
    papers: ['ResNet (2015)', 'YOLO (2016)', 'Vision Transformer (2020)'],
    icon: 'Eye'
  },
  {
    title: 'Обработка естественного языка',
    papers: ['Attention is All You Need (2017)', 'GPT-3 (2020)', 'BERT (2018)'],
    icon: 'MessageSquare'
  },
  {
    title: 'Reinforcement Learning',
    papers: ['AlphaGo (2016)', 'DQN (2015)', 'PPO (2017)'],
    icon: 'Gamepad2'
  },
  {
    title: 'Multimodal AI',
    papers: ['CLIP (2021)', 'DALL-E 2 (2022)', 'GPT-4 Vision (2023)'],
    icon: 'Layers'
  }
];

const futureDirections = [
  {
    title: 'Искусственный общий интеллект (AGI)',
    description: 'Разработка систем с универсальными когнитивными способностями',
    progress: 15,
    icon: 'Brain'
  },
  {
    title: 'Квантовое машинное обучение',
    description: 'Использование квантовых компьютеров для ускорения обучения',
    progress: 25,
    icon: 'Atom'
  },
  {
    title: 'Нейроморфные вычисления',
    description: 'Чипы, имитирующие структуру биологического мозга',
    progress: 40,
    icon: 'Cpu'
  },
  {
    title: 'Объяснимый ИИ (XAI)',
    description: 'Создание прозрачных и интерпретируемых моделей',
    progress: 55,
    icon: 'FileSearch'
  }
];

export default function Index() {
  const [selectedArch, setSelectedArch] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Искусственный интеллект
            </h1>
            <div className="flex gap-6">
              <a href="#tech" className="text-sm hover:text-primary transition-colors">Технологии</a>
              <a href="#applications" className="text-sm hover:text-primary transition-colors">Применение</a>
              <a href="#research" className="text-sm hover:text-primary transition-colors">Исследования</a>
              <a href="#future" className="text-sm hover:text-primary transition-colors">Будущее</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold font-heading mb-6 leading-tight">
                Искусственный интеллект: его возможности и потенциал
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Искусственный интеллект трансформирует современный мир, открывая невероятные 
                возможности во всех сферах человеческой деятельности. От медицинской диагностики 
                до создания произведений искусства, от автономных транспортных средств до 
                персонализированного образования — ИИ меняет способы решения сложнейших задач.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Нейронные сети, вдохновлённые структурой человеческого мозга, позволяют машинам 
                обучаться на основе данных, распознавать сложные паттерны и принимать решения. 
                Современные архитектуры глубокого обучения достигли уровня, превосходящего 
                человеческие возможности во многих задачах — от распознавания образов до 
                обработки естественного языка.
              </p>
              <div className="flex gap-4">
                <a href="#tech" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Исследовать технологии
                  <Icon name="ArrowRight" size={18} />
                </a>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f2aa839e-1e15-4f24-a170-066a6340f5a4/files/fccc9ff5-2b83-4f0f-a87b-fd00d1ebc1b7.jpg" 
                alt="Neural Network" 
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Архитектуры</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Типы нейронных сетей</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              Детальный разбор основных архитектур современных нейронных сетей. Каждая архитектура 
              разработана для решения специфических задач и обладает уникальными особенностями, 
              которые делают её оптимальной для определённых типов данных и применений.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Нажмите на карточку, чтобы узнать больше о применении и ключевых особенностях каждой архитектуры.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {architectures.map((arch, idx) => (
              <Card 
                key={idx}
                className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => setSelectedArch(selectedArch === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={arch.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">{arch.title}</h3>
                      <p className="text-sm text-muted-foreground">{arch.description}</p>
                    </div>
                  </div>
                  
                  {selectedArch === idx && (
                    <div className="mt-6 space-y-4 animate-accordion-down">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Применение:</h4>
                        <div className="flex flex-wrap gap-2">
                          {arch.applications.map((app, i) => (
                            <Badge key={i} variant="secondary">{app}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Ключевые особенности:</h4>
                        <ul className="space-y-1">
                          {arch.keyFeatures.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Области применения</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Где используется ИИ</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Искусственный интеллект проникает во все сферы нашей жизни, революционизируя 
              способы работы, обучения, лечения и взаимодействия с технологиями. От промышленного 
              производства до творческих индустрий — ИИ открывает новые горизонты возможностей.
            </p>
          </div>

          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="vision">Зрение</TabsTrigger>
              <TabsTrigger value="nlp">NLP</TabsTrigger>
              <TabsTrigger value="robotics">Роботика</TabsTrigger>
              <TabsTrigger value="healthcare">Медицина</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vision" className="space-y-4">
              <Card>
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <Icon name="Eye" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-4">Компьютерное зрение</h3>
                      <p className="text-muted-foreground mb-6">
                        Распознавание объектов, сегментация изображений, детекция лиц, 
                        автономные транспортные средства, медицинская визуализация
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Технологии</h4>
                          <p className="text-sm text-muted-foreground">YOLO, Mask R-CNN, EfficientNet</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Точность</h4>
                          <p className="text-sm text-muted-foreground">95-99% на ImageNet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nlp" className="space-y-4">
              <Card>
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <Icon name="MessageSquare" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-4">Обработка естественного языка</h3>
                      <p className="text-muted-foreground mb-6">
                        Машинный перевод, генерация текста, чат-боты, sentiment analysis, 
                        извлечение информации из документов
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Модели</h4>
                          <p className="text-sm text-muted-foreground">GPT-4, BERT, T5, LLaMA</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Параметры</h4>
                          <p className="text-sm text-muted-foreground">До 1.7 трлн параметров</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="robotics" className="space-y-4">
              <Card>
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <Icon name="Bot" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-4">Роботизированные системы</h3>
                      <p className="text-muted-foreground mb-6">
                        Промышленная автоматизация, автономные дроны, роботы-ассистенты, 
                        манипуляция объектами, навигация
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Методы</h4>
                          <p className="text-sm text-muted-foreground">RL, Imitation Learning, SLAM</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Применение</h4>
                          <p className="text-sm text-muted-foreground">Логистика, производство</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="healthcare" className="space-y-4">
              <Card>
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <Icon name="Heart" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-4">Медицина и здравоохранение</h3>
                      <p className="text-muted-foreground mb-6">
                        Диагностика заболеваний, анализ медицинских изображений, 
                        разработка лекарств, персонализированная медицина, прогнозирование
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Области</h4>
                          <p className="text-sm text-muted-foreground">Онкология, кардиология, радиология</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Результаты</h4>
                          <p className="text-sm text-muted-foreground">Точность диагностики экспертов</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="research" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Научные прорывы</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Ключевые исследования</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              Основополагающие работы, изменившие развитие искусственного интеллекта. Эти исследования 
              стали краеугольными камнями современного машинного обучения и открыли путь к созданию 
              систем, способных решать задачи, ранее доступные только человеку.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Каждая область представляет собой активное направление исследований с постоянными 
              инновациями и прорывами, расширяющими границы возможного.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={area.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.papers.map((paper, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Icon name="FileText" size={14} className="mt-1 flex-shrink-0" />
                        {paper}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="future" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Перспективы</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Будущее искусственного интеллекта</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              Направления развития и потенциальные прорывы в области ИИ. Мы стоим на пороге 
              фундаментальных изменений в технологии искусственного интеллекта, которые могут 
              радикально трансформировать общество и открыть новые возможности для человечества.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              От квантовых вычислений до искусственного общего интеллекта — эти направления 
              определяют будущее технологического прогресса на десятилетия вперёд.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {futureDirections.map((direction, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon name={direction.icon as any} size={24} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">{direction.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{direction.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Стадия развития</span>
                          <span>{direction.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${direction.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Этика и безопасность ИИ</h3>
                  <p className="text-muted-foreground mb-6">
                    С развитием мощных систем ИИ становится критически важным 
                    обеспечить их безопасность, прозрачность и соответствие 
                    человеческим ценностям. Основные вызовы:
                  </p>
                  <ul className="space-y-3">
                    {['Предвзятость и справедливость', 'Прозрачность решений', 'Контроль и выравнивание целей', 'Конфиденциальность данных'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f2aa839e-1e15-4f24-a170-066a6340f5a4/files/1e28251e-f4d4-42a8-93f8-a0c783d777c3.jpg" 
                    alt="AI Ethics" 
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Искусственный интеллект: возможности и потенциал
          </p>
        </div>
      </footer>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = 'ru' | 'kz' | 'en';

const translations = {
  ru: {
    nav: { telegram: 'Telegram' },
    hero: {
      title: 'Инвестиции в реальный офлайн-бизнес',
      subtitle: 'Торговые полки в магазинах Астаны. Без участия инвестора.',
      cta1: 'Получить расчет',
      cta2: 'Как работает модель'
    },
    howItWorks: {
      title: 'Как работает модель',
      step1: { title: 'Инвестиция', desc: 'Средства идут на покупку торговых полок и товаров для их наполнения' },
      step2: { title: 'Размещение', desc: 'Полки устанавливаются в действующих магазинах Астаны по договору' },
      step3: { title: 'Доход', desc: 'Регулярные выплаты от продаж и возможность реинвестирования прибыли' }
    },
    benefits: {
      title: 'Ключевые преимущества',
      items: [
        { title: 'Реальные активы', desc: 'Физические торговые полки, а не виртуальные схемы' },
        { title: 'Офлайн бизнес', desc: 'Работа с проверенными магазинами Астаны' },
        { title: 'Ежемесячные выплаты', desc: 'Стабильный денежный поток от продаж' },
        { title: 'Прозрачная отчетность', desc: 'Полный доступ к данным по вашим полкам' },
        { title: 'Масштабируемость', desc: 'Возможность увеличения числа полок' },
        { title: 'Без участия инвестора', desc: 'Полное управление бизнесом на нашей стороне' }
      ]
    },
    trust: {
      title: 'Прозрачность и доверие',
      subtitle: 'Каждый инвестор получает доступ к системе отслеживания своих активов',
      items: [
        { title: 'Реальные магазины', desc: 'Работаем только с проверенными торговыми точками Астаны' },
        { title: 'Учет каждой полки', desc: 'Отдельный трекинг продаж и отчетность по каждому активу' },
        { title: 'Понятная логика', desc: 'Простая бизнес-модель без сложных схем и обещаний' },
        { title: 'Реальная прибыль', desc: 'Доход от продаж товаров, не гарантированные проценты' }
      ]
    },
    example: {
      title: 'Пример модели инвестирования',
      subtitle: 'Как работает экономика проекта',
      steps: [
        { title: 'Инвестиция в актив', desc: 'Средства направляются на покупку торговой полки и первоначального товарного запаса. Это реальный физический актив, размещаемый в торговой точке.' },
        { title: 'Генерация дохода', desc: 'Товары с полки продаются покупателям магазина. Выручка от продаж формирует операционный доход, который распределяется между всеми участниками модели.' },
        { title: 'Выплаты и реинвестирование', desc: 'Часть прибыли выплачивается инвестору ежемесячно, остальное реинвестируется в пополнение товарных запасов для продолжения продаж.' }
      ],
      note: 'Доходность зависит от продаж конкретной торговой точки. Мы не даем гарантированных процентов.'
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        { q: 'Это не финансовая пирамида?', a: 'Нет. Мы работаем с реальными физическими активами — торговыми полками в действующих магазинах. Доход формируется от продажи товаров конечным покупателям, а не от привлечения новых участников.' },
        { q: 'Какие гарантии возврата инвестиций?', a: 'Мы честно говорим: это бизнес, и гарантий фиксированной доходности нет. Ваш доход зависит от продаж в конкретном магазине. Мы предоставляем полную прозрачность и отчетность по каждой полке.' },
        { q: 'Нужно ли мне участвовать в управлении?', a: 'Нет. Мы полностью берем на себя размещение, управление товарными запасами, работу с магазинами и отчетность. От инвестора требуется только первоначальная инвестиция.' },
        { q: 'Где физически находятся торговые точки?', a: 'Все магазины-партнеры находятся в Астане. Мы работаем только с проверенными торговыми точками с хорошей проходимостью и стабильными продажами.' },
        { q: 'Какая минимальная сумма инвестиций?', a: 'Минимальная сумма зависит от конкретной модели размещения. Свяжитесь с нами через Telegram, и мы предоставим индивидуальный расчет под ваш бюджет.' },
        { q: 'Можно ли забрать инвестиции досрочно?', a: 'Да, возможен выход из проекта. Условия и сроки обсуждаются индивидуально и прописываются в договоре инвестирования.' }
      ]
    },
    contact: {
      title: 'Получите индивидуальный расчет',
      subtitle: 'Свяжитесь с нами, чтобы обсудить условия инвестирования и получить детальную информацию',
      cta1: 'Написать в Telegram',
      cta2: 'Запросить расчет'
    },
    footer: {
      copy: '© 2024 ExtraPolka Invest. Инвестиции в реальный офлайн-бизнес',
      terms: 'Условия',
      contacts: 'Контакты'
    }
  },
  kz: {
    nav: { telegram: 'Telegram' },
    hero: {
      title: 'Нақты офлайн бизнеске инвестиция',
      subtitle: 'Астана дүкендеріндегі сауда сөрелері. Инвестордың қатысуынсыз.',
      cta1: 'Есеп алу',
      cta2: 'Модель қалай жұмыс істейді'
    },
    howItWorks: {
      title: 'Модель қалай жұмыс істейді',
      step1: { title: 'Инвестиция', desc: 'Қаражат сауда сөрелері мен тауарларды сатып алуға жұмсалады' },
      step2: { title: 'Орналастыру', desc: 'Сөрелер Астананың жұмыс істеп тұрған дүкендеріне шарт бойынша орнатылады' },
      step3: { title: 'Табыс', desc: 'Сатудан тұрақты төлемдер және пайданы қайта инвестициялау мүмкіндігі' }
    },
    benefits: {
      title: 'Негізгі артықшылықтар',
      items: [
        { title: 'Нақты активтер', desc: 'Виртуалды схемалар емес, физикалық сауда сөрелері' },
        { title: 'Офлайн бизнес', desc: 'Астананың тексерілген дүкендерімен жұмыс' },
        { title: 'Ай сайынғы төлемдер', desc: 'Сатудан тұрақты ақша ағыны' },
        { title: 'Ашық есеп', desc: 'Сіздің сөрелеріңіз бойынша деректерге толық қол жеткізу' },
        { title: 'Масштабталушылық', desc: 'Сөрелер санын арттыру мүмкіндігі' },
        { title: 'Инвестордың қатысуынсыз', desc: 'Бизнесті толық басқару біздің жағымызда' }
      ]
    },
    trust: {
      title: 'Ашықтық және сенім',
      subtitle: 'Әрбір инвестор өз активтерін бақылау жүйесіне қол жеткізуге ие болады',
      items: [
        { title: 'Нақты дүкендер', desc: 'Тек Астананың тексерілген сауда нүктелерімен жұмыс істейміз' },
        { title: 'Әрбір сөрені есепке алу', desc: 'Әрбір актив бойынша сатуды және есепті жеке бақылау' },
        { title: 'Түсінікті логика', desc: 'Күрделі схемалар мен уәделерсіз қарапайым бизнес-модель' },
        { title: 'Нақты пайда', desc: 'Тауарларды сатудан табыс, кепілденген пайыздар емес' }
      ]
    },
    example: {
      title: 'Инвестициялау моделінің мысалы',
      subtitle: 'Жобаның экономикасы қалай жұмыс істейді',
      steps: [
        { title: 'Активке инвестиция', desc: 'Қаражат сауда сөресін және бастапқы тауар қорын сатып алуға жұмсалады. Бұл сауда нүктесіне орналастырылған нақты физикалық актив.' },
        { title: 'Табыс генерациясы', desc: 'Сөреден тауарлар дүкен сатып алушыларына сатылады. Сатудан түскен табыс модельдің барлық қатысушылары арасында бөлінетін операциялық табысты қалыптастырады.' },
        { title: 'Төлемдер және қайта инвестициялау', desc: 'Пайданың бір бөлігі инвесторға ай сайын төленеді, қалғаны сатуды жалғастыру үшін тауар қорын толықтыруға қайта инвестицияланады.' }
      ],
      note: 'Табыстылық нақты сауда нүктесінің сатуына байланысты. Біз кепілденген пайыздар бермейміз.'
    },
    faq: {
      title: 'Жиі қойылатын сұрақтар',
      items: [
        { q: 'Бұл қаржылық пирамида емес пе?', a: 'Жоқ. Біз нақты физикалық активтермен - жұмыс істеп тұрған дүкендердегі сауда сөрелерімен жұмыс істейміз. Табыс жаңа қатысушыларды тарту арқылы емес, соңғы сатып алушыларға тауарларды сатудан қалыптасады.' },
        { q: 'Инвестицияны қайтару кепілдігі қандай?', a: 'Біз шын жүректен айтамыз: бұл бизнес және белгіленген табыстылықтың кепілдігі жоқ. Сіздің табысыңыз нақты дүкеннің сатуына байланысты. Біз әрбір сөре бойынша толық ашықтық пен есепті қамтамасыз етеміз.' },
        { q: 'Маған басқаруға қатысу керек пе?', a: 'Жоқ. Біз орналастыруды, тауар қорын басқаруды, дүкендермен жұмыс істеуді және есепті толығымен өз мойнымызға аламыз. Инвестордан тек бастапқы инвестиция қажет.' },
        { q: 'Сауда нүктелері физикалық тұрғыдан қайда орналасқан?', a: 'Барлық серіктес дүкендер Астанада орналасқан. Біз тек жақсы өтімділігі мен тұрақты сатуы бар тексерілген сауда нүктелерімен жұмыс істейміз.' },
        { q: 'Инвестицияның ең аз сомасы қанша?', a: 'Ең аз сома нақты орналастыру моделіне байланысты. Telegram арқылы бізбен байланысыңыз, біз сіздің бюджетіңізге арналған жеке есептеме береміз.' },
        { q: 'Инвестицияларды мерзімінен бұрын алуға бола ма?', a: 'Иә, жобадан шығу мүмкін. Шарттар мен мерзімдер жеке талқыланады және инвестициялау шартында жазылады.' }
      ]
    },
    contact: {
      title: 'Жеке есептеме алыңыз',
      subtitle: 'Инвестициялау шарттарын талқылау және толық ақпарат алу үшін бізбен байланысыңыз',
      cta1: 'Telegram-ға жазу',
      cta2: 'Есептеме сұрау'
    },
    footer: {
      copy: '© 2024 ExtraPolka Invest. Нақты офлайн бизнеске инвестиция',
      terms: 'Шарттар',
      contacts: 'Байланыс'
    }
  },
  en: {
    nav: { telegram: 'Telegram' },
    hero: {
      title: 'Investments in real offline business',
      subtitle: 'Display shelves in Astana stores. Without investor involvement.',
      cta1: 'Get calculation',
      cta2: 'How it works'
    },
    howItWorks: {
      title: 'How the model works',
      step1: { title: 'Investment', desc: 'Funds go to purchase display shelves and goods to fill them' },
      step2: { title: 'Placement', desc: 'Shelves are installed in operating stores in Astana by contract' },
      step3: { title: 'Income', desc: 'Regular payouts from sales and opportunity to reinvest profit' }
    },
    benefits: {
      title: 'Key advantages',
      items: [
        { title: 'Real assets', desc: 'Physical display shelves, not virtual schemes' },
        { title: 'Offline business', desc: 'Working with verified Astana stores' },
        { title: 'Monthly payouts', desc: 'Stable cash flow from sales' },
        { title: 'Transparent reporting', desc: 'Full access to data on your shelves' },
        { title: 'Scalability', desc: 'Ability to increase number of shelves' },
        { title: 'Without investor involvement', desc: 'Full business management on our side' }
      ]
    },
    trust: {
      title: 'Transparency and trust',
      subtitle: 'Each investor gets access to their assets tracking system',
      items: [
        { title: 'Real stores', desc: 'We work only with verified Astana retail locations' },
        { title: 'Each shelf tracked', desc: 'Separate sales tracking and reporting for each asset' },
        { title: 'Clear logic', desc: 'Simple business model without complex schemes and promises' },
        { title: 'Real profit', desc: 'Income from goods sales, not guaranteed percentages' }
      ]
    },
    example: {
      title: 'Investment model example',
      subtitle: 'How the project economics work',
      steps: [
        { title: 'Asset investment', desc: 'Funds are directed to purchasing a display shelf and initial inventory. This is a real physical asset placed in a retail location.' },
        { title: 'Income generation', desc: 'Goods from the shelf are sold to store customers. Sales revenue forms operational income distributed among all model participants.' },
        { title: 'Payouts and reinvestment', desc: 'Part of profit is paid to investor monthly, the rest is reinvested in replenishing inventory to continue sales.' }
      ],
      note: 'Profitability depends on sales of specific retail location. We do not give guaranteed percentages.'
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Is this a financial pyramid?', a: 'No. We work with real physical assets - display shelves in operating stores. Income is formed from selling goods to end customers, not from attracting new participants.' },
        { q: 'What guarantees of investment return?', a: 'We say honestly: this is business, and there are no guarantees of fixed profitability. Your income depends on sales in a specific store. We provide full transparency and reporting for each shelf.' },
        { q: 'Do I need to participate in management?', a: 'No. We fully take care of placement, inventory management, working with stores and reporting. The investor only needs the initial investment.' },
        { q: 'Where are retail locations physically located?', a: 'All partner stores are located in Astana. We work only with verified retail locations with good traffic and stable sales.' },
        { q: 'What is the minimum investment amount?', a: 'The minimum amount depends on the specific placement model. Contact us via Telegram and we will provide an individual calculation for your budget.' },
        { q: 'Can I withdraw investments early?', a: 'Yes, exit from the project is possible. Terms and conditions are discussed individually and specified in the investment agreement.' }
      ]
    },
    contact: {
      title: 'Get individual calculation',
      subtitle: 'Contact us to discuss investment terms and get detailed information',
      cta1: 'Write to Telegram',
      cta2: 'Request calculation'
    },
    footer: {
      copy: '© 2024 ExtraPolka Invest. Investments in real offline business',
      terms: 'Terms',
      contacts: 'Contacts'
    }
  }
};

export default function Index() {
  const [lang, setLang] = useState<Language>('ru');
  const t = translations[lang];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const languageNames: Record<Language, string> = {
    ru: 'РУС',
    kz: 'ҚАЗ',
    en: 'ENG'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">ExtraPolka Invest</div>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icon name="Languages" size={18} className="mr-2" />
                  {languageNames[lang]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang('ru')}>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('kz')}>
                  Қазақша
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm">
              <Icon name="Send" size={18} className="mr-2" />
              {t.nav.telegram}
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="container mx-auto px-4 py-24 md:py-32 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title.split(' ').slice(0, 3).join(' ')}<br />{t.hero.title.split(' ').slice(3).join(' ')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
              {t.hero.cta1}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('how-it-works')}>
              {t.hero.cta2}
            </Button>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="DollarSign" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step1.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.howItWorks.step1.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Store" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step2.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.howItWorks.step2.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step3.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.howItWorks.step3.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="benefits" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Building2" },
              { icon: "MapPin" },
              { icon: "Calendar" },
              { icon: "FileText" },
              { icon: "BarChart3" },
              { icon: "UserCheck" },
            ].map((item, idx) => (
              <Card key={idx} className="border-border bg-card hover:border-primary transition-colors duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t.benefits.items[idx].title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t.benefits.items[idx].desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="trust" className="container mx-auto px-4 py-20 bg-card/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.trust.title}</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {t.trust.subtitle}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {["Shield", "Eye", "FileCheck", "Activity"].map((icon, idx) => (
                <Card key={idx} className="border-border bg-card">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={icon as any} size={20} className="text-primary" />
                      <h3 className="font-semibold">{t.trust.items[idx].title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{t.trust.items[idx].desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="example" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.example.title}</h2>
            <p className="text-center text-muted-foreground mb-12">
              {t.example.subtitle}
            </p>
            <Card className="border-border bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  {t.example.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                <Icon name="Info" size={16} className="inline mr-2" />
                {t.example.note}
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 py-20 bg-card/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.faq.title}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Send" size={20} className="mr-2" />
                {t.contact.cta1}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                {t.contact.cta2}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              {t.footer.copy}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.contacts}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">ExtraPolka Invest</div>
          <Button variant="ghost" size="sm">
            <Icon name="Send" size={18} className="mr-2" />
            Telegram
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        <section className="container mx-auto px-4 py-24 md:py-32 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Инвестиции в реальный<br />офлайн-бизнес
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Торговые полки в магазинах Астаны. Без участия инвестора.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
              Получить расчет
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('how-it-works')}>
              Как работает модель
            </Button>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Как работает модель</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="DollarSign" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Инвестиция</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Средства идут на покупку торговых полок и товаров для их наполнения
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Store" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Размещение</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полки устанавливаются в действующих магазинах Астаны по договору
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-colors duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Доход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Регулярные выплаты от продаж и возможность реинвестирования прибыли
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="benefits" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ключевые преимущества</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Building2", title: "Реальные активы", desc: "Физические торговые полки, а не виртуальные схемы" },
              { icon: "MapPin", title: "Офлайн бизнес", desc: "Работа с проверенными магазинами Астаны" },
              { icon: "Calendar", title: "Ежемесячные выплаты", desc: "Стабильный денежный поток от продаж" },
              { icon: "FileText", title: "Прозрачная отчетность", desc: "Полный доступ к данным по вашим полкам" },
              { icon: "BarChart3", title: "Масштабируемость", desc: "Возможность увеличения числа полок" },
              { icon: "UserCheck", title: "Без участия инвестора", desc: "Полное управление бизнесом на нашей стороне" },
            ].map((item, idx) => (
              <Card key={idx} className="border-border bg-card hover:border-primary transition-colors duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="trust" className="container mx-auto px-4 py-20 bg-card/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Прозрачность и доверие</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Каждый инвестор получает доступ к системе отслеживания своих активов
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-border bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <h3 className="font-semibold">Реальные магазины</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Работаем только с проверенными торговыми точками Астаны</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Eye" size={20} className="text-primary" />
                    <h3 className="font-semibold">Учет каждой полки</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Отдельный трекинг продаж и отчетность по каждому активу</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="FileCheck" size={20} className="text-primary" />
                    <h3 className="font-semibold">Понятная логика</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Простая бизнес-модель без сложных схем и обещаний</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Activity" size={20} className="text-primary" />
                    <h3 className="font-semibold">Реальная прибыль</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Доход от продаж товаров, не гарантированные проценты</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="example" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Пример модели инвестирования</h2>
            <p className="text-center text-muted-foreground mb-12">
              Как работает экономика проекта
            </p>
            <Card className="border-border bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Инвестиция в актив</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Средства направляются на покупку торговой полки и первоначального товарного запаса. Это реальный физический актив, размещаемый в торговой точке.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Генерация дохода</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Товары с полки продаются покупателям магазина. Выручка от продаж формирует операционный доход, который распределяется между всеми участниками модели.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Выплаты и реинвестирование</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Часть прибыли выплачивается инвестору ежемесячно, остальное реинвестируется в пополнение товарных запасов для продолжения продаж.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                <Icon name="Info" size={16} className="inline mr-2" />
                Доходность зависит от продаж конкретной торговой точки. Мы не даем гарантированных процентов.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 py-20 bg-card/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Это не финансовая пирамида?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет. Мы работаем с реальными физическими активами — торговыми полками в действующих магазинах. Доход формируется от продажи товаров конечным покупателям, а не от привлечения новых участников.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какие гарантии возврата инвестиций?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы честно говорим: это бизнес, и гарантий фиксированной доходности нет. Ваш доход зависит от продаж в конкретном магазине. Мы предоставляем полную прозрачность и отчетность по каждой полке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Нужно ли мне участвовать в управлении?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет. Мы полностью берем на себя размещение, управление товарными запасами, работу с магазинами и отчетность. От инвестора требуется только первоначальная инвестиция.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Где физически находятся торговые точки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Все магазины-партнеры находятся в Астане. Мы работаем только с проверенными торговыми точками с хорошей проходимостью и стабильными продажами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какая минимальная сумма инвестиций?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Минимальная сумма зависит от конкретной модели размещения. Свяжитесь с нами через Telegram, и мы предоставим индивидуальный расчет под ваш бюджет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Можно ли забрать инвестиции досрочно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, возможен выход из проекта. Условия и сроки обсуждаются индивидуально и прописываются в договоре инвестирования.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Получите индивидуальный расчет</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами, чтобы обсудить условия инвестирования и получить детальную информацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Запросить расчет
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 ExtraPolka Invest. Инвестиции в реальный офлайн-бизнес
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Условия
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
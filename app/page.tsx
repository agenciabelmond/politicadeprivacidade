import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-black">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-2-1024x234.png-EepKfMXhP0JQY2MrSER5CqLnlMcSxJ.webp"
              alt="Belmond - Agência de Resultados"
              width={300}
              height={68}
              className="h-12 w-auto md:h-16"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Política de Privacidade
            </h1>
          </div>

          {/* Content Card */}
          <Card className="p-8 md:p-12">
            <div className="prose prose-neutral max-w-none">
              <section className="mb-8">
                <p className="text-pretty leading-relaxed text-foreground">
                  A sua privacidade é importante para nós. É política do Agencia Belmond respeitar a sua privacidade em
                  relação a qualquer informação sua que possamos coletar no site{" "}
                  <a href="https://agenciabelmond.com.br" className="font-medium text-primary hover:underline">
                    Agencia Belmond
                  </a>
                  , e outros sites que possuímos e operamos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Coleta de Informações</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um
                  serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
                  informamos por que estamos coletando e como será usado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Armazenamento e Proteção de Dados</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
                  Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e
                  roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Compartilhamento de Informações</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
                  exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Links Externos</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
                  temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por
                  suas respectivas{" "}
                  <a
                    href="https://politicaprivacidade.com/"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    políticas de privacidade
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Seus Direitos</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
                  possamos fornecer alguns dos serviços desejados.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-foreground">
                  O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de
                  privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do
                  usuário e informações pessoais, entre em contacto connosco.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Política de Cookies</h2>
                <h3 className="mb-3 text-xl font-semibold text-foreground">O que são cookies?</h3>
                <p className="text-pretty leading-relaxed text-foreground">
                  Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos
                  arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais
                  informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também
                  compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode
                  fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Como usamos os cookies?</h3>
                <p className="text-pretty leading-relaxed text-foreground">
                  Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não
                  existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade
                  e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não
                  tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Desativar cookies</h3>
                <p className="text-pretty leading-relaxed text-foreground">
                  Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a
                  Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará
                  a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente
                  resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é
                  recomendável que você não desative os cookies.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cookies que definimos</h3>
                <ul className="ml-6 list-disc space-y-3 text-foreground">
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies relacionados à conta:</strong> Se você criar uma conta connosco, usaremos cookies
                    para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão
                    excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer
                    posteriormente para lembrar as preferências do seu site ao sair.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies relacionados ao login:</strong> Utilizamos cookies quando você está logado, para que
                    possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova
                    página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir
                    que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies relacionados a boletins por e-mail:</strong> Este site oferece serviços de
                    assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já
                    está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos /
                    não inscritos.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Pedidos processando cookies relacionados:</strong> Este site oferece facilidades de comércio
                    eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado
                    entre as páginas, para que possamos processá-lo adequadamente.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies relacionados a pesquisas:</strong> Periodicamente, oferecemos pesquisas e
                    questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base
                    de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou
                    numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies relacionados a formulários:</strong> Quando você envia dados por meio de um
                    formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies
                    podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                  </li>
                  <li className="text-pretty leading-relaxed">
                    <strong>Cookies de preferências do site:</strong> Para proporcionar uma ótima experiência neste
                    site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado
                    quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas
                    informações possam ser chamadas sempre que você interagir com uma página for afetada por suas
                    preferências.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cookies de Terceiros</h3>
                <p className="text-pretty leading-relaxed text-foreground">
                  Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir
                  detalha quais cookies de terceiros você pode encontrar através deste site.
                </p>
                <ul className="ml-6 mt-4 list-disc space-y-3 text-foreground">
                  <li className="text-pretty leading-relaxed">
                    Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da
                    Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses
                    cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que
                    possamos continuar produzindo conteúdo atraente.
                  </li>
                </ul>
                <p className="mt-4 text-pretty leading-relaxed text-foreground">
                  Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google
                  Analytics.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Compromisso do Usuário</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Agencia Belmond
                  oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="ml-6 mt-4 list-disc space-y-3 text-foreground">
                  <li className="text-pretty leading-relaxed">
                    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
                  </li>
                  <li className="text-pretty leading-relaxed">
                    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas, jogos
                    de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os
                    direitos humanos;
                  </li>
                  <li className="text-pretty leading-relaxed">
                    C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Agencia Belmond, de
                    seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros
                    sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">Mais informações</h2>
                <p className="text-pretty leading-relaxed text-foreground">
                  Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem
                  certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um
                  dos recursos que você usa em nosso site.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-foreground">
                  Esta política é efetiva a partir de <strong>Novembro/2025</strong>.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Belmond - Agência de Resultados. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ruler, User, Shirt } from "lucide-react";

const SizeGuide = () => {
  const sizeChart = [
    { size: "P", chest: "88-94", length: "68", shoulder: "44" },
    { size: "M", chest: "96-102", length: "70", shoulder: "46" },
    { size: "G", chest: "104-110", length: "72", shoulder: "48" },
    { size: "GG", chest: "112-118", length: "74", shoulder: "50" },
    { size: "XGG", chest: "120-126", length: "76", shoulder: "52" }
  ];

  const measurementTips = [
    {
      icon: User,
      title: "Como medir o peito",
      description: "Passe a fita métrica ao redor da parte mais larga do peito, mantendo-a paralela ao chão."
    },
    {
      icon: Shirt,
      title: "Como medir o comprimento",
      description: "Meça da parte mais alta do ombro até a barra da camiseta, na linha vertical."
    },
    {
      icon: Ruler,
      title: "Como medir o ombro",
      description: "Meça de uma extremidade do ombro até a outra, passando pela base do pescoço."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                TABELA DE <span className="text-primary">TAMANHOS</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Encontre o tamanho perfeito para suas camisetas Bulkzone
              </p>
            </div>

            {/* Size Chart */}
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Tabela de Medidas (em cm)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center font-bold">Tamanho</TableHead>
                          <TableHead className="text-center font-bold">Peito</TableHead>
                          <TableHead className="text-center font-bold">Comprimento</TableHead>
                          <TableHead className="text-center font-bold">Ombro</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sizeChart.map((row) => (
                          <TableRow key={row.size}>
                            <TableCell className="text-center font-bold text-primary text-lg">
                              {row.size}
                            </TableCell>
                            <TableCell className="text-center">{row.chest}</TableCell>
                            <TableCell className="text-center">{row.length}</TableCell>
                            <TableCell className="text-center">{row.shoulder}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Importante:</strong> Todas as medidas são aproximadas e podem variar ±2cm devido ao processo de confecção. 
                      As medidas são da peça, não do corpo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How to Measure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Como Medir Corretamente</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {measurementTips.map((tip, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <tip.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fit Guide */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Modelagem Regular</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nossas camisetas têm modelagem regular/tradicional, oferecendo conforto 
                    sem ser muito justa nem muito larga.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Caimento tradicional</li>
                    <li>• Conforto para o dia a dia</li>
                    <li>• Ideal para todos os tipos de corpo</li>
                    <li>• Não é slim nem oversized</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Dicas de Escolha</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <strong>Caimento justo:</strong> Escolha seu tamanho habitual
                    </li>
                    <li>
                      <strong>Caimento solto:</strong> Escolha um tamanho acima
                    </li>
                    <li>
                      <strong>Entre dois tamanhos:</strong> Opte pelo maior
                    </li>
                    <li>
                      <strong>Primeira compra:</strong> Consulte as medidas da sua camiseta favorita
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Size Equivalence */}
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-center">Equivalência de Tamanhos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center font-bold">Brasil</TableHead>
                          <TableHead className="text-center font-bold">Numérico</TableHead>
                          <TableHead className="text-center font-bold">Internacional</TableHead>
                          <TableHead className="text-center font-bold">Manequim</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-center font-bold">P</TableCell>
                          <TableCell className="text-center">36/38</TableCell>
                          <TableCell className="text-center">S</TableCell>
                          <TableCell className="text-center">36</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center font-bold">M</TableCell>
                          <TableCell className="text-center">40/42</TableCell>
                          <TableCell className="text-center">M</TableCell>
                          <TableCell className="text-center">38</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center font-bold">G</TableCell>
                          <TableCell className="text-center">44/46</TableCell>
                          <TableCell className="text-center">L</TableCell>
                          <TableCell className="text-center">40</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center font-bold">GG</TableCell>
                          <TableCell className="text-center">48/50</TableCell>
                          <TableCell className="text-center">XL</TableCell>
                          <TableCell className="text-center">42</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-center font-bold">XGG</TableCell>
                          <TableCell className="text-center">52/54</TableCell>
                          <TableCell className="text-center">XXL</TableCell>
                          <TableCell className="text-center">44</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Help Section */}
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ainda com Dúvidas?</h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a escolher o tamanho perfeito. 
                Temos política de troca gratuita caso o tamanho não sirva!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5511999999999" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  WhatsApp: (11) 99999-9999
                </a>
                <a href="mailto:tamanhos@bulkzone.com.br" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors">
                  Email: tamanhos@bulkzone.com.br
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Atendimento: Segunda a Sexta das 9h às 18h | Sábado das 9h às 15h
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;
// Reportagens, entrevistas e participações da Isabel na imprensa.
//
// Para adicionar uma matéria, copie um bloco { ... } e preencha:
//   veiculo: nome do canal, jornal, rádio ou podcast
//   tipo:    "TV", "Rádio", "Podcast", "Jornal" ou "Portal"
//   titulo:  título da matéria ou do quadro
//   data:    no formato AAAA-MM-DD
//   link:    endereço para assistir/ler (deixe "" se não houver)
//   imagem:  opcional, caminho de uma imagem dentro da pasta /public (ex.: "/midia/sbt.jpg")
//
// A lista aparece na página /na-midia, da mais recente para a mais antiga.

export type Materia = {
  veiculo: string;
  tipo: "TV" | "Rádio" | "Podcast" | "Jornal" | "Portal";
  titulo: string;
  data: string;
  link: string;
  imagem?: string;
};

// ATENÇÃO: matérias PROVISÓRIAS, só para o layout ficar completo.
// Trocar pelos títulos, datas e links reais antes de divulgar o site.
export const MATERIAS: Materia[] = [
  { veiculo: "SBT", tipo: "TV", titulo: "Bets: quando a aposta vira a primeira conta do mês", data: "2026-09-10", link: "" },
  { veiculo: "Globo", tipo: "TV", titulo: "Como usar o 13º salário para sair das dívidas", data: "2026-08-22", link: "" },
  { veiculo: "CBN", tipo: "Rádio", titulo: "Tesouro IPCA+: vale a pena investir agora?", data: "2026-07-15", link: "" },
  { veiculo: "Record", tipo: "TV", titulo: "Endividamento das famílias: por onde começar a organizar", data: "2026-06-03", link: "" },
  { veiculo: "CBN", tipo: "Rádio", titulo: "Reserva de emergência: quanto guardar e onde deixar o dinheiro", data: "2026-05-12", link: "" },
  { veiculo: "SBT", tipo: "TV", titulo: "Inflação e salário: o que muda no orçamento de casa", data: "2026-04-08", link: "" },
];

export const VEICULOS = Array.from(new Set(MATERIAS.map((m) => m.veiculo)));

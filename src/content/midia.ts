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

// TODO: substituir pelos títulos, datas e links reais das matérias.
export const MATERIAS: Materia[] = [
  { veiculo: "SBT", tipo: "TV", titulo: "Título da matéria no SBT", data: "2026-09-01", link: "" },
  { veiculo: "Globo", tipo: "TV", titulo: "Título da matéria na Globo", data: "2026-08-01", link: "" },
  { veiculo: "CBN", tipo: "Rádio", titulo: "Título da entrevista na CBN", data: "2026-07-01", link: "" },
  { veiculo: "Record", tipo: "TV", titulo: "Título da matéria na Record", data: "2026-06-01", link: "" },
];

export const VEICULOS = Array.from(new Set(MATERIAS.map((m) => m.veiculo)));

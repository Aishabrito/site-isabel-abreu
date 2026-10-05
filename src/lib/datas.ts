const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

// "2026-09-14" → "14 de setembro de 2026" (ou "setembro de 2026" com formato "mes").
// Feito à mão para não depender do fuso horário do servidor.
export function formatarData(iso: string, formato: "dia" | "mes" = "dia") {
  const [ano, mes, dia] = iso.split("-").map(Number);
  const mesAno = `${MESES[mes - 1]} de ${ano}`;
  return formato === "mes" ? mesAno : `${dia} de ${mesAno}`;
}

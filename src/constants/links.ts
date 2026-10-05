export const NAV_LINKS = [
  { label: "Para você", href: "/consultoria-pessoal" },
  { label: "Para empresas", href: "/para-empresas" },
  { label: "Palestras", href: "/palestras" },
  { label: "Na mídia", href: "/na-midia" },
  { label: "Blog", href: "/blog" },
];

export const INSTAGRAM = {
  handle: "@isabreu.co",
  href: "https://www.instagram.com/isabreu.co",
};

export const EMAIL = "isabreu.p@gmail.com";

export const WHATSAPP = {
  numero: "5521970237479",
  exibicao: "(21) 97023-7479",
};

// Link do WhatsApp já com a mensagem escrita, para a pessoa só apertar enviar
export function whatsapp(mensagem: string) {
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagem)}`;
}

export const AGENDAR_HREF = whatsapp(
  "Olá, Isabel! Vim pelo site e gostaria de agendar uma conversa sobre as minhas finanças.",
);
export const EMPRESAS_HREF = whatsapp(
  "Olá, Isabel! Vim pelo site e gostaria de conversar sobre consultoria financeira para a minha empresa.",
);
export const PALESTRAS_HREF = whatsapp(
  "Olá, Isabel! Vim pelo site e gostaria de uma proposta de palestra para o meu evento.",
);
export const IMPRENSA_HREF = whatsapp(
  "Olá, Isabel! Sou da imprensa e gostaria de falar sobre uma entrevista.",
);

// Links externos abrem em nova aba
export function externo(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

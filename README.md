# Isabel Abreu · site

Site da economista e planejadora financeira Isabel Abreu: consultoria pessoal, atendimento para empresas, palestras, "na mídia" e um blog.

## Páginas

| Caminho | O que tem |
|---|---|
| `/` | Abertura, serviços, diferenciais, números e prévia do blog |
| `/consultoria-pessoal` | Consultoria financeira pessoal |
| `/para-empresas` | Atendimento para empresas |
| `/palestras` | Palestras |
| `/na-midia` | Entrevistas e participações (`src/content/midia.ts`) |
| `/blog` e `/blog/[slug]` | Textos do blog |

Os botões de contato abrem o WhatsApp com uma mensagem pronta (`src/constants/links.ts`).

## Blog sem programar

Cada texto é um arquivo `.md` em `content/blog`. A Isabel publica direto pelo site do GitHub, sem depender de ninguém: o passo a passo e o modelo estão em [`content/COMO-POSTAR.md`](content/COMO-POSTAR.md).

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Tecnologias

Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion e `marked` para o Markdown do blog.

---

Feito por [Aísha Brito](https://aishabrito.github.io/Aishabrito/).

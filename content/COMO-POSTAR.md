# Como publicar um texto no blog

Cada texto do blog é um arquivo `.md` dentro da pasta `content/blog`.

## Pelo site do GitHub

1. Abra a pasta `content/blog` no repositório.
2. Clique em **Add file → Create new file**.
3. Dê um nome curto, sem acentos e com hífens, terminando em `.md`.
   Ex.: `como-sair-do-cheque-especial.md`. Esse nome vira o endereço: `/blog/como-sair-do-cheque-especial`.
4. Cole o modelo abaixo, escreva o texto e clique em **Commit changes**.

## Modelo

```
---
titulo: Como sair do *cheque especial*
resumo: Uma ou duas frases que aparecem no card do blog.
categoria: Organização
data: 2026-10-10
---

Primeiro parágrafo do texto.

## Um subtítulo

Mais texto. **Negrito** ganha o marca-texto dourado e *itálico* fica em terracota.

- item de lista
- outro item

> Uma frase de destaque.
```

## Dicas

- No **titulo**, coloque entre `*asteriscos*` a palavra de impacto. Ela aparece em itálico, como nos carrosséis. Use só um trecho por título.
- A **data** é no formato ano-mês-dia. O texto mais recente aparece em destaque.
- Para guardar um texto sem publicar, adicione a linha `rascunho: sim` no cabeçalho.

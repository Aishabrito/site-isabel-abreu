// No título do post, o trecho entre *asteriscos* vira o itálico de destaque
export default function TituloPost({ texto, dark = false }: { texto: string; dark?: boolean }) {
  return (
    <>
      {texto.split(/(\*[^*]+\*)/).map((parte, i) =>
        parte.startsWith("*") && parte.endsWith("*") ? (
          <em key={i} className={dark ? "accent-dark" : "accent"}>
            {parte.slice(1, -1)}
          </em>
        ) : (
          parte
        ),
      )}
    </>
  );
}

export function tituloSemMarcas(texto: string) {
  return texto.replace(/\*/g, "");
}

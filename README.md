# Portfólio — Camila Bersan

Portfólio pessoal feito com **HTML, CSS e JavaScript** puros (trabalho prático de Tecnologia Web).

## Como abrir

Basta dar dois cliques no `index.html` — funciona direto no navegador, sem internet e sem servidor.
Os ícones e as fontes já estão copiados nas pastas `imagens/tecnologias/` e `fontes/`.

## Dependências (somente para desenvolvimento)

```bash
npm install      # instala as dependências e copia ícones/fontes para o projeto
npm run dev      # abre um servidor local em http://localhost:8080 (opcional)
npm run setup    # copia novamente ícones e fontes de node_modules
```

| Pacote | Uso |
| --- | --- |
| `devicon` | ícones das tecnologias (SVG) |
| `@fontsource/inter`, `@fontsource/jetbrains-mono` | fontes do site |
| `http-server` | servidor local para testes |

## Estrutura

```
index.html        estrutura da página
style.css         estilos (inclui tema claro e escuro)
script.js         formulário, troca de tema, menu do celular e filtro de tecnologias
imagens/          foto, ilustrações dos projetos e ícones das tecnologias
fontes/           arquivos de fonte .woff2
scripts/          script que copia ícones/fontes de node_modules
```

> Para entregar o .zip, não é preciso incluir a pasta `node_modules`.

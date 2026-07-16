# REC NEGOCIOS

Site estatico da REC NEGOCIOS, criado para funcionar como uma vitrine de colaboradores, oportunidades e futuras paginas individuais.

O projeto foi pensado para ser hospedado no GitHub e distribuido pelo Cloudflare Pages, sem etapa de build e sem dependencia de backend.

## O que foi feito

- Criada a pagina principal em `index.html`.
- Criado layout responsivo inspirado em sites de vitrine/fornecedores.
- Criada uma area de destaque para a marca REC NEGOCIOS.
- Adicionado o logo real da REC em `assets/img/logo-rec.png`.
- Criada uma grade de cards para colaboradores.
- Criado modal de contato para cada colaborador.
- Criado formulario principal que monta uma mensagem para WhatsApp.
- Criado arquivo central de dados em `assets/js/data.js` para facilitar a inclusao de novos colaboradores.
- Criada uma pagina modelo de colaborador em `colaboradores/rec-consultoria.html`.
- Criados placeholders temporarios de imagem em SVG.
- Criado arquivo `_headers` com cabecalhos basicos para Cloudflare Pages.
- Criada estrutura de pastas para imagens, estilos e scripts.

## Estrutura do projeto

```text
.
|-- index.html
|-- _headers
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- img/
|   |   |-- card-placeholder.svg
|   |   |-- favicon.svg
|   |   |-- hero-placeholder.svg
|   |   `-- logo-rec.png
|   `-- js/
|       |-- data.js
|       `-- main.js
`-- colaboradores/
    `-- rec-consultoria.html
```

## Como trocar as imagens

Coloque suas imagens dentro de `assets/img/`.

Depois atualize o campo `image` do colaborador em `assets/js/data.js`:

```js
image: "assets/img/minha-imagem.jpg"
```

Para a imagem principal da home, troque o caminho em `index.html`:

```html
<img src="assets/img/logo-rec.png" alt="" />
```

## Como mudar o WhatsApp

Abra `assets/js/data.js` e substitua:

```js
whatsappNumber: "5500000000000"
```

Use o formato com codigo do pais e DDD, sem espacos, tracos ou parenteses.

Exemplo:

```js
whatsappNumber: "5521999999999"
```

## Como adicionar colaborador

Duplique um item dentro da lista `collaborators` em `assets/js/data.js`:

```js
{
  id: "nome-unico",
  name: "Nome do Colaborador",
  category: "Categoria",
  location: "Cidade ou Online",
  benefit: "Destaque",
  image: "assets/img/imagem.jpg",
  page: "colaboradores/nome-unico.html",
  description: "Descricao curta para o modal de contato."
}
```

Se ainda nao houver pagina individual, deixe:

```js
page: ""
```

## Como criar uma nova tela de colaborador

1. Duplique o arquivo `colaboradores/rec-consultoria.html`.
2. Renomeie o arquivo, por exemplo `colaboradores/minha-empresa.html`.
3. Troque titulo, textos e imagens dentro do novo arquivo.
4. Atualize o campo `page` do colaborador em `assets/js/data.js`:

```js
page: "colaboradores/minha-empresa.html"
```

## Publicacao no Cloudflare Pages

Configuracao recomendada:

- Framework preset: `None`
- Build command: deixar vazio
- Build output directory: `/`

Depois conecte este repositorio do GitHub ao Cloudflare Pages.

## Desenvolvimento local

Para visualizar localmente:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

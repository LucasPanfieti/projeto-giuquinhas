# 💛 Nosso Site — Guia de Configuração

Um site elegante e romântico feito para vocês dois. ✨

---

## 🚀 Como rodar

### 1. Instale as dependências
```bash
npm install
```

### 2. Rode em modo de desenvolvimento
```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 3. Para publicar (build de produção)
```bash
npm run build
npm start
```

---

## 🎨 Como personalizar

### ➤ Nomes e datas
Edite o arquivo `src/app/data.ts`:

```ts
export const coupleData = {
  names: {
    person1: "Seu Nome",   // ← seu nome aqui
    person2: "Nome dela",  // ← nome dela aqui
  },
  // As datas já estão configuradas:
  firstKissDate: new Date("2023-10-08T00:00:00"),  // 08/10/2023
  startDate: new Date("2023-12-08T00:00:00"),       // 08/12/2023
  
  mainQuote: "Sua frase favorita aqui",
  quotes: [
    "Frase 1...",
    "Frase 2...",
  ],
}
```

### ➤ Adicionar fotos

1. Coloque suas fotos na pasta `public/photos/` organizadas por ano:
   ```
   public/
   └── photos/
       ├── 2023/
       │   ├── primeiro-beijo.jpg
       │   ├── novembro.jpg
       │   └── namoro.jpg
       ├── 2024/
       │   └── janeiro.jpg
       └── ...
   ```

2. No arquivo `src/app/data.ts`, cada evento da timeline tem um campo `photo`:
   ```ts
   photo: "/photos/2023/primeiro-beijo.jpg"
   ```

### ➤ Adicionar / editar eventos da linha do tempo

No arquivo `src/app/data.ts`, edite o objeto `timelineByYear`:

```ts
"2024": [
  {
    date: "Fevereiro",
    title: "Nossa primeira viagem ✈️",
    description: "A melhor viagem da minha vida, porque estava com você.",
    photo: "/photos/2024/viagem.jpg",
    side: "left",   // "left" ou "right" (alterna para ficar bonito)
  },
  // ... mais eventos
]
```

---

## 📁 Estrutura do projeto

```
src/
└── app/
    ├── page.tsx          ← Página principal
    ├── layout.tsx        ← Layout raiz
    ├── globals.css       ← Estilos globais
    ├── data.ts           ← ⭐ EDITE AQUI: dados, fotos, frases
    └── components/
        ├── Header.tsx    ← Barra de navegação
        ├── Counter.tsx   ← Contador de tempo juntos
        └── Timeline.tsx  ← Linha do tempo por ano
public/
└── photos/              ← ⭐ COLOQUE SUAS FOTOS AQUI
    ├── 2023/
    ├── 2024/
    ├── 2025/
    └── 2026/
```

---

## 🌐 Publicar online (grátis)

### Vercel (recomendado)
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em **Deploy** — pronto!

O site ficará disponível em uma URL como: `seu-site.vercel.app`

---

*Feito com muito amor 💛*

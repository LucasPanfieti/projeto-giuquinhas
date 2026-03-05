# 💕 Nossa História — Site do Casal

Um site elegante e sofisticado para registrar a história do seu relacionamento.

## 🚀 Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento
npm run dev

# 3. Acesse no navegador
http://localhost:3000
```

## ✏️ Como personalizar

### 1. Nomes e datas (arquivo: `app/contador/page.tsx`)
```ts
const FIRST_KISS_DATE = new Date('2023-10-08T00:00:00')  // Primeiro beijo
const RELATIONSHIP_DATE = new Date('2023-12-08T00:00:00') // Namoro oficial
const NAME_1 = 'Seu nome'
const NAME_2 = 'Nome dela'
const SPECIAL_PHRASE = 'Sua frase especial aqui.'
```

### 2. Adicionar fotos
- Coloque as fotos na pasta `public/photos/`
- No arquivo `app/data.ts`, preencha o campo `photo` de cada momento:
```ts
photo: '/photos/2023/nossa-foto.jpg'
```

### 3. Adicionar ou editar momentos (`app/data.ts`)
```ts
{
  date: '14 de fevereiro',
  title: 'Dia dos Namorados',
  description: 'Uma descrição romântica do momento...',
  emoji: '❤️',
  highlight: true,  // true = destaque dourado especial
  photo: '/photos/2024/dia-dos-namorados.jpg',
}
```

## 📁 Estrutura do projeto

```
love-story/
├── app/
│   ├── contador/page.tsx   ← Página do contador
│   ├── 2023/page.tsx       ← Linha do tempo 2023
│   ├── 2024/page.tsx       ← Linha do tempo 2024
│   ├── 2025/page.tsx       ← Linha do tempo 2025
│   ├── 2026/page.tsx       ← Linha do tempo 2026
│   ├── data.ts             ← ✅ EDITE AQUI: todos os momentos
│   └── globals.css         ← Estilos globais
├── components/
│   ├── Navigation.tsx      ← Menu de navegação
│   └── YearTimeline.tsx    ← Componente da linha do tempo
└── public/
    └── photos/             ← 📸 Coloque suas fotos aqui
```

## 🌐 Deploy gratuito (Vercel)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Suba o projeto no GitHub
3. Importe no Vercel — deploy automático!
4. Você terá um link como: `nossa-historia.vercel.app`

---

Feito com ♥ para vocês dois.

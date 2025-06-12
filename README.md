# Animated Border

Uma biblioteca de componente React para adicionar bordas animadas a qualquer elemento de forma simples e elegante, utilizando Next.js e styled-components.

## Funcionalidade

O componente `AnimatedBorder` envolve seu conteúdo com uma borda que se move continuamente ao longo do contorno, criando um efeito visual atraente e dinâmico. A animação utiliza `keyframes` do CSS com styled-components para gerar o movimento suave:

- **Customização**: você pode ajustar cores, espessura e duração diretamente pelas props.
- **Compatibilidade**: funciona em qualquer projeto Next.js (páginas ou componentes isolados).
- **Desempenho**: utiliza CSS puro e React leve, sem dependências pesadas.

## Como funciona

1. O `AnimatedBorder` define um `keyframes` que desloca gradualmente a posição do gradiente ao redor do elemento.
2. Aplica o gradiente na borda, usando `background-clip: border-box` e `padding` para que o conteúdo interno não seja afetado.
3. A animação é contínua, repetindo em loop.

## Exemplo de código de utilização

```tsx
// src/components/AnimatedBorder.tsx
import styled, { keyframes, css } from 'styled-components';

const borderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBorder = styled.div<{
  borderWidth?: string;
  borderGradient?: string;
  duration?: string;
}>`
  position: relative;
  padding: ${({ borderWidth = '4px' }) => borderWidth};
  border-radius: 8px;
  background: ${({ borderGradient = 'linear-gradient(90deg, #ff6a00, #ee0979)' }) => borderGradient};
  background-size: 200% 200%;
  animation: ${borderAnimation} ${({ duration = '4s' }) => duration} linear infinite;
  box-sizing: border-box;

  & > * {
    background: #ffffff;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export default AnimatedBorder;
```

```tsx
// src/pages/index.tsx
import AnimatedBorder from '../components/AnimatedBorder';

export default function Home() {
  return (
    <AnimatedBorder
      borderWidth="6px"
      borderGradient="linear-gradient(90deg, #00f, #0ff, #f0f)"
      duration="6s"
    >
      <div style={{ padding: '2rem' }}>
        <h1>Borda Animada</h1>
        <p>Este componente destaca seu conteúdo com uma borda em movimento contínuo!</p>
      </div>
    </AnimatedBorder>
  );
}
```

## Iniciando o projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd animated-border
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) para visualizar.

4. **Scripts úteis**:
   ```bash
   npm run build    # Gera versão de produção estática
   npm run start    # Inicia servidor em modo produção
   npm run lint     # Executa o ESLint
   ```

## Contribuição

Contribuições são bem-vindas! Abra issues ou pull requests no GitHub para sugerir melhorias, correções ou novas ideias.

---

Feito com ❤️ usando Next.js e styled-components.

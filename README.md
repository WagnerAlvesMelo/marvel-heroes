![example workflow](https://github.com/WagnerAlvesMelo/marvel-heroes/actions/workflows/main.yml/badge.svg)

# Link da aplicação: https://wagneralvesmelo.github.io/marvel-heroes/

Aplicação que possibilita a busca dos personagens do universo da Marvel e seus quadrinhos mais recentes.

## Requisitos Funcionais

Página de listagem de personagens (home):

- Exibir os 20 primeiros resultados da API;
- Permitir ordenação por nome do personagem;
- Permitir filtrar por nome, pelo campo de busca;
- Permitir mostrar apenas os personagens favoritos;
- Permitir o usuário favoritar/desfavoritar até 5 personagens;

Página de detalhe do personagem:

- Exibir dados do personagem;
- Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
- Permitir o usuário favoritar/desfavoritar (dentro do limite de 5)

## Requisitos bônus contemplados

- Adicionar paginação a listagem para exibir além dos 20 personagens iniciais;
- Persistir os dados de favoritos (para manter os dados após o reload da página);
- Layout responsivo;
- Utilização de ES6+;
- Utilização de ferramentas para garantir a qualidade do código (Eslint + Prettier);
- CI/CD.
- (Não foram realizados testes e2e, mas os componentes e páginas estão cobertos por testes unitários)

## Tecnologias usadas

- ReactJS
- ReactContext
- Styled Components
- Github pages
- Github actions

## Etapas CI/CD

- Install - Instala as dependências do projeto
- Test - Processa os testes unitários da aplicação
- Deploy - Gera o build de produção e realiza o deploy dos arquivos já buildados para o Github Pages

## Como instalar o projeto

### Requisitos:

- NodeJS (v14.19.0 ou superior)
- Yarn

Para instalar as dependências do projeto execute o seguinte script:

```
yarn
```

Para formatar os espaçamentos gerados pelo Github:

```
yarn lint:fix
```

Para iniciar o projeto execute o comando:

```
yarn start
```

## Scripts

Iniciar projeto em modo de desenvolvimento

```
yarn start
```

Organizar linhas de código com prettier

```
yarn format
```

Executar testes unitários

```
yarn test
```

Gerar build de produção

```
yarn build
```

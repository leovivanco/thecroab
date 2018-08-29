# Template de Testes

## Stack

A implementação utiliza as seguintes tecnologias:

- Node.js
- Git
- EcmaScript 2015 (ES6)
- Gulp

## Instalação

### Todos ambientes

- [Git](https://git-scm.com/downloads): Sistema de versionamento de código.

### Windows

Para a instalação no ambiente Windows, utilizaremos os seguintes programas:

- [NVM para Windows](https://github.com/coreybutler/nvm-windows/releases): Sistema de versionamento do Node baseado no NVM do Linux/ Mac OS. Caso tenha algum node instalado na máquina, recomenda-se desinstalar o mesmo e remover as pastas do node no computador, de acordo com a [documentação](https://github.com/coreybutler/nvm-windows#installation--upgrades)
- [CMDER](http://cmder.net/): Emulador de console Unix. Baixar a versão full do mesmo.

## Inicialização

Instalar a versão 7.5.0 do Node e utilizá-la

```sh
nvm install 7.5.0
nvm use 7.5.0
```

Clonar o projeto

```sh
git clone 'projeto'
```

Após colocá-lo na pasta correspondente ao teste a ser desenvolvido, executar a instalação das dependências

```sh
npm install
```

Inicializar a tarefa de desenvolvimento usando o gulp

```sh
npm run dev
```

## Documentação

### Desenvolvimento

Para desenvolver o teste, utilizamos o seguinte comando no node:

```sh
npm run dev
```

Para o desenvolvimento de métricas:

```sh
npm run dev:actions
```

### Produção

Para compilar os arquivos do teste no formato aceito pelo maxymiser, use o comando:

```sh
npm run deploy -- test:deploy:variant
```

Para as métricas, o comando é:

```sh
npm run deploy actions:deploy
```

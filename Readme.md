# Javascript-jest
Repositório puramente didático, com o objetivo de aprender e ensinar sobre testes utilizando Jest.js

## Começando
Clone o projeto para a sua maquina.

### pré-requisitos

Você precisará ter instalado em sua maquina:
* Node 8.10.0 ou superior.
* Algum editor de texto (VsCode, Atom, Sublime).
* NPM.

### Instalação de dependências
Simplesmente execute o seguinte comando no terminal:
```
npm install
```

Pronto, as dependências foram instaladas!

## Rodando os testes
Para rodar os testes, digite no terminal:
```
npm test
```

## Imagem ilustrativa
![Requisição POST](https://github.com/Spinkers/javascript-jest/blob/master/img/01.png?raw=true)

## Entendendo a configuração

No arquivo Package.json, criamos o seguinte script:
``` Json
{
	"scripts": {
        "test": "jest --watchAll --logHeapUsage --coverage"
    }
}
```
**jest** por si só já bastaria para que o script funcionasse.

**--watchAll** faz com que o teste fique rodando enquanto você programa, dessa forma pode observar quando algum teste falhar.

**--logHeapUsage** Nos informa o quanto de memória foi consumida para tal teste (filtro/filtro.test.js (39 MB heap size)).

**--coverage** Nos permite escolher entre alguns modos de exibição do relatório, observe:

``` Json
{
	"jest": {
        "testEnvironment": "node",
        "coverageReporters": ["text"]
    }
}
```

Nesse caso, definimos que o ambiente de desenvolvimento é node, isso porque o Jest.js está sendo desenvolvido para funcionar em outras plataformas também.

Em seguida passamos como parametro **"text"**, o que altera o modo de exibição do relatório como dito anteriormente.

Além de **"text"** também poderiamos utilizar: 
* "text-summary"
* "lcov"

Atenção, caso vá utilizar **"lcov"**, o seu arquivo de configuração ficará assim:

``` Json
{
	"jest": {
        "testEnvironment": "node",
        "coverageReporters": ["text"],
        "coverageDirectory": "./resultado"
    }
}
```

Pois os relatórios precisarão de uma pasta para serem armazenados (em forma de HTML).
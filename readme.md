# _Random Tips_

Adiciona e mostra dicas aleatórias para os usuários. Denvolvido em Node.js

## Tecnologias

```Json
"dependencies": {
    "express": "^4.18.1",
    "nodemon": "^2.0.19"
  }
```

## Como instalar a aplicação localmente:

1. Para clonar repositório:

    ```git clone https://github.com/brendatondin/randomTips```

2. Entrando na pasta:

     ```cd randomTips```

3. Para instalar as bibliotecas:

    ```npm i```

4. Para iniciar o projeto:

    ```npm start```

## Rotas

```url/tip ou url/create```

## Get /tips

```Json
{
    "tips": ["turn right", "turn left", "go straight", "turn back"]
}
```

### Exemplo da resposta

```Json
{
	"tips": "turn right"
}
```

## Post /create

```Json
{
	"tip" : "trip canceled"
}
```

### Exemplo da resposta

```Json
{
	"msg": "Dica inserida com sucesso!",
	"error": false
}
```

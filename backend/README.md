# POKEDEX BACKEND

![Badge Concluido](http://img.shields.io/static/v1?label=STATUS&message=EM-DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<div>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

</div>

# Menu
- [Sobre o Sistema](#sobre-o-sistema)
- [Funcionalidades](#funcionalidades)
- [Usuário](#user)


# Sobre o Sistema
- Backend para o projeto PokedexAPI capaz de cadastrar usuarios, login com autenticação JWT e guardar pokemons favoritos do usuario.
- Foi desenvolvido com [NodeJs](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [TypeScript](https://www.typescriptlang.org/) e [ElephantSQL](https://www.elephantsql.com/)

# Funcionalidades
- [x] Cadastrar novo usuário
- [x] Login com autenticação
- [x] Salvar novos pokemons como favorito
- [x] Desfavoritar pokemons

# User

## Cadastrar Usuário
Usando o método POST podemos acessar a seguinte rota: 

```
http://localhost:3000/user
```

São esperadas as seguintes entradas: 
```
{
	"name": "",
	"email": "",
	"password": ""
}
```

## Login
Usando o método POST podemos acessar a seguinte rota:
```
http://localhost:3000/login
```

São esperadas as seguintes entradas:
```
{
	"email": "",
	"password": ""
}
```

## Profile
Usando o método GET podemos acessar a seguinte rota:
```
http://localhost:3000/profile
```

É retornado as seguintes informações
```
{
	"id": ,
	"name": "",
	"email": ""
}
```

# Pokemon

## Salvando pokemon como favorito
Usando o método POST podemos acessar a seguinte rota:
```
http://localhost:3000/profile/:id/pokes
```

São esperadas as seguintes entradas:
```
    {
	"user_id": ,
	"pokemon_id":
}
```

## Pokemons Favoritos
Usando o método GET podemos acessar a seguinte rota:
```
http://localhost:3000/pokemons/:user_id
```

É retornado as seguintes informações

- Um array com todos os pokemons favoritados de um usuário especifico
- Informações do usuario

```
[
	{
		"id": 5,
		"pokemon_id": ,
		"user_id": {
			"id": ,
			"name": "",
			"email": "",
			"password": ""
		}
	},
	{
		"id": 6,
		"pokemon_id": 15,
		"user_id": {
			"id": 1,
			"name": "",
			"email": "",
			"password": ""
		}
	}
]
```



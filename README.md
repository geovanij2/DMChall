# DMChall
Delivery much challenge

## Como rodar

No arquivo .env.example estão definidas todas as variáveis de ambiente necessárias para que o projeto rode.
NODE_ENV seria a variável que define o tipo de ambiente da aplicação (exemplo: development e prodution).
Dependendo do tipo escolhido podem acontecer coisas diferentes no código como a criação de tabelas num banco de dados por exemplo.

PORT é a porta que o server vai rodar, recomendo por a 8080 por causa do docker file

RECIPE_PUPPY_URL é a url da api da recipe puppy: "http://www.recipepuppy.com/api/"

GIPHY_URL é a url da api do giphy: "http://api.giphy.com/v1/gifs/search"
GIPHY_API_KEY é chave de acesso da api do giphy

Estar no diretório do projeto

`docker build -t dmchall . `

`docker run --name dmchall_container -p 8080:8080 dmchall`

atividade final - Isabella Poloni de Oliveira 10482211382

Os ddl e dml estão dentro do repositório: https://github.com/isapoloni/cloud-computing/blob/main/database.js

Como executar a aplicação

1. Faça pull da imagem do Docker Hub:

    	docker pull isapoloni/node-sqlite-app:latest

2. Execute o contêiner:

	docker run -p 3000:3000 --name node-sqlite-app -d isapoloni/node-sqlite-app:latest

3. Faça as requisições usando as seguintes urls:

	http://localhost:3000/liveness
	http://localhost:3000/readiness
	http://localhost:3000/consulta-dados
	
Links
	GitHub: https://github.com/isapoloni/cloud-computing
	Docker Hub: https://hub.docker.com/repository/docker/isapoloni/node-sqlite-app/general

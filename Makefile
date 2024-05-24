# Docker using
build:
	docker-compose build
start:
	docker-compose up -d
stop:
	docker-compose down
rm:
	docker-compose down --rmi all
ssh:
	docker exec -it diqit-digital-travel-react-cms-ui sh

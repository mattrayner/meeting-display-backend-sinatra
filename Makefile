build-setup:
	docker buildx create --name mybuilder
	docker buildx use mybuilder
	docker buildx inspect --bootstrap

build:
	docker  build \
		-t mattrayner/meeting-display:latest \
		.

build-arm:
	docker  build \
		-t mattrayner/meeting-display:latest \
		-f Dockerfile.arm \
		.
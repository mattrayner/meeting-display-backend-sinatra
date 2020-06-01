TRAVIS_TAG ?= unknown

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
		-t mattrayner/meeting-display:$(TRAVIS_TAG) \
		-f Dockerfile.arm \
		.

push-arm: build-arm push

push:
	docker push mattrayner/meeting-display:latest

.PHONY: build-getVolumeByIdFunction build-getAllVolumesFunction build-getAllVolumeCategoriesFunction build-getVolumesInCategoryFunction

build-getVolumeByIdFunction:
	$(MAKE) HANDLER=src/handlers/volumes/get-all.ts build-lambda-common
build-getAllVolumesFunction:
	$(MAKE) HANDLER=src/handlers/volumes/get-by-id.ts build-lambda-common
build-getAllVolumeCategoriesFunction:
	$(MAKE) HANDLER=src/handlers/categories/get-all.ts build-lambda-common
build-getVolumesInCategoryFunction:
	$(MAKE) HANDLER=src/handlers/categories/get-volumes.ts build-lambda-common

build-lambda-common:
	npm install
	rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${HANDLER}\"] }" > tsconfig-only-handler.json
	npm run build -- --build tsconfig-only-handler.json
	cp -r dist/* "$(ARTIFACTS_DIR)/"
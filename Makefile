.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-getVolumeByIdFunction build-getAllVolumesFunction build-getAllVolumeCategoriesFunction build-getVolumesInCategoryFunction

build-GetVolumeByIdFunction:
	$(MAKE) HANDLER=src/handlers/volumes/get-by-id.ts build-lambda-common
build-GetAllVolumesFunction:
	$(MAKE) HANDLER=src/handlers/volumes/get-all.ts build-lambda-common
build-GetAllVolumeCategoriesFunction:
	$(MAKE) HANDLER=src/handlers/categories/get-all.ts build-lambda-common
build-GetVolumesInCategoryFunction:
	$(MAKE) HANDLER=src/handlers/categories/get-volumes.ts build-lambda-common

build-lambda-common:
	npm install
	rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${HANDLER}\"] }" > tsconfig-only-handler.json
	npm run build -- --build tsconfig-only-handler.json
	cp -r dist/* "$(ARTIFACTS_DIR)/"

build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json package-lock.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json" # to avoid rebuilding when changes doesn't relate to dependencies
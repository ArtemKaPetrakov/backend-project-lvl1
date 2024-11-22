install:
	npm ci

brain-games: # node bin/brain-games.js
	.bin/brain-games.js

brain-even: # node bin/brain-games.js
	 node bin/brain-even.js

brain-calc: # node bin/brain-games.js
	 node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
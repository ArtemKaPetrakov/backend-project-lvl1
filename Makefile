install:
	npm ci

brain-games: # node bin/brain-games.js
	.bin/brain-games.js

brain-even: # node bin/brain-games.js
	 node bin/brain-even.js

brain-calc: # node bin/brain-games.js
	 node bin/brain-calc.js

brain-gcd: # node bin/brain-games.js
	 node bin/brain-gcd.js

brain-progression: # node bin/brain-games.js
	 node bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"plugins": [
		"html"
	],
	"extends": "eslint:recommended",
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-spacing": "error",
		"array-callback-return": "error",
		"arrow-body-style": "error",
		"arrow-parens": "off",
		"arrow-spacing": [
			"error",
			{
				"before": false,
				"after": false
			}
		],
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"stroustrup"
		],
		"callback-return": "off",
		"camelcase": [
			"error",
			{
				"properties": "never"
			}
		],
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "error",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "error",
		"curly": "error",
		"default-case": "error",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "off",
		"func-names": "off",
		"func-style": [
			"error",
			"declaration"
		],
		"generator-star-spacing": "error",
		"global-require": "error",
		"guard-for-in": "off",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": [
			"off",
		],
		"id-match": "error",
		"indent": [
			"error",
			"tab"
		],
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "off",
		"max-depth": "error",
		"max-len": "off",
		"max-lines": "off",
		"max-nested-callbacks": "error",
		"max-params": "error",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"new-cap": "error",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-console": [
			"error",
			{
				"allow": ["error"]
			}
		],
		"no-continue": "error",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "off",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-multi-spaces": [
			"error",
			{
				"ignoreEOLComments": true,
			},
		],
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": "off",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-spaced-func": "error",
		"no-sync": "off",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": [
			"error",
			{
				"allowAfterThis": true
			}
		],
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "error",
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "none"
			}
		],
		"no-use-before-define": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-var": "off",
		"no-void": "error",
		"no-warning-comments": "off",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"object-curly-newline": "off",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-property-newline": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "error",
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": "error",
		"padded-blocks": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "error",
		"prefer-reflect": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "error",
		"prefer-template": "off",
		"quote-props": "off",
		"quotes": [
			"error",
			"single"
		],
		"radix": "error",
		"require-jsdoc": "off",
		"require-yield": "error",
		"rest-spread-spacing": "error",
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": "error",
		"sort-imports": "error",
		"sort-vars": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			"never"
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "off",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always",
			{
				"exceptions": [
					"!"
				]
			}
		],
		"strict": [
			"error",
			"never"
		],
		"template-curly-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"valid-jsdoc": "off",
		"vars-on-top": "off",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": [
			"error",
			"never"
		]
	}
};

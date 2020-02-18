module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": [2, "never"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react-hooks/exhaustive-deps": 'off',
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        'indent': [
            'error',
            2
        ],
        'quotes': [
            'error',
            'single',
            { "avoidEscape": true }
        ],
        'semi': [
            'error',
            'never'
        ],
        "no-console": "off",
        "no-process-env": "off",
        'linebreak-style': [
            'error',
            'unix'
        ],
    }
};
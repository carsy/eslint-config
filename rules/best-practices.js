// eslint - Best practices

'use strict';

module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        'accessor-pairs': 0,
        // treat var statements as if they were block scoped
        'block-scoped-var': 2,
        'camelcase': [2, { properties: 'never' }],
        // specify the maximum cyclomatic complexity allowed in a program
        'complexity': 0,
        // require return statements to either always or never specify values
        'consistent-return': 0,
        // specify curly brace conventions for all control statements
        'curly': 2,
        // require default case in switch statements
        'default-case': 2,
        // enforces consistent newlines before or after dots
        'dot-location': [2, 'property'],
        // encourages use of dot notation whenever possible
        'dot-notation': [2, { allowKeywords: true }],
        // require the use of === and !==
        'eqeqeq': [2, 'allow-null'],
        // make sure for-in loops have an if statement
        // comment: who ever modifies Object.prototype to include enumerable properties
        //                    or use for in to iterator over instances is stupid..
        'guard-for-in': 0,
        // disallow the use of alert, confirm, and prompt
        'no-alert': 1,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // disallow lexical declarations in case clauses
        'no-case-declarations': 2,
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 0,
        // disallow else after a return in an if
        'no-else-return': 2,
        // disallow use of empty destructuring patterns
        'no-empty-pattern': 2,
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 0,
        // disallow use of eval()
        'no-eval': 2,
        // disallow adding to native types
        'no-extend-native': 2,
        // disallow unnecessary function binding
        'no-extra-bind': 2,
        // disallow fallthrough of case statements
        // comment: while it is not allowed, it can still be allowed if you comment with "falls through"
        'no-fallthrough': 2,
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 2,
        // disallow the type conversions with shorter notations
        'no-implicit-coercion': 0,
        // disallow use of eval()-like methods
        'no-implied-eval': 2,
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,
        // disallow usage of __iterator__ property
        'no-iterator': 2,
        // disallow use of labeled statements
        'no-labels': 2,
        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // disallow creation of functions within loops
        'no-loop-func': 2,
        // disallow the use of magic numbers
        'no-magic-numbers': 0,
        // disallow use of multiple spaces
        'no-multi-spaces': 2,
        // disallow use of multiline strings
        // comment: multiline strings are supported in IE9 and higher.. so why should one still
        //                    live in 1990?
        'no-multi-str': 0,
        // disallow reassignments of native objects
        'no-native-reassign': 2,
        // disallow use of new operator for Function object
        'no-new-func': 2,
        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': 2,
        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 2,
        // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-octal-escape': 2,
        // disallow use of (old style) octal literals
        'no-octal': 2,
        // disallow reassignment of function parameters
        'no-param-reassign': 0,
        // disallow use of process.env
        'no-process-env': 0,
        // disallow usage of __proto__ property
        'no-proto': 2,
        // disallow declaring the same variable more then once
        'no-redeclare': 2,
        // disallow use of assignment in return statement
        'no-return-assign': 2,
        // disallow use of `javascript:` urls.
        'no-script-url': 2,
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // disallow use of comma operator
        'no-sequences': 2,
        // restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // disallow usage of expressions in statement position
        'no-unused-expressions': [2, { allowShortCircuit: true }],
        // disallow unnecessary .call() and .apply()
        'no-useless-call': 2,
        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 2,
        // disallow use of void operator
        'no-void': 2,
        // allow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': 0,
        // disallow use of the with statement
        'no-with': 2,
        // require use of the second argument for parseInt()
        'radix': 2,
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 2,
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': [2, 'inside'],
        // require or disallow Yoda conditions
        'yoda': 2,
    },
};

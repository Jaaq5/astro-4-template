import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Use the recommended configuration for Astro
  ...eslintPluginAstro.configs.recommended,

  // Configuration for JavaScript files
  {
    files: ['**/*.js', '**/*.jsx'], // Specify JavaScript files
    rules: {
      // Add or override JavaScript-specific rules here
      'no-console': 'warn', // Warn on console logs
      'no-unused-vars': 'warn', // Warn on unused variables
      eqeqeq: 'error', // Enforce strict equality
      curly: 'error', // Require curly braces for control statements
      // Add any other rules you need
    },
  },

  // Additional Astro-specific rules can be added here
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-conflict-set-directives': 'error', // Prevent conflict in set directives
      'astro/no-unused-define-vars-in-style': 'warn', // Warn on unused variables in styles
      'astro/no-set-html-directive': 'error', // Prevent using set:html directive
      //'astro/no-empty-component': 'warn', // Warn on empty Astro components
      //'astro/require-title': 'error', // Require title for Astro pages
      //'astro/no-duplicate-keys': 'error', // Prevent duplicate keys in Astro components
      // Add any other Astro rules you need
    },
  },
];

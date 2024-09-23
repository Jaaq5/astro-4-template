/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  // Maximum line length before Prettier will wrap the line
  printWidth: 80, // Standard default width for readability
  
  // Whether to add a semicolon at the end of statements
  semi: true, // Standard practice in JS
  
  // Use single quotes instead of double quotes
  singleQuote: true, // Common convention in JS
  
  // Number of spaces per indentation level
  tabWidth: 2, // Common for many codebases
  
  // Print trailing commas wherever possible when multi-line
  trailingComma: 'es5', // Common setting for better version control diffs
  
  // Use tabs for indentation instead of spaces
  useTabs: false, // Spaces are standard for most projects
  
  // Plugins to be used with Prettier
  plugins: ['prettier-plugin-astro'],
  
  // Configuration overrides for specific file types
  overrides: [
    {
      // Files that should not use tabs for indentation
      files: ['.*', '*.md', '*.toml', '*.yml'],
      options: {
        // Use spaces for indentation in these files
        useTabs: false,
      },
    },
    {
      // Configuration specifically for Astro files
      files: ['**/*.astro'],
      options: {
        // Use the Astro parser for formatting
        parser: 'astro',
      },
    },
    {
      // Default configuration for JavaScript, JSX, TypeScript, and TSX files
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      options: {
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    },
  ],
};

export default config;

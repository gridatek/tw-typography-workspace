// Main entry point for tw-typography package
export * from './types';

// CSS file should be imported separately by consumers:
// import 'tw-typography/dist/typography.css';

// Optional: Export CSS as a string for JS frameworks
export const typographyCSS = `
/* This would contain the compiled CSS */
/* Import the actual CSS file instead: */
/* @import 'tw-typography/dist/typography.css'; */
`;

// Version info
export const version = '1.0.0';

// TypeScript definitions for tw-typography

export interface TypographyTheme {
  colors: {
    heading: string;
    body: string;
    muted: string;
    border: string;
    codeBackground: string;
    codeText: string;
  };
  sizes: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    body: string;
    small: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface TypographyConfig {
  theme?: Partial<TypographyTheme>;
  darkMode?: boolean;
  responsive?: boolean;
}

export type TypographyUtility =
  | 'typography-h1'
  | 'typography-h2'
  | 'typography-h3'
  | 'typography-h4'
  | 'typography-h5'
  | 'typography-h6'
  | 'typography-p'
  | 'typography-small'
  | 'typography-blockquote'
  | 'typography-code'
  | 'typography-pre'
  | 'typography-ul'
  | 'typography-ol'
  | 'typography-li'
  | 'typography-strong'
  | 'typography-em'
  | 'typography-link';

export type ProseClass = 'prose';

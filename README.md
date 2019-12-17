# Goron
Goron is a simple design token utility class generator.

🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

This is extremely under development and the docs are rubbish.

🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

## Config

To customise the classes with your own config, create a file at the root of your project called `goron.config.js`.

### Default config

If you don’t define a config in your project, Goron will use the default config which is this:

```javascript
const colors = {
  primary: '#ff00ff',
  light: '#ffffff',
  dark: '#252525'
};

const fonts = {
  base: 'Helvetica, sans-serif',
  serif: 'Georgia, serif'
};

const sizeScale = {
  '300': '0.8rem',
  '400': '1rem',
  '500': '1.25rem',
  '600': '1.56rem',
  '700': '1.95rem',
  '800': '2.44rem',
  '900': '3.05rem'
};

module.exports = {
  colors,
  sizeScale,
  fonts,
  generateCustomProperties: true,
  utilities: {
    'bg': {
      items: colors,
      output: 'standard',
      property: 'background'
    },
    'color': {
      items: colors,
      output: 'standard',
      property: 'color'
    },
    'font': {
      items: fonts,
      output: 'standard',
      property: 'font-family'
    },
    'gap-top': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-top'
    },
    'gap-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'margin-bottom'
    },
    'leading': {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7'
      },
      output: 'standard',
      property: 'line-height'
    },
    'measure': {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch'
      },
      output: 'standard',
      property: 'max-width'
    },
    'pad-top': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-top'
    },
    'pad-bottom': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-bottom'
    },
    'pad-left': {
      items: sizeScale,
      output: 'standard',
      property: 'padding-left'
    },
    'text': {
      items: sizeScale,
      output: 'responsive',
      property: 'font-size'
    },
    'weight': {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700'
      },
      output: 'standard',
      property: 'font-weight'
    }
  },
  breakpoints: {
    md: '48em',
    lg: '68em'
  }
};
```

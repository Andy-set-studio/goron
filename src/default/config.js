const sizeScale = {
  'base': '1rem',
  '300': '0.8rem',
  '500': '1.25rem',
  '600': '1.56rem',
  '700': '1.95rem',
  '800': '2.44rem',
  '900': '3.05rem',
  'max': '4rem'
};

const colors = {
  'primary': '#173854',
  'primary-shade': '#102538',
  'primary-glare': '#22547c',
  'highlight': '#fedb8b',
  'light': '#ffffff',
  'mid': '#cccccc',
  'dark': '#333333',
  'slate': '#404040'
};

module.exports = {
  utilities: {
    'align': {
      items: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
      },
      output: 'responsive',
      property: 'align-items'
    },
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
    'box': {
      items: {
        'block': 'block',
        'flex': 'flex',
        'inline-flex': 'inline-flex',
        'hide': 'none'
      },
      output: 'responsive',
      property: 'display'
    },
    'font': {
      items: {
        base:
          "\"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'\"",
        serif: '"\'Lora\', serif"'
      },
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
    'space': {
      items: {
        between: 'space-between',
        around: 'space-around',
        before: 'flex-end'
      },
      output: 'responsive',
      property: 'justify-content'
    },
    'stack': {
      items: {
        '300': 0,
        '400': 10,
        '500': 20,
        '600': 30,
        '700': 40
      },
      output: 'standard',
      property: 'z-index'
    },
    'ta': {
      items: {
        right: 'right',
        left: 'left',
        center: 'center'
      },
      output: 'responsive',
      property: 'text-align'
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
    },
    'width': {
      items: {
        full: '100%',
        half: '50%',
        quarter: '25%',
        third: '33.333%'
      },
      output: 'responsive',
      property: 'width'
    }
  },
  breakpoints: {
    md: '48rem'
  }
};

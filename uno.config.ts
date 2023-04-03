import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#60A3BC'
    }
  },
  shortcuts: {
    's-btn': 'bg-primary text-white h-48px b-rd-8px text-18px b-1px b-primary p-x-16px p-y-8px w-100%'
  },
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})

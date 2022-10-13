import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetAttributify({ strict }), presetUno()],
    transformers: [transformerDirective()],
  });
}

export default createConfig();

'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  colors: { brand: { 50:'#eff1ff',100:'#dfe3ff',200:'#c2c8ff',300:'#9ba4ff',400:'#7b7eff',500:'#655cf6',600:'#5744e9',700:'#4936ce',800:'#3c2fa6',900:'#342c83' } },
  styles: { global: { body: { bg: '#080a10', color: 'whiteAlpha.900' }, '::selection': { bg: 'brand.500', color: 'white' } } },
  fonts: { heading: 'var(--font-inter), Inter, sans-serif', body: 'var(--font-inter), Inter, sans-serif' },
  radii: { xl: '18px', '2xl': '24px' },
});
export function Providers({ children }: { children: React.ReactNode }) { return <ChakraProvider theme={theme}>{children}</ChakraProvider>; }

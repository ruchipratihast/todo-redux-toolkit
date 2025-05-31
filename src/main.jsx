import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx'
import './index.css'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      defaultProps: {
        colorScheme: 'primary',
      }
    },
    Input: {
      defaultProps: {
        size: 'lg',
        borderRadius: 'lg'
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: '600',
        fontSize: 'md',
      }
    },
    Card: {
      baseStyle: {
        borderRadius: 'lg',
        shadow: 'md',
      }
    }
  },
  styles: {
    global: {
      'html, body': {
        bg: '#ffffff',
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}> 
        <App /> 
    </ChakraProvider>
  </StrictMode>,
)

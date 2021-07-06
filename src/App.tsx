import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

function App() {
  console.log(extendTheme)
  return (
    <div className="App">
      <ChakraProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;

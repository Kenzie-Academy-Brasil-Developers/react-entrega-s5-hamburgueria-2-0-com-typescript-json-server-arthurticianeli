import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { ProductListProvider } from "./ProductListContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <ProductListProvider>
        <CartProvider>{children}</CartProvider>
      </ProductListProvider>
    </AuthProvider>
  </ChakraProvider>
);

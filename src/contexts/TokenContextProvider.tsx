import { createContext, ReactNode, useContext } from "react";

interface TokenContextProps {
  token: string;
}

const TokenContext = createContext<TokenContextProps>({
  token: "",
});

interface TokenContextProviderProps {
  token: string;
  children: ReactNode;
}

export function TokenContextProvider({
  token,
  children,
}: TokenContextProviderProps) {
  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
}

export function useToken() {
  const { token } = useContext(TokenContext);

  if (token === undefined)
    throw new Error("useToken must be used inside TokenContextProvider");

  return token;
}
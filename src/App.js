import Rout from "./router";
import GlobalStyle from "./GlobalStyle";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Rout/>
    </AuthProvider>
  );
}

export default App;

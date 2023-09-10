import { Provider } from "react-redux";
import AppNavigation from "./src/navigation/appNavigation";
import { store } from "./src/redux/store";
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider> 
  );
}

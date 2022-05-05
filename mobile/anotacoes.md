- npm install -g expo-cli

- expo init mobile (Black -> Typescript)

- extensoes: rcomponent

- expo google fonts
[x] https://docs.expo.dev/guides/using-custom-fonts/

- expo install expo-font @expo-google-fonts/inter

- expo install expo-app-loading

- import AppLoading from 'expo-app-loading';
- import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

- export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

- npm install --save phosphor-react-native 

- expo install react-native-svg

- npm install --save react-native-iphone-x-helper

- https://gorhom.github.io/react-native-bottom-sheet/

- expo install @gorhom/bottom-sheet@^4

- https://docs.expo.dev/

- expo install react-native-reanimated  (plugins: ['react-native-reanimated/plugin'],)
  
- https://docs.expo.dev/versions/latest/sdk/gesture-handler/

- expo install react-native-gesture-handler

(App.ts -> import 'react-native-gesture-handler';)

- expo start --clear
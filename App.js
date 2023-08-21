import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import { ActivityIndicator } from 'react-native';
import { Suspense } from 'react';
import Router from './src/navigation/Router';

/*
  Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
  Çöcüm: React v18 ile artık Ana bileşene Suspence eklenmelidir.
*/

export default function App() {
  return (
      <RecoilRoot>
          <Suspense fallback={<ActivityIndicator size='large' color='red'/>}>
          <NavigationContainer>
            <Router/>
          </NavigationContainer>
          </Suspense>
      </RecoilRoot>
  );
}



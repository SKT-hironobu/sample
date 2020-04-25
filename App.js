import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Hello from './Hello.js';
import reducer from './reducer.js';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Hello />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
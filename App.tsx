/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  // Button,
} from 'react-native';
// @ts-ignore: Unreachable code error
import {FAB, BottomNavigation, List} from 'react-native-paper';

const MusicRoute = () => (
  <>
    <ScrollView>
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
        right={props => <List.Icon {...props} icon="more" />}
      />
    </ScrollView>
    <FAB
      icon={{
        uri: 'https://cdn-icons-png.flaticon.com/64/622/622669.png',
      }}
      style={styles.fab}
      onPress={() => console.log('FAB Pressed')}
      color="#fff"
    />
  </>
);

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      icon: 'music-note',
      badge: true,
    },
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
    // {
    //   key: 'notifications',
    //   title: 'Notifications',
    //   focusedIcon: 'bell',
    //   unfocusedIcon: 'bell-outline',
    // },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <View style={{flex: 1}}>
      {/* <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Content title="Bejövő üzenetek" />
      </Appbar.Header> */}
      {/* <Button mode="contained" onPress={() => console.log('Pressed')}>
        Hello gomb
      </Button>
      <Text>hello react native</Text> */}
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 32,
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
          backgroundColor: 'transparent',
          fontFamily: 'Roboto',
        }}>
        Bejövő üzenetek
      </Text>
      <BottomNavigation
        // eslint-disable-next-line react-native/no-inline-styles
        barStyle={{backgroundColor: '#006064'}}
        sceneAnimationEnabled={false}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#00e676',
    // zIndex: 100,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

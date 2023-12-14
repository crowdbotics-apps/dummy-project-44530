import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react';
import { Text } from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator();

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavigationView = () => {
  const [routes] = useState([{
    key: 'music',
    title: 'Favorites',
    focusedIcon: 'heart',
    unfocusedIcon: 'heart-outline',
    component: MusicRoute
  }, {
    key: 'albums',
    title: 'Albums',
    focusedIcon: 'album',
    component: AlbumsRoute
  }, {
    key: 'recents',
    title: 'Recents',
    focusedIcon: 'history',
    component: RecentsRoute
  }, {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
    component: NotificationsRoute
  }]);
  return <Tab.Navigator initialRouteName="Favorites" shifting={true} sceneAnimationEnabled={false}>
    {routes?.map((route, index) => <Tab.Screen name={route?.title} component={route?.component} options={{
      tabBarIcon: route?.focusedIcon
    }} />)}
  </Tab.Navigator>;
};

export default BottomNavigationView;
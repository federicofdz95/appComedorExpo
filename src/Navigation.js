import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './views/Home'
import Menu from './views/Menu'


const HomeRoute = () => <Home />;

const MenuRoute = () => <Menu />;


const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'menu', title: 'Menu', focusedIcon: 'silverware' },    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};


export default Navigation
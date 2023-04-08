import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Home from './views/Home'
import Menu from './views/Menu'
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,  
  Alert,
} from 'react-native';
import axios from 'axios';



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

  const styles = StyleSheet.create({
    header: {            
      backgroundColor:'#568203',          
    },
  });

  

  const [dato, setDato] = React.useState([]);

  
  const getDataApiMenu = async () => {
    try {
      const response = await axios.get(
        'http://apifdz.somee.com/api/menu',
      );
      //setdata(JSON.stringify(response.data));
      setDato(response.data);
      //console.log((data))
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };


  React.useEffect(() => {
    getDataApiMenu();
  }, []);

  const alertPersonalizado = () =>
    Alert.alert('Actualizado', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


    function actualizar() {
      getDataApiMenu();
      alertPersonalizado();
    }


  return (
    <>
        <Appbar.Header style={styles.header}>                        
            <Appbar.Content color='#fff' title="App Comedor" />          
            <Appbar.Action  color='#fff' icon="refresh" onPress={actualizar} />
        </Appbar.Header>

        <SafeAreaView>
        <ScrollView>
          <Menu data={dato}/>
        </ScrollView>
        </SafeAreaView>
        {/*
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />
        */}
    </>
  );
};



export default Navigation
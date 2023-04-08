import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Menu = ({data}) => {

  

  return (
    <>   

    <Text style={{marginBottom: '5%'}}></Text>

    
    {data ?
      
            data.map((item, y) => (
              
              <Card style={{marginBottom:'10%'}} key={y}>
                <Card.Title title={item.diaMenu.toUpperCase() + ' - ' + item.dia2Menu.toUpperCase()}/>
                <Card.Cover style={{marginBottom:'10%'}} source={{ uri: item.imgMenu}} />
                <Card.Content>
                  
                  <Text variant="bodyMedium">
                    Entrada: {item.entradaMenu.toUpperCase()}
                  </Text>

                  <Text variant="titleLarge">
                    {item.principalMenu.toUpperCase()}
                  </Text>                                    
                  
                  <Text variant="bodySmall">                    
                    Postre: {item.postreMenu.toUpperCase()}
                  </Text>

                </Card.Content>
              </Card>
              
            )) : 
              <Text>
                Sin datos
              </Text>
            }
      
      <Text style={{marginBottom: '30%', textAlign:'center'}}> 
        devFdz &copy;
      </Text>

    </>
  )
}

export default Menu
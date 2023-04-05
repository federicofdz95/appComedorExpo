import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Chip } from 'react-native-paper';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Menu = () => {
  return (
    <>      
      <Card>        
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />        
      </Card>
    </>
  )
}

export default Menu
import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from './ProfileScreen'
import ArchiveScreen from './ArchiveScreen'

const Drawer = createDrawerNavigator();

export default function Profile() {
  return (
    <Drawer.Navigator 
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }}
      drawerPosition="right"
      drawerType="slide"
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Archive" component={ArchiveScreen} />
      <Drawer.Screen name="Your Activity" component={ArchiveScreen} />
      <Drawer.Screen name="Nametag" component={ArchiveScreen} />
      <Drawer.Screen name="Saved" component={ArchiveScreen} />
      <Drawer.Screen name="Close Friends" component={ArchiveScreen} />
    </Drawer.Navigator>
  )
}
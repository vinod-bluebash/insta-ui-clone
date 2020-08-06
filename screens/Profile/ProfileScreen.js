import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Appbar, Avatar, Button, Text, Title, Subheading, Caption, Card, Paragraph } from 'react-native-paper'
import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { EvilIcons } from '@expo/vector-icons'

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Appbar.Header style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{paddingHorizontal: 5}}>username12</Text>
          <Ionicons name="ios-arrow-down" size={18} color="black" />
        </View>
        {/* <Entypo name="menu" size={24} color="black" /> */}
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Feather
            name="menu"
            size={24}
            color="black"
          />
        </TouchableWithoutFeedback>
      </Appbar.Header>
      <View style={styles.container}>
        <View style={[styles.flexRow, {justifyContent: 'space-between', alignItems: 'center'}]}>
          <View>
            <Avatar.Image size={90} source={require('../../assets/dps/man_dp_circled.jpg')}/>
            <Text>Lorem Ipsum</Text>
          </View>
          <>
            <View style={{alignItems: 'center'}}>
              <Title>4</Title>
              <Subheading>Posts</Subheading>
            </View>
            <View  style={{alignItems: 'center'}}>
              <Title>64</Title>
              <Subheading>Followers</Subheading>
            </View>
            <View  style={{alignItems: 'center'}}>
              <Title>15</Title>
              <Subheading>Following</Subheading>
            </View>
          </>
        </View>
        <Button mode="contained" style={styles.marginTop12}>Edit Profile</Button>
        <View style={styles.marginTop12}>
          <Title>Complete your profile</Title>
          <Caption>3 of 4 COMPLETE</Caption>
        </View>
        <ScrollView horizontal>
          {[...Array(10)].map((x, i) =>
            <Card style={[styles.centered, styles.card]} key={i}>
              <Avatar.Icon size={24} icon="cloud-outline" />
              <Card.Content>
                <Title>Add Bio</Title>
                <Paragraph>Tell your followers a little bit about yourself</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained">Add Bio</Button>
              </Card.Actions>
            </Card>
          )}
        </ScrollView>
      </View>
    </>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  container: {
    padding: 20
  },
  marginTop12: {
    marginTop: 12
  },
  card: {
    width: 160,
    height: 160,
    marginRight: 10
  }
})
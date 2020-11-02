/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  Header,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Thumbnail,
  Tab,
  Tabs,
  Container,
  List,
  ListItem,
} from 'native-base';

const {height} = Dimensions.get('window');

const PartnersDetailsScreen = ({route, navigation}) => {
  const {partner} = route.params;

  return (
    <Container>
      <Header
        style={{
          backgroundColor: '#0090BC',
        }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Partners</Title>
        </Body>
        <Right></Right>
      </Header>
      {/* <Text>LeadersDetailsScreen</Text> */}

      <View
        style={{
          height: height / 4 - 30,
          backgroundColor: '#0090BC',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Thumbnail large square source={partner.imgUr} />
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          {partner.title}{' '}
        </Text>
      </View>

      <View
        hasTabs
        style={{
          backgroundColor: '#0090BC',
        }}
      />

      <Tabs
        tabBarBackgroundColo="#fff"
        tabContainerStyle={{backgroundColor: 'yellow'}}>
        <Tab heading="Intro">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Tab>
        <Tab heading="Contact">
          <List>
            <ListItem avatar>
              <Left>
                <Icon name="call-outline" />
              </Left>
              <Body>
                <Text>PHONE</Text>
                <Text note>07111111111</Text>
              </Body>
              <Right></Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name="call-outline" />
              </Left>
              <Body>
                <Text>EMAIL</Text>
                <Text note>name@gmail.com</Text>
              </Body>
              <Right></Right>
            </ListItem>
          </List>
        </Tab>
      </Tabs>

      {/* <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      /> */}
    </Container>
  );
};
export default PartnersDetailsScreen;

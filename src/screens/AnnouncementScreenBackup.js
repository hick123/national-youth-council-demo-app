/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderContainer from '../components/Header';
import {
  Thumbnail,
  Left,
  Header,
  Title,
  Body,
  Right,
  Button,
  Icon,
  Card,
  CardItem,
} from 'native-base';
import {Image} from 'react-native';
const AnnouncementScreen = ({navigation}) => {
  return (
    <>
      <HeaderContainer navigation={navigation} />

      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/fursa.jpg',
                }}
              />
              <Body>
                <Text> International Youth Week</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
            <Right>
              <View style={{flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name="share-social-outline" style={{fontSize: 26}} />
                </Button>
                <Button transparent style={{marginLeft: 10}}>
                  <Icon name="download-outline" style={{fontSize: 26}} />
                </Button>
              </View>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/fursa.jpg',
              }}
              style={{height: 150, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/Utafiti.jpg',
                }}
              />
              <Body>
                <Text> International Youth Week</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
            <Right>
              <Text note>GeekyAnts</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://nationalyouthcouncil.go.ke/wp-content/uploads/2020/09/Utafiti.jpg',
              }}
              style={{height: 150, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </ScrollView>
    </>
  );
};
export default AnnouncementScreen;

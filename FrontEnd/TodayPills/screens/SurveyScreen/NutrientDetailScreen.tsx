import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import BackgroundScreen from '../BackgroundScreen';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NutrientDescription from '../../components/Data/NutrientDescription';
import { useFocusEffect } from '@react-navigation/native';
import BackgroundScreen2 from '../BackgroundScreen2';
import {
  boldWelcome,
  regularWelcome,
} from '../../components/Data/fontFamilyObject';
import { primary } from '../../constants/Colors';
import GoBackBtn from '../../components/UI/GoBackBtn';

const NutrientDetailScreen = ({ navigation, route }: any) => {
  const [myName, setMyName] = useState<string>('');
  const [nutrientName, setNutrientName] = useState('');
  const { nutrient } = route.params;
  const getMyName = async () => {
    const name = await AsyncStorage.getItem('@storage_UserNickName');
    setMyName(name);
  };
  const setDescription = async () => {
    setNutrientName(
      JSON.stringify(nutrient[0]).slice(1, nutrient[0].length + 1)
    );
  };
  useFocusEffect(
    useCallback(() => {
      getMyName();
      setDescription();
    }, [])
  );
  return (
    <BackgroundScreen2>
      <View style={styles.container}>
        {/* <Ionicons
          name="arrow-back"
          size={48}
          color="black"
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        /> */}
        <View style={{ marginLeft: 20 }}>
          <GoBackBtn
            size={48}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.nutrienttextcontainer}>
          <Text
            style={{ ...styles.nutrienttext, ...boldWelcome, letterSpacing: 1 }}
          >
            {nutrientName}
          </Text>
        </View>
        <View style={styles.aligncenter}>
          <View style={styles.descriptioncontainer}>
            {/* <ImageBackground
              source={require('../../assets/images/pinkPillBag.png')}
              style={styles.image}
            > */}
            <View style={styles.pillImage}>
              <Image source={require('../../assets/images/pillbox.png')} />
            </View>
            <View style={styles.image}>
              <Text
                style={{
                  ...styles.descriptiontext,
                  ...regularWelcome,
                  letterSpacing: 2,
                }}
              >
                {NutrientDescription.get(nutrientName)}
              </Text>
            </View>
            {/* </ImageBackground> */}
          </View>
          <View style={styles.pillCharacter}>
            <Image source={require('../../assets/images/pillCharacter.png')} />
          </View>
          <View style={styles.recommendcontainer}>
            <View style={styles.recommendtextcontainer}>
              <Text
                style={{
                  ...styles.recommendtext,
                  ...boldWelcome,
                  letterSpacing: 1,
                }}
              >
                {myName.length > 4
                  ? myName.slice(0, 4) + '...  '
                  : myName + ' '}
                &nbsp;
              </Text>
              <Text
                style={{
                  ...styles.recommendtext,
                  ...regularWelcome,
                  letterSpacing: 1,
                }}
              >
                님께 맞는&nbsp;
              </Text>
              <Text
                style={{
                  ...styles.recommendtext,
                  ...boldWelcome,
                  letterSpacing: 1,
                  // color: "#FF78A3",
                  color: primary,
                }}
              >
                {nutrientName}
              </Text>
              <Text
                style={{
                  ...styles.recommendtext,
                  ...regularWelcome,
                  letterSpacing: 1,
                }}
              >
                을(를)
              </Text>
            </View>
            <View style={{ justifyContent: 'center', marginBottom: 20 }}>
              <Text
                style={{
                  ...styles.recommendtext,
                  ...regularWelcome,
                  letterSpacing: 1,
                }}
              >
                추천받고 싶으시면 설문을 진행해주세요!
              </Text>
            </View>
            <View style={styles.buttonOuterContainer}>
              <Pressable
                android_ripple={{ color: '#4E736F' }}
                style={styles.buttonInnerContainer}
                onPress={async () => {
                  // if (
                  //   (await AsyncStorage.getItem("@storage_didPlusSurvey")) !==
                  //   null
                  // ) {
                  //   navigation.navigate("pillResultScreen");
                  // } else {
                  //   navigation.navigate("SurveyDeepScreen");
                  // }
                  navigation.navigate('SecondAddSurvey');
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    ...boldWelcome,
                    letterSpacing: 3,
                  }}
                >
                  설문하기
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </BackgroundScreen2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  nutrienttextcontainer: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  nutrienttext: {
    fontSize: 25,
  },
  aligncenter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: '70%',
  },
  boldtext: {
    fontWeight: 'bold',
  },
  descriptioncontainer: {
    width: '80%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    backgroundColor: '#FFE3FF',
    margin: 10,
    padding: 10,
    // alignContent: 'stretch',
    // backgroundColor: '#e0e0e0',
  },
  pillImage: {
    position: 'relative',
    top: -60,
    width: '15%',
    height: '15%',
    marginLeft: '30%',
    transform: [{ scale: 0.15 }],
  },
  descriptiontext: {
    // position: 'absolute',
    // left: 30,
    fontSize: 20,
    width: '90%',
  },
  recommendcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  recommendtextcontainer: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'center',
  },
  recommendtext: {
    fontSize: 15,
  },
  buttonOuterContainer: {
    borderRadius: 20,
    width: '80%',
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 7,
    backgroundColor: '#8EE8DE',
  },
  title: {
    fontSize: 25,

    textAlign: 'center',
    color: 'white',
    paddingVertical: 3,
  },
  pillCharacter: {
    position: 'relative',
    top: -60,
    width: '15%',
    marginRight: '70%',
    height: 60,
    transform: [{ scale: 0.25 }],
  },
});

export default NutrientDetailScreen;

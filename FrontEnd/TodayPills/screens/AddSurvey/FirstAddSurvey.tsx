import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import BackgroundScreen from '../BackgroundScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AnswerSurvey from '../../components/Cards/AnswerSurvey';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FirstAddSurvey = ({ navigation }: any) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [nowStage, setNowStage] = useState(0);
  const [answerSheet, setAnswerSheet] = useState<any>({
    is_ok_big_pill: false,
    preferred_brand: '',
  });
  const surveyData = [
    ['is_ok_big_pill', '알약이 커도 괜찮을까요?', '알려주세요', ['YES.', 'NO']],
    [
      'preferred_brand',
      '선호하는 영양제 브랜드가 있나요?',
      '알려주세요',
      [
        '해당없음',
        'solgar',
        'california gold nutrition',
        'natural factors',
        'life extension',
        '기타',
      ],
    ],
    [],
  ];
  useEffect(() => {
    if (nowStage === surveyData.length - 1) {
      navigation.navigate('SurveyLoadingScreen', { answerSheet: answerSheet });
    }
  }, [answerSheet]);
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={48}
          color="black"
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.textcontainer}>
          <Text style={[styles.text, styles.largetext]}>
            {surveyData[nowStage][1]}
          </Text>
          <Text style={[styles.text, styles.smalltext]}>
            {surveyData[nowStage][2]}
          </Text>
        </View>
        <ScrollView>
          <AnswerSurvey
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            nowStage={nowStage}
            surveyData={surveyData}
          />
        </ScrollView>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttonOuterContainer}>
            <Pressable
              android_ripple={{ color: '#4E736F' }}
              style={styles.buttonInnerContainer}
              onPress={async () => {
                let uid = await AsyncStorage.getItem('@storage_UserId');
                setNowStage(nowStage + 1);
                let answer: boolean | number;
                //균형잡힌 식사 관련 질문
                if (nowStage === 8) {
                  if (selectedItem === 0) {
                    setNowStage(nowStage + 2);
                  }
                }
                if (nowStage === 9) {
                  answer = selectedItem;
                } else if (surveyData[nowStage][3]) {
                  selectedItem == 0 ? (answer = true) : (answer = false);
                  if (nowStage === 7) {
                    answer = selectedItem;
                  }
                } else answer = selectedItem;
                setAnswerSheet({
                  userId: uid,
                  ...answerSheet,
                  [`${surveyData[nowStage][0]}`]: answer,
                });
                setSelectedItem(1);
              }}
            >
              <Text style={styles.title}>다 음</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  textcontainer: {
    marginLeft: 30,
    height: '15%',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  largetext: {
    fontSize: 24,
  },
  smalltext: {
    fontSize: 15,
    marginTop: 10,
  },
  itemcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  itemoutercontainer: {
    borderRadius: 10,
    width: '80%',
    height: 80,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 10,
  },
  iteminnercontainer: {
    paddingVertical: 25,
    backgroundColor: '#E5E5E5',
  },
  iteminnercontainerClicked: {
    paddingVertical: 25,
    backgroundColor: 'rgba(142,232,222,0.95)',
  },
  itemflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  buttoncontainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonOuterContainer: {
    borderRadius: 10,
    width: '80%',
    height: 50,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    backgroundColor: '#E881B1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  icon1: {
    marginRight: 20,
  },
});
export default FirstAddSurvey;

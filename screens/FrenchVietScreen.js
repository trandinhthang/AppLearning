import * as React from 'react';

import {View, Text, TextInput} from 'react-native';
import {ScrollView, useWindowDimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HTML from 'react-native-render-html';
import VoiceFranceViet from '../components/VoiceFranceViet'

const FrenchVietScreen = () => {
  const contentWidth = useWindowDimensions().width;
  const contentHeight = useWindowDimensions().height;
  const [word, setWord] = React.useState("");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function searchAPI(word) {
    try {
      const res = await fetch(`https://fr-vn.herokuapp.com/api/fr-vn/${word}`);
      const dataSearch = await res.json();

      const dataFinal = dataSearch[0];
      setLoading(false);
      setData(dataFinal);
    } catch (error) {
      console.log(`error`, error);
    }
  }
  const onSubmit = () => {
    setData(null);
    setLoading(true);
    searchAPI(word);
    
  };

  const getSearch = (data) => {
    setWord(data.join())
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 12,
          paddingLeft: 25,
          height: 53,
        }}>
        <TextInput
          placeholder="Pháp Việt !"
          placeholderTextColor="#239dad"
          style={{fontWeight: 'bold', fontSize: 16, width: 240}}
          value={word}
          onChangeText={setWord}
        />
     
        <VoiceFranceViet getSearch={getSearch} />
        <AntDesign
          onPress={() => onSubmit()}
          name="search1"
          color="#239dad"
          size={25}
          style={{marginRight: 20}}
        />
      </View>
     
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          margin: 10,
          height: contentHeight - 175,
        }}>
        <ScrollView>
          {loading && <Text>Loading</Text>}
          {data && (
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {data.name}
              </Text>

              <HTML
                source={{html: data.textFull}}
                contentWidth={contentWidth}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default FrenchVietScreen;

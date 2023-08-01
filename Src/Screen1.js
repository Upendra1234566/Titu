import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Screen1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: `#fff`}}>
      <View>
        <ImageBackground
          //imageStyle={{borderRadius: 26}}
          source={require(`./Imade/up.jpg`)}
          style={{
            width: 390,
            height: 710,
            //marginLeft: 0,
            //marginTop: ,
          }}>
          <View
            style={{justifyContent: `flex-end`, alignItems: `center`, flex: 1}}>
            <Text style={styles.Font}>Discovering your</Text>
            <Text style={styles.Font}>dream home, one</Text>
            <Text style={styles.Font}>step at a time</Text>

            <Text
              style={{
                fontFamily: `arial`,
                fontWeight: `900`,
                color: `#fff`,
                marginTop: 18,
                marginLeft: 16,
                fontSize: 10,
              }}>
              Finding a place to live can be a
            </Text>
            <Text
              style={{
                fontFamily: `Poppins-Regular.ttf`,
                fontWeight: `900`,
                color: `#fff`,
                marginTop: 2,
                marginLeft: 16,
                fontSize: 10,
              }}>
              diffrent task,therefore we have
            </Text>
            <Text
              style={{
                fontFamily: `Poppins-Blacklic.ttf`,
                fontWeight: `900`,
                color: `#fff`,
                marginTop: 2,
                marginLeft: 16,
                fontSize: 10,
              }}>
              done our best to simplity it.
            </Text>
            <View
              style={{
                backgroundColor: `#fff`,
                borderRadius: 10,
                marginVertical: 30,
                paddingVertical: 10,
                //overflow: 'hidden',
                // marginTop: 80,
                // marginLeft: 40,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: `green`,
                    fontWeight: `800`,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Font: {
    fontFamily: `Poppins-Regular.ttf`,
    fontWeight: `900`,
    color: `#fff`,
    marginLeft: 16,
    fontSize: 24,
  },
});
export default Screen1;

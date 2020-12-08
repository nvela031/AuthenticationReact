// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

// Make a components
const Header = (props) => {
  return (
    <View styles={styles.viewStyles}>
      <Text style={styles.textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyles: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

// Make the component available to other parts of the app
export {Header};

import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import StyledButton from "./components/components.js"
import sports from "./sports.js"
import images from "./images.js"
import newSport from './newSport.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  let [formedWord, setFormedWord] = useState("...")
  let firstWord = ""
  let secondWord = ""

  const createWord = (index) => {
    secondWord = sports[index]
    return secondWord
  }

  const formNewWord = () => () => {
    //BASEketball option1
    if (firstWord == sports[0] && secondWord == sports[1]) { 
      formedWord = newSport[0]
      setFormedWord(formedWord)
    }
    //BASEketball option2
    else if (firstWord == sports[1] && secondWord == sports[0]) {
      formedWord = newSport[0]
      setFormedWord(formedWord)
    }
    //Basooball
    else if (firstWord == sports[0] && secondWord == sports[3]) {
      formedWord = newSport[1]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[3] && secondWord == sports[0]) {
      formedWord = newSport[1]
      setFormedWord(formedWord)
    }
    //Basby
    else if (firstWord == sports[0] && secondWord == sports[5]) {
      formedWord = newSport[2]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[5] && secondWord == sports[0]) {
      formedWord = newSport[2]
      setFormedWord(formedWord)
    }
    //Footsketball
    else if (firstWord == sports[3] && secondWord == sports[1]) {
      formedWord = newSport[3]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[1] && secondWord == sports[3]) {
      formedWord = newSport[3]
      setFormedWord(formedWord)
    }
    //Rugketball
    else if (firstWord == sports[1] && secondWord == sports[5]) {
      formedWord = newSport[4]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[5] && secondWord == sports[1]) {
      formedWord = newSport[4]
      setFormedWord(formedWord)
    }
    //Volsketball
    else if (firstWord == sports[8] && secondWord == sports[1]) {
      formedWord = newSport[5]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[1] && secondWord == sports[8]) {
      formedWord = newSport[5]
      setFormedWord(formedWord)
    }
    //footCricket
    else if (firstWord == sports[2] && secondWord == sports[3]) {
      formedWord = newSport[6]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[3] && secondWord == sports[2]) {
      formedWord = newSport[6]
      setFormedWord(formedWord)
    }
    //footGolf
    else if (firstWord == sports[4] && secondWord == sports[3]) {
      formedWord = newSport[7]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[3] && secondWord == sports[4]) {
      formedWord = newSport[7]
      setFormedWord(formedWord)
    }
    //Rugoot
    else if (firstWord == sports[5] && secondWord == sports[3]) {
      formedWord = newSport[8]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[3] && secondWord == sports[5]) {
      formedWord = newSport[8]
      setFormedWord(formedWord)
    }
    //TableFootnis
    else if (firstWord == sports[3] && secondWord == sports[6]) {
      formedWord = newSport[9]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[6] && secondWord == sports[3]) {
      formedWord = newSport[9]
      setFormedWord(formedWord)
    }
    //Footnis
    else if (firstWord == sports[7] && secondWord == sports[3]) {
      formedWord = newSport[10]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[3] && secondWord == sports[7]) {
      formedWord = newSport[10]
      setFormedWord(formedWord)
    }
    //Vollootball
    else if (firstWord == sports[3] && secondWord == sports[8]) {
      formedWord = newSport[11]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[8] && secondWord == sports[3]) {
      formedWord = newSport[11]
      setFormedWord(formedWord)
    }
    //Yolnnisball
    else if (firstWord == sports[8] && secondWord == sports[7]) {
      formedWord = newSport[12]
      setFormedWord(formedWord)
    }
    else if (firstWord == sports[7] && secondWord == sports[8]) {
      formedWord = newSport[12]
      setFormedWord(formedWord)
    }
    else {
      let firstWordLength = firstWord.length
      let secondWordLength = secondWord.length
      let firstHalfLength = firstWordLength / 2
      let secondHalfLength = secondWordLength / 2
      let firstHalf = firstWord.slice(0, firstHalfLength)
      let secondHalf = secondWord.slice(secondHalfLength)
      formedWord = firstHalf + secondHalf
      setFormedWord(formedWord) 
    }
  }

  return (
    <View style={styles.container}>
      <Modal 
      animationType={"slide"} 
      visible={modalVisible} 
      transparent={true} 
      onRequestClose={() => {
      }}><View style={styles.modalView}>
          <Text style={styles.modalText}>Instructions{"\n"}
          {"\n"}Add together two different sports to create a new sport.{"\n"}
          {"\n"}You can only add two different sports. (It will take your last two sports selected){"\n"}
          </Text>
          <TouchableOpacity style={styles.modalButton} 
            onPress={() => {
          setModalVisible(!modalVisible)
          }}>
          <Text style={styles.modalButton}>Close Instructions</Text></TouchableOpacity></View></Modal>    
      <Text style={styles.title}>Sports Calculator</Text>
      <View style={styles.layout}>        
        <StyledButton onPress={() => createWord(0) } source={images[0].image}></StyledButton>
        <StyledButton onPress={() => createWord(1) } source={images[1].image}></StyledButton>
        <StyledButton onPress={() => createWord(2) } source={images[2].image}></StyledButton>
      </View>
      <View style={styles.layout}>
        <StyledButton onPress={() => createWord(3) } source={images[3].image}></StyledButton>
        <StyledButton onPress={() => createWord(4) } source={images[4].image}></StyledButton>
        <StyledButton onPress={() => createWord(5) } source={images[5].image}></StyledButton>
      </View>
      <View style={styles.layout}>
        <StyledButton onPress={() => createWord(6) } source={images[6].image}></StyledButton>
        <StyledButton onPress={() => createWord(7) } source={images[7].image}></StyledButton>
        <StyledButton onPress={() => createWord(8) } source={images[8].image}></StyledButton>    
      </View>
      <View style={styles.operators}>
        <View style={styles.gap}>
          <StyledButton onPress={() => { firstWord = secondWord}} source={images[9].image}></StyledButton>
        </View>
        <StyledButton onPress={formNewWord()} source={images[10].image}></StyledButton>
      </View>
      <View>
        <Text style={styles.result}>{formedWord}</Text>
      </View>
      <View style={styles.rightCorner}>
      
        <StyledButton onPress={() => setModalVisible(true) } source={images[11].image}></StyledButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(123,206,19,0.25)',
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    margin: 40,
    color: 'rgb(78,59,94)',
    fontSize: 30,
    fontWeight: "bold"
  },
  result: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 20
  },
  layout: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  operators: {
    flexDirection: "row",
    padding: 10
  },
  gap: {
    marginRight: 125
  },
  rightCorner: {
    marginLeft: 300
  },
  modalView: {
    margin: 60,
    paddingTop: 60,
    justifyContent: "flex-end",
    padding: 30,
    backgroundColor: 'rgba(132,146,166,0.97)',
    borderRadius: 10,
  },
  modalButton: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    fontSize: 15,
    margin: 5,
    padding: 2,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
});
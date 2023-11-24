import React, {useState} from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([ 
    { text: "Купить торт", key: "1"},
    { text: "Помыть посуду", key: "2"},
    { text: "Сделать йогу", key: "3"},
    
  ]);

  const addHahdler = (text) => {
    setListOfItems ((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    }) ;
    };





    class EventView extends React.Component {
      setStyles = (styles) => {
        this.root.setNativeProps({
          style: styles,
        })
      }
    
      state = {
        hover: false
      }
    
      render() {
        const { activeStyle, hoverStyle, style, onPressIn, onPressOut, ...passThrough } = this.props
        return (
          <View
            ref={(component) => { this.root = component }}
            onMouseEnter={
              () => {
                this.setStyles(hoverStyle)
                this.setState({ hover: true })
              }
            }
            onMouseLeave={
              () => {
                this.setStyles(style)
                this.setState({ hover: false })
              }
            }
            onStartShouldSetResponder={() => true}
            onResponderStart={
              () => {
                this.setStyles(activeStyle)
              }
            }
            onResponderRelease={
              () => {
                this.setStyles(this.state.hover ? hoverStyle : style)
              }
            }
            style={style}
            {...passThrough}
          />
        )
      }
    }





  
  return (
    <View style={styles.header}>
        <Header/>
        <Form addHandler={addHahdler}/>
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
            <ListItem el={item} deleteHandler = {deleteHandler}/>
            )}
          />
        </View>
    </View>
  );


  






  
}

const styles = StyleSheet.create({
  header: {
    flex:1,
  },


  text: {
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
    transition: "all 200ms ease"
  },
  text_hover: {
    transition: "all 100ms ease",
    transform: "scale(1.05)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
    textDecorationLine: "line-through"

  },
  text_active: {
    transition: "all 50ms ease",
    transform: "scale(1.03)"
  }



});



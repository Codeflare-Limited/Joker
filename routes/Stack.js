import React, { Component } from "react";
import Start from "../screens/Start";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Jokes from "../screens/Jokes";


class Stack extends Component {
    render(){
        return(
            <AppContainer />
        )
    }
}

const AppStack = createStackNavigator({
     Start: {
        screen: Start,
        navigationOptions: {
             headerShown: false,
             headerTitle: '',
             headerTintColor: '#fff',
             headerStyle: {
             backgroundColor: '#FFF',
             },
          },
    },
    Jokes: {
        screen: Jokes,
        navigationOptions: {
             headerTitle: 'Joke\'s on you!',
             headerTintColor: '#fff',
             headerStyle: {
             backgroundColor: '#800000',
             },
          },
    }
     
},{
    initialRouteName: 'Start'
})

const AppContainer = createAppContainer(AppStack)


export default Stack
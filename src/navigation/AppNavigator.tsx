import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Text} from 'react-native';
import {HomeIcon, UserIcon} from 'react-native-heroicons/solid';
import {HomeIcon as HomeIconOutline, UserIcon as UserIconOutline} from 'react-native-heroicons/outline';
import Home from "../screens/homeScreen";
import Profile from "../screens/profileScreen";

const Tab=createBottomTabNavigator();
const homeName='Home';
const profileName='Profile';

function AppNavigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route})=>({
                    tabBarIcon:({focused, color,size})=>{
                        let iconName;
                        switch(route.name){
                            case homeName:
                                iconName=focused? <HomeIcon size={size} color={color}/>:<HomeIconOutline size={size} color={color}/>
                                break;
                            case profileName:
                                iconName=focused? <UserIcon size={size} color={color} />:<UserIconOutline size={size} color={color}/>
                                break;
                            default:
                                break;
                        }
                        return iconName;
                    },
                    tabBarActiveTintColor:'#009A17',
                    tabBarInactiveTintColor:'black',
                    tabBarLabelStyle:{paddingBottom:4,fontSize:10},
                    tabBarStyle :{position:'absolute',padding:4,height:40,borderRadius:10, left:15, right:15,bottom:7}
                })}
                
            >
        
                <Tab.Screen name="Home" component={Home}  options={{headerShown:false}}/>
                <Tab.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
        
        
            </Tab.Navigator>
        </NavigationContainer>
    );
   
  
};
export default AppNavigation;
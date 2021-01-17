import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../screens/home.js'
import { CreateNav } from '../screens/create/create.js'
import { Task } from '../screens/task.js'
import { Friends } from '../screens/friends.js'
import { Me } from '../screens/me.js'

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
      },
      inactiveTintColor: '#582954',
      labelStyle: {
        fontSize: 14,
      },

    }}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => (<MaterialIcons name="home" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Create" component={CreateNav} options={{
          tabBarIcon: ({color, size}) => (<MaterialIcons name="create" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Task" component={Task} options={{
          tabBarIcon: ({color, size}) => (<FontAwesome name="tasks" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Friends" component={Friends} options={{
          tabBarIcon: ({color, size}) => (<Ionicons name="people" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Me" component={Me} options={{
          tabBarIcon: ({color, size}) => (<Ionicons name="person" size={size} color={color} />)
      }}/>
    </Tab.Navigator>
  );
}
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/home.js'
import { CreateNav } from '../screens/create/create.js'
import { Task } from '../screens/task.js'
import { Friends } from '../screens/friends.js'
import { Me } from '../screens/me.js'

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Create" component={CreateNav} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  );
}
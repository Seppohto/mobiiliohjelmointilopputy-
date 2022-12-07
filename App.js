import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from'./components/home'
import { Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Frontpage from'./components/frontpage'
import Firebasecamera from './components/firebasecamera'
// import Firebase from'./components/firebase'

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'sports-rugby';
      return <MaterialIcons name={iconName} size={size} color={color} />;
    } else if (route.name === 'Frontpage') {
      iconName = 'md-trophy';
      return <Ionicons name={iconName} size={size} color={color} />;
    } else if (route.name === 'Firebasecamera') {
      iconName = 'ios-camera';
      return <Ionicons name={iconName} size={size} color={color} />;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Frontpage" component={Frontpage} />
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Training Photos" component={Firebasecamera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


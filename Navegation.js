import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

//importciones de las pantallas usadas para la app
import ScreenHome from './src/screen/Home/ScreenHome';
import ScreenLogin from './src/screen/Login/ScreenLogin';
import ScreenAjuste from './src/screen/Ajustes/ScreenAjuste';
import ScreenCodigoQR from './src/screen/CodigoQR/ScreenCodigoQR';
import ScreenPerfil from './src/screen/Perfil/ScreenPerfil';
import ScreenPanico from './src/screen/Panico/ScreenPanico';
import ScreenReportes from './src/screen/Reportes/ScreenReportes';
import ScreenRegistro from './src/screen/Login/ScreenRegistro';
import { Colors } from './src/themes/colors';

//declarar las funciones de navegación
const Stack = createStackNavigator(); // Aquí se define el uso del Stack Navigator
const Tabs = createBottomTabNavigator(); //aquí se define el uso del famoso NavBar

//funcionalidad de la barra de navegación
function MyTabs() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.textPrimary,
                tabBarInactiveTintColor: 'rgb(242, 242, 242)', // Gris con opacidad (hex + alpha)
                tabBarActiveBackgroundColor: 'rgb(242, 242, 242)',

                // Configuración del Header
                headerShown: true,
                headerTitle: 'Inicio', // Usa headerTitle en lugar de title para claridad
                headerTintColor: 'rgb(242, 242, 242 )', // Blanco (hex simplificado, sin espacios)
                headerTitleStyle: {
                    color: 'white', // Redundante (headerTintColor ya lo cubre), pero puede dejarse
                    fontWeight: 'bold', // Mejora la legibilidad
                },
                headerStyle: {
                    backgroundColor: Colors.textPrimary,
                    elevation: 0, // Elimina sombra en Android
                    shadowOpacity: 0, // Elimina sombra en iOS
                },

                // Configuración de la TabBar
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    backgroundColor: Colors.textPrimary, // Fondo coherente con el header
                    borderTopWidth: 0, // Elimina línea superior
                    position: 'absolute',

                    
                }
                
            }}
        >
            <Tabs.Screen name="Inicio" component={ScreenHome}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="Panico" component={ScreenPanico}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="alert-octagon" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="Reportes" component={ScreenReportes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="file" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="QR" component={ScreenCodigoQR}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="qrcode" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }} />

        </Tabs.Navigator>
    )
}

// Aquí se definen las pestañas de navegación
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ScreenHome} />
            <Stack.Screen name="Login" component={ScreenLogin} />
            <Stack.Screen name="Register" component={ScreenRegistro} />
            <Stack.Screen name="Ajustes" component={ScreenAjuste} />
            <Stack.Screen name="QR" component={ScreenCodigoQR} />
            <Stack.Screen name="Perfil" component={ScreenPerfil} />
            <Stack.Screen name="Reportes" component={ScreenReportes} />
        </Stack.Navigator>
    );
}

export default function Navegation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}


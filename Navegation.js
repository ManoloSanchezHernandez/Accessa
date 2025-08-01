import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

//importciones de las pantallas usadas para la app
import ScreenHome from './src/screen/Home/ScreenHome';
import ScreenLogin from './src/screen/Login/ScreenLogin';
import ScreenCodigoQR from './src/screen/CodigoQR/ScreenCodigoQR';
import ScreenPerfil from './src/screen/Perfil/ScreenPerfil';
import ScreenPanico from './src/screen/Panico/ScreenPanico';
import ScreenReportes from './src/screen/Reportes/ScreenReportes';
import ScreenRegistro from './src/screen/Login/ScreenRegistro';
import ConfiguracionesScreen from './src/screen/Perfil/ConfiguracionesScreen';
import DatosScreen from './src/screen/Perfil/DatosScreen';
import NotificacionesScreen from './src/screen/Perfil/NotificacionesScreen';
import ScreenHistorial from './src/screen/Reportes/ScreenHistorial';

//importamos los estilos
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
                tabBarInactiveTintColor: Colors.background,
                tabBarActiveBackgroundColor: Colors.background,
                headerBackTitle: 'Custom Back',
                headerBackTitleStyle: { fontSize: 30 },
                headerTitleAlign: 'center',


                // Configuración del Header
                headerShown: true,
                headerTintColor: Colors.background, // Blanco (hex simplificado, sin espacios)
                headerTitleStyle: {
                    color: Colors.background, // Redundante (headerTintColor ya lo cubre), pero puede dejarse
                    fontWeight: 'bold', // Mejora la legibilidad,
                    justifyContent: 'center'
                },
                headerStyle: {
                    backgroundColor: Colors.textPrimary,

                },

                // Configuración de la TabBar
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    backgroundColor: Colors.textPrimary, // Fondo coherente con el header
                    borderTopWidth: 0, // Elimina línea superior
                    position: 'absolute',

                },
            }}
        >
            <Tabs.Screen name="Inicio" component={MyStackHome}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    ),
                }} />
            <Tabs.Screen name="Panico" component={ScreenPanico}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alert-octagon" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="Reportes" component={ScreenReportes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="document" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="QR" component={ScreenCodigoQR}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="qr-code" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen name="Perfil" component={MyStackUser}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }} />

        </Tabs.Navigator>
    )
}
// Aquí se definen las pestañas de navegación
function MyStackHome() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={ScreenHome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={ScreenLogin} options={{
            }} />
            <Stack.Screen name="Register" component={ScreenRegistro} options={{
            }} />
            <Stack.Screen name="QR" component={ScreenCodigoQR} options={{
            }} />
            <Stack.Screen name="Perfil" component={ScreenPerfil} options={{
            }} />
            <Stack.Screen name="Reportes" component={ScreenReportes} options={{
            }} />
            <Stack.Screen name="Panico" component={ScreenPanico} options={{}} />
            <Stack.Screen name="Historial" component={ScreenHistorial} options={{}} />
        </Stack.Navigator>
    );
}

function MyStackUser() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Perfil" component={ScreenPerfil} options={{ headerShown: false }} />
            <Stack.Screen name="Datos" component={DatosScreen} options={{
            }} />
            <Stack.Screen name="Notificaciones" component={NotificacionesScreen} options={{
            }} />
            <Stack.Screen name="Configuraciones" component={ConfiguracionesScreen} options={{
            }} />
        </Stack.Navigator>
    )
}

export default function Navegation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={ScreenLogin} />
                <Stack.Screen name="Register" component={ScreenRegistro} />
                <Stack.Screen name="MyTabs" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


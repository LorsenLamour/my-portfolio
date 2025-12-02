# my-portfolio
Personal web portfolio built with React + Vite and styled with custom CSS. Showcases my front-end development projects, skills, and background.



# Color I might use
1. 
background: #ef32d9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #89fffd, #ef32d9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #89fffd, #ef32d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


2. 
background: #3a7bd5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3a6073, #3a7bd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


# Links & Sources  

0. React-icon               =>  https://react-icons.github.io/react-icons/
1. UIgradients  (color)     =>  https://uigradients.com/#BoraBora
2. GradientHunt (color)     =>  https://gradienthunt.com/
3. Fonts-Google             =>  https://fonts.google.com/
4. Lucide React             => https://lucide.dev/guide/packages/lucide-react


import React, { useState } from 'react'; import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Animated } from 'react-native'; const screenWidth = Dimensions.get('window').width; export default function HomeScreen() { const [progress] = useState(new Animated.Value(0)); // Utilisation d'Animated.Value const [progressPercentage, setProgressPercentage] = useState(0); // Valeur de la progression en pourcentage const handlePress = () => { // Incrémenter la progression de 1% à chaque clic, mais ne pas dépasser 100% const newProgress = Math.min(progressPercentage + 15, 100); // Animer la progression Animated.timing(progress, { toValue: newProgress / 100, // Convertir le pourcentage en une valeur entre 0 et 1 duration: 200, // Durée de l'animation en millisecondes (ici 200 ms pour une animation rapide) useNativeDriver: false, // Nous n'utilisons pas le driver natif ici car on anime une largeur }).start(); // Mettre à jour l'état du pourcentage setProgressPercentage(newProgress); }; return ( <View style={styles.container}> <Text style={styles.title}>Progression</Text> {/* BARRE DE PROGRESSION */} <View style={styles.progressContainer}> <Animated.View style={[ styles.progressBar, { width: progress.interpolate({ inputRange: [0, 1], outputRange: [0, screenWidth - 40], // Animation de 0 à la largeur de l'écran }), }, ]} /> </View> {/* BOUTON QUI CHANGE */} <TouchableOpacity style={styles.btnGreen} // Le bouton reste vert onPress={handlePress} disabled={progressPercentage === 100} // Désactiver le bouton quand la barre est pleine > <Text style={styles.btnTextWhite}> {progressPercentage === 100 ? 'Complété' : 'Remplir'} {/* Texte du bouton */} </Text> </TouchableOpacity> {/* Affichage du pourcentage */} <Text style={styles.percentageText}>{progressPercentage}%</Text> </View> ); } const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f0f0f0', paddingVertical: 40, alignItems: 'center', gap: 60, }, title: { fontSize: 26, fontWeight: '700', color: '#333', textAlign: 'center', }, progressContainer: { width: screenWidth - 40, height: 30, borderRadius: 10, backgroundColor: '#ccc', borderWidth: 2, overflow: 'hidden', }, progressBar: { height: '100%', backgroundColor: 'green', }, btnGreen: { backgroundColor: 'lightgreen', width: screenWidth - 40, height: 56, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2, }, btnTextWhite: { color: '#fff', fontSize: 20, fontWeight: '600', }, percentageText: { fontSize: 22, fontWeight: 'bold', color: '#333', }, });
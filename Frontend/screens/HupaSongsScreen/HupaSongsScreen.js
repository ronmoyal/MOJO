import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import HebrewHupaSongsScreen from '../HebrewHupaSongsScreen/HebrewHupaSongsScreen';
import LoazitHupaSongsScreen from '../LoazitHupaSongsScreen/LoazitHupaSongsScreen';

const HupaSongsScreen = () => {
    const [currentScreen, setCurrentScreen] = useState('HebrewHupaSongs');

    const handlePressHebrew = () => setCurrentScreen('HebrewHupaSongs');
    const handlePressLoazit = () => setCurrentScreen('LoazitHupaSongs');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>

                <CustomButton 
                    text="לועזית" 
                    onPress={handlePressLoazit}
                    type={currentScreen === 'LoazitHupaSongs' ? 'PROVIDER' : 'PROVIDER_NOTACTIVE'}
                />
                
                <CustomButton
                    text="עברית" 
                    onPress={handlePressHebrew} 
                    type={currentScreen === 'HebrewHupaSongs' ? 'PROVIDER' : 'PROVIDER_NOTACTIVE'}
                />
            </View>
            <View style={styles.showComponent}>
                {currentScreen === 'HebrewHupaSongs' && <HebrewHupaSongsScreen />}
                {currentScreen === 'LoazitHupaSongs' && <LoazitHupaSongsScreen />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // אלין לראש המסך
        alignItems: 'center',
        marginTop:'10%'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%', // תומך ברוחב מלא
        justifyContent: 'center',

    },
    showComponent: {
        flex: 1,
        width: '100%' ,
        alignItems: 'center',
    }
});

export default HupaSongsScreen;
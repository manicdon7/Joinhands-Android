import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { ImageBackground } from 'react-native';
import bgjh from '../assets/bgjh.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signup_Pass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNextPress = () => {
    if (password.trim() !== '' && confirmPassword.trim() !== '' && password === confirmPassword) {
      // Passwords are not empty and match
      // Navigate to the next screen or perform any other action
      // For now, let's log a message
      console.log('Passwords match! Navigating to the next screen.');
    } else {
      // Passwords are either empty or don't match
      // Handle accordingly (show error message, etc.)
      console.log('Passwords do not match or are empty.');
    }
  };

  return (
    <ImageBackground source={bgjh} style={{ width: '100%', height: '100%' }}>
      <StyledView className='h-full'>
        <StyledText className='text-black font-semibold text-3xl pt-60 pl-14'>
          Sign up to
        </StyledText>
        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-24'
          keyboardType="default"
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-8'
          keyboardType="default"
          placeholder='Re-enter Password'
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <StyledView className='pt-5'>
          <TouchableOpacity
            onPress={handleNextPress}
            style={{
              backgroundColor: (password.trim() !== '' && confirmPassword.trim() !== '' && password === confirmPassword) ? '#f87171' : '#ccc',
              borderRadius: 28,
              borderWidth: 1,
              borderColor: '#fca5a5',
              padding: 8,
              alignItems: 'center',
              marginHorizontal: 30,
              marginTop: 20
            }}
            disabled={!(password.trim() !== '' && confirmPassword.trim() !== '' && password === confirmPassword)}
          >
            <StyledText className='text-xl text-white'>Next</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default Signup_Pass;
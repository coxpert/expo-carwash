import React from 'react';
import { ActivityIndicator } from 'react-native';
export const LoadingIcon = ({ isIconAnimating }) => <ActivityIndicator size="large" color="#0000ff" animating={isIconAnimating} />;
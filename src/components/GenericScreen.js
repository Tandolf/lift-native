import React, { Component } from 'react';

const GenericScreen = ({ navigation }) => {
    const { params } = navigation.state;
    const Component = params.component;
    return <Component navigation={navigation} />
};

export default GenericScreen;
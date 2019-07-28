import React, { Component } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
const AlbumDetail = ({ album }) => {

    //bir style a veya değişkene erişirken referans vermeden erişmek için bu şekilde tanımlama yapılabilir. (styles.textContainerStyle yapmaya gerek yok)
    const { title, artist, image, url } = album;
    const {
        thumbnailImageStyle,
        textContainerStyle,
        imageContainerStyle,
        headerTextStyle,
        imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image
                        style={thumbnailImageStyle}
                        source={{ uri: "http://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1509702935/zwu9yjq6wnw1chumkdch.jpg" }}></Image>
                </View>
                <View style={textContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }}></Image>
            </CardSection>
            <CardSection>
                <Button onPress= {()=>{Linking.openURL(url)}}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailImageStyle: {
        width: 50,
        height: 50
    },
    textContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    }
}


export default AlbumDetail;

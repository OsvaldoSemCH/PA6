import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface BtnParams
{
    Type : string;
    Text : string;
}

export default function CalcButton({Type, Text} : BtnParams)
{
    return(
    <>

    </>
    )
}

const Styles = StyleSheet.create
({
    BtnBase:
    {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 30,
    },
    BtnOp:
    {
        backgroundColor: "#2020d0"
    },
    BtnCommand:
    {
        backgroundColor: "#c0c0c0"
    },
    BtnNum:
    {
        backgroundColor: "#f0f0f0"
    }
})
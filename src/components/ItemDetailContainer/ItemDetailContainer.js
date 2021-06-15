import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetailContainerStyle from './ItemDetailContainerStyle';

const useStyle = makeStyles ((theme) => ItemDetailContainerStyle(theme));


export default function ItemDetailContainer () {
    const classes = useStyle();


}
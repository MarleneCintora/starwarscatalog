import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles( theme =>({
    card:{
        borderRadius: '1rem',
        color:'white',
        textAlign: 'left',
        padding: '1.8rem 2rem 1.8rem 3rem',
        margin:'2rem 0',    
        height:'350px',
    },
    img:{
        width:'6rem',
    },
    text:{
        fontSize:'2.3rem',
        fontFamily:'Arial'
    },
    title:{
        fontFamily:'Arial',
        fontSize:'3rem',
    },
    [theme.breakpoints.up('sm')]: {
        card:{
            borderRadius: '0.5rem',
            padding: '1rem 1rem',
            width:'11.5rem',
            height:'12rem',

        },
        img:{
            width:'2.3rem',
        },
        text:{
            fontSize:'1.1rem'
        },
        title:{
            fontSize:'1.5rem',
        },
    },
    [theme.breakpoints.up('md')]: {
        card:{
            padding: '1.3rem 1.3rem',
            width:'14rem',
            height:'15rem'
        },
        img:{
            width:'2.5rem',
        },
        text:{
            fontSize:'1.4rem'
        },
        title:{
            fontSize:'1.8rem',
        },
    },
    [theme.breakpoints.up('lg')]: {
        card:{
            padding: '1.8rem 2rem',
            width:'18rem',
            height:'12rem',

        },
        img:{
            width:'3.7rem',
        },
        text:{
            fontSize:'1.7rem'
        },
        title:{
            fontSize:'2.2rem',
        },
    },
    [theme.breakpoints.up('xl')]: {
        card:{
            padding: '2rem 2.5rem',
            width:'30rem',
            height:'25rem'
        },
        img:{
            width:'5rem',
        },
        text:{
            fontSize:'2.7rem'
        },
        title:{
            fontSize:'3.2rem',
        },
    },
}))

export default function Card(props) {

    const classes = useStyles();
    const {color, episode, name, release, director, producer} = props

    return (
        <div className={classes.card} style={{background:color}}>

            <Typography className={classes.text}>
            {"Episode "+episode}
            </Typography>
            <Typography className={classes.title}>
            {name}
            </Typography>
            <Typography className={classes.release}>
            {release}
            </Typography>
            <Typography className={classes.release}>
            {director}
            </Typography>
            <Typography className={classes.release}>
            {producer}
            </Typography>
        </div>
    )
}
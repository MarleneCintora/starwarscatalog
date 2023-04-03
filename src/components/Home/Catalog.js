import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from './Card'
import { getFilms } from "../../services/Swapi";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 4,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },

    title: {
        fontFamily: 'Arial',
        fontSize: '2.2rem',
        color: '#707070',
    },
    cards: {
        display: 'grid'
    },
    flex: {
        flexGrow: 1,
    },
    [theme.breakpoints.up('sm')]: {
        title: {
            fontSize: '1.6rem',
            textAlign: 'left'
        },
        cards: {
            display: 'flex'
        },
    },
    [theme.breakpoints.up('md')]: {
        title: {
            fontSize: '1.7rem',
        },
    },
    [theme.breakpoints.up('lg')]: {
        title: {
            fontSize: '1.7rem',
        },
    },
    [theme.breakpoints.up('xl')]: {
        title: {
            fontSize: '2.3rem',
        },
    },
}))

export default function Catalog() {

    const [results, setResults] = useState([]);
    const [sortDesc, setSortDesc] = useState(false);

    function handleSortDesc() {
        console.log('click desc')
        const data = [...results].sort((a, b) => (a.episode_id < b.episode_id) ? 1 : (a.episode_id > b.episode_id) ? -1 : 0);
        setResults(data);
        setSortDesc(true);

    }
    function handleSortAsc() {
        console.log('click asc')

        const data = [...results].sort((a, b) => (a.episode_id > b.episode_id) ? 1 : (a.episode_id < b.episode_id) ? -1 : 0);

        setResults(data);
        setSortDesc(false);

    }
    const fetchAllFilms = () => {
        getFilms()
            .then((response) => {
                console.log(response);
                response.results.map((row) => {
                    setResults((data) => [
                        ...data,
                        {
                            episode_number: row.episode_id,
                            movie_name: row.title,
                            release_date: row.release_date,
                            director: row.director,
                            producer: row.producer
                        }
                    ]);
                });
                console.log(results);
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    };

    useEffect(() => {
        fetch("https://swapi.dev/api/films/")
            .then((response) => response.json())
            .then(info => {
                setResults(info.results);
                console.log(results);
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    }, []);

    const classes = useStyles();
    console.log(results);

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={sortDesc == true ? handleSortAsc : handleSortDesc}>{sortDesc == false ? "Sort Asc" : "Sort Desc"}</Button>
            <Grid container spacing={3}>
                {
                    results.map((item, i) => (
                        <Grid key={i} item xs={15} sm={4}>
                            <Paper className={classes.paper}>
                                <Link style={{textDecoration:'none'}} to={`/movies/${item.episode_id}`} state={item} id={item.episode_id}>
                                    <Card episode={item.episode_id} name={item.title} release={item.release_date} director={item.director} producer={item.producer} color="linear-gradient(90deg, #6AA5E3 0%, #6866E9 100%)" />
                                </Link>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </div >
    )
}

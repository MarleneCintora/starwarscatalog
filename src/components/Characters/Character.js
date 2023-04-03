
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PublicIcon from '@mui/icons-material/Public';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
// imgs
import img from "./../../assets/imgs/starwars.jpg"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Character = (props) => {
    const classes = useStyles();

    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);

    const [homeworld, setHomeworld] = useState({
        name: '',
        population: '',
        climate: '',
        gravity: '',
    });

    const [open, setOpen] = useState(false);
    const [openFilms, setOpenFilms] = useState(false);
    const [rowsFilms, setRowsFilms] = useState([])

    const fetchHomeworld = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then(info => {
                console.log(info)
                setHomeworld(info);
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    }
    const fetchFilms = (films) => {
        films.map((film) => (
            fetch(film)
                .then((response) => response.json())
                .then(info => {
                    setRowsFilms(data => [...data, {
                        name: info.title,
                    }])
                })
                .catch((error) => {
                    console.log("error: " + error);
                })
        ))
    }
    const handleClick = () => {
        setOpen(!open);

    };
    const handleClickFilms = () => {
        setOpenFilms(!openFilms);
    };
    useEffect(() => {
        fetchHomeworld(propsData.homeworldUrl);
        fetchFilms(propsData.films); 
    }, [propsData.homeworldUrl]);

    


    return (
        <>
            <Container fixed>

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={0}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={img}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <List
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                className={classes.root}
                                            >
                                                <ListItemButton>
                                                    <ListItemText primary={`Name: ${propsData.name}`} />
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText primary={`Birth date: ${propsData.birth_year}`} />
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText primary={`Gender: ${propsData.gender}`} />
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText primary={`Hair color: ${propsData.hair_color}`} />
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText primary={`Eye color: ${propsData.eye_color}`} />
                                                </ListItemButton>

                                                <ListItem button onClick={handleClick}>
                                                    <ListItemText primary={`Homeworld information:`} />
                                                    {open ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <ListItem button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <PublicIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Name: ${homeworld.name}`} />
                                                        </ListItem>
                                                        <ListItem button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <PublicIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Population: ${homeworld.population}`} />
                                                        </ListItem>
                                                        <ListItem button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <PublicIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Climate: ${homeworld.climate}`} />
                                                        </ListItem>
                                                        <ListItem button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <PublicIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Gravity: ${homeworld.gravity}`} />
                                                        </ListItem>
                                                    </List>
                                                </Collapse>
                                                <ListItem button onClick={handleClickFilms}>
                                                    <ListItemText primary={`Related Films:`} />
                                                    {openFilms ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                                <Collapse in={openFilms} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        {
                                                            rowsFilms.map((film) => (
                                                                <ListItem button className={classes.nested}>
                                                                    <ListItemIcon>
                                                                        <MovieFilterIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={film.name} />

                                                                </ListItem>
                                                            ))}

                                                    </List>
                                                </Collapse>
                                            </List>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Container >
        </>
    );
};
export default Character;
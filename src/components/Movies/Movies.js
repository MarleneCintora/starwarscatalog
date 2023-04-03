
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as useLocation } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Movies = (props) => {
    const classes = useStyles();

    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);
    const [rows, setRows] = useState([])

    const fetchCharacters = (url) => {
        url.map((character) => (
            fetch(character)
                .then((response) => response.json())
                .then(info => {
                    setRows(data => [...data, {
                        name: info.name,
                        url: character,
                        birth_year: info.birth_year,
                        gender: info.gender,
                        hair_color: info.hair_color,
                        eye_color: info.eye_color,
                        homeworldUrl: info.homeworld,
                        films: info.films

                    }])
                })
                .catch((error) => {
                    console.log("error: " + error);
                })
        ))
    }

    useEffect(() => {
        fetchCharacters(propsData.characters);
    }, [propsData.characters]);
   

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
                                            image={require(`./../../assets/imgs/${propsData.episode_id}.jpg`)}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {propsData.title}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary" component="h5">
                                                Episode {propsData.episode_id}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Release date: {propsData.release_date}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Director: {propsData.director}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Producer: {propsData.producer}
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                Characters:
                                            </Typography>
                                            {
                                                rows.map((character) => (

                                                    <Link style={{textDecoration:'none'}} to={`/character/`} state={character}>
                                                        <List>
                                                            <ListItem
                                                                button
                                                            >
                                                                <ListItemText primary={character.name} />
                                                            </ListItem>
                                                        </List>

                                                    </Link>
                                                ))}
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
export default Movies;
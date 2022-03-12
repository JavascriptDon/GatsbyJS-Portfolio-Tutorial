import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 200,
  },
  card: {
    display: "flex",
    marginTop: 20,
    padding: 0,
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags, links }) {
  const styles = useStyles();
  return (
    <Grid item>
      <Card className={styles.card}>
        <div>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}

const projectsData = [
  {
    title: "ToDoList App",
    description:
      "Hit the ground running with pre-made templates for your work To-Do list. Fastest way to get started is to fork the github repo provided below!",
    imageUrl:
      "https://media.istockphoto.com/photos/businessman-hand-working-laptop-on-wooden-desk-in-office-in-morning-picture-id812947940?b=1&k=20&m=812947940&s=170667a&w=0&h=8HeW0gB0caRsPvQrnTREP7rl66znIF7dWd1z9ivNihk=",
    imageAlt: "Project 1 Image",
    tags: ["Javascript", "EJS", "HTML5"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JavascriptDon/ToDoListFreeApp",
      },
      {
        icon: OpenInNewIcon,
        href: "https://sheltered-journey-96531.herokuapp.com/",
      },
    ],
  },
  {
    title: "React-Redux-App",
    description:
      "An app with real-time chat functionality for users to authenticate & authorize themselves using Google API's. React is used along with Redux to Power the Front-End!",
    imageAlt: "Project 2 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    tags: ["React", "Redux", "Firebase" , "Material-UI"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JavascriptDon/react-redux-app-complete",
      },
      {
        icon: OpenInNewIcon,
        href: "https://blissful-tereshkova-989460.netlify.app/",
      },
    ],
  },
  {
    title: "The Gatsby Blog ",
    description:
      "Making a blog has never been simpler. Save time and money by using The Gatsby Blog template! Powered by React and GraphQL, Gatsby gives you everything you need to build and launch your next post.",
    imageAlt: "Project 3 Image",
    imageUrl:
      "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010?b=1&k=20&m=1182641010&s=170667a&w=0&h=8vcHvvDfC7HnyZb24As-jdr7z8tNu8Xr5JJRvHYVXEw=",
    tags: ["Javascript", "SCSS", "GatsbyJS"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JavascriptDon/The-Gatsby-Bootcamp",
      },
      {
        icon: OpenInNewIcon,
        href: "https://hungry-benz-a848b4.netlify.app/",
      },
    ],
  },
];

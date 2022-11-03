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
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.2s ease-in-out",
    },
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
    "&:hover": {
      backgroundColor: "rgb(128,0,128)",
      color: "#ffffff",
    },
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
    title: "Covid 19 Tracker App",
    description:
      "Track the spread of the corona-virus with the Covid-19 Tracker App. A statistical data display and notifier app for the Covid-19 pandemic.",
    imageUrl:
      "https://images.theconversation.com/files/453423/original/file-20220321-14981-gwxv7z.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C2448%2C1224&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    imageAlt: "Project 1 Image",
    tags: [
      "React-Hooks",
      "React-ChartJS-2",
      "ChartJS",
      "Material-UI",
      "React-Leaflet",
      "Sass",
    ],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/hr21don/Covid-19-Tracker-App",
      },
      {
        icon: OpenInNewIcon,
        href: "https://keen-torvalds-cb9049.netlify.app/",
      },
    ],
  },
  {
    title: "Secrets App",
    description:
      "An end-to-end application where a user can sign up and write messages anonymously. Don't keep your secrets, share them anonymously!",
    imageAlt: "Project 2 Image",
    imageUrl:
      "https://media.istockphoto.com/photos/blue-circuitry-digital-lock-on-binary-code-picture-id913017342?k=20&m=913017342&s=612x612&w=0&h=72eO232O65-x8wEBtnNEYNWS-M8xlNfNBfSHUVoKAPw=",
    tags: ["MongoDB", "Express.js", "Node.js", "EJS", "Mongoose", "Passport"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JavascriptDon/Level_Six_Security_Complete",
      },
      {
        icon: OpenInNewIcon,
        href: "https://secrets-live.herokuapp.com/",
      },
    ],
  },
  {
    title: "ToDoList App",
    description:
      "Hit the ground running with pre-made templates for your work To-Do list. Fastest way to get started is to fork the github repo provided below!",
    imageAlt: "Project 3 Image",
    imageUrl:
      "https://media.istockphoto.com/photos/businessman-hand-working-laptop-on-wooden-desk-in-office-in-morning-picture-id812947940?b=1&k=20&m=812947940&s=170667a&w=0&h=8HeW0gB0caRsPvQrnTREP7rl66znIF7dWd1z9ivNihk=",
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
    imageAlt: "Project 4 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    tags: ["React.js", "Redux", "Firebase", "Material-UI"],
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
];

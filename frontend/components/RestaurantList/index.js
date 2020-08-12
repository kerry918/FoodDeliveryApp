/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";

import styles from './index-jss'; 
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import {
  // Card,
  // CardBody,
  CardImg,
  // CardText,
  // CardTitle,
  // Row,
  // Col,
} from "reactstrap";

const QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

function RestaurantList(props) {
  const { loading, error, data } = useQuery(QUERY);
  const { classes } = props;
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (data.restaurants && data.restaurants.length) {
    //searchQuery
    const searchQuery = data.restaurants.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return ( 
        <Grid container spacing={3}>
          {searchQuery.map((res) => (
            <Grid item xs={4} key={res.id}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.yellow}>
                      {res.name[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={res.name}
                  subheader="September 14, 2016"
                />
                {/* <CardMedia
                  className={classes.media}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                /> */}
                <CardImg
                   top={true}
                   style={{ height: 250 }}
                   src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                 />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {res.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        // <Row>
        //   {searchQuery.map((res) => (
        //     <Col xs="6" sm="4" key={res.id}>
        //       <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        //         <CardImg
        //           top={true}
        //           style={{ height: 250 }}
        //           src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
        //         />
        //         <CardBody>
        //           <CardTitle>{res.name}</CardTitle>
        //           <CardText>{res.description}</CardText>
        //         </CardBody>
        //         <div className="card-footer">
        //           <Link
        //             as={`/restaurants/${res.id}`}
        //             href={`/restaurants?id=${res.id}`}
        //           >
        //             <a className="btn btn-primary">View</a>
        //           </Link>
        //         </div>
        //       </Card>
        //     </Col>
        //   ))}

        //   <style jsx global>
        //     {`
        //       a {
        //         color: white;
        //       }
        //       a:link {
        //         text-decoration: none;
        //         color: white;
        //       }
        //       a:hover {
        //         color: white;
        //       }
        //       .card-columns {
        //         column-count: 3;
        //       }
        //     `}
        //   </style>
        // </Row>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h5>Add Restaurants</h5>;
}

export default withStyles(styles)(RestaurantList);
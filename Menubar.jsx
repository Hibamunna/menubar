import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  margin: 'left',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,position:""  ,marginTop:"30px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Meals Kerala"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
      />
<CardContent>
        <Typography variant="body2" color="text.secondary">
         Meals <br/>
         price: 100<br/>
         Time:12:00 to 3:00 pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          A meal is different from a snack in that meals are generally larger, more varied, and more filling than snacks. The type of food that is served or consumed at any given time depends on regional customs. Three main meals are often eaten in the morning, early afternoon, and evening in most modern civilizations.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

{/* 2 */}

    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chicken biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Chicken Biriyani <br/>
         price: 150 <br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>










{/* 3 */}



    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Beef Biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small_2x/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg"
       
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Beef Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Beef Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


{/* 4 */}


<Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mutton biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://png.pngtree.com/png-clipart/20231020/original/pngtree-savory-mutton-biryani-plated-to-perfection-png-image_13388374.png"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Mutton Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

{/* 4 */}



<Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kuzhimandhi"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oky2o28b1rraeglmyjjy"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Kuzhimandhi <br/>
         price: 170 (quater)<br/>
         price: 300 (half)<br/>
         price: 600 (full)<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


{/* 5 */}




<Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Alfam"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyLIB7Jn7qnQj7QteR2pudeSmAtPyZZDlJQ&usqp=CAU"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Alfam <br/>
         1-5 Kg at Rs 392<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>









    </div>
    
  );
}
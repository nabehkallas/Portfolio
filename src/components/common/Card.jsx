import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Modal, Box, Skeleton, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';


// Import slick-carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderImage = ({ url, alt }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!loaded && <CircularProgress />}
      <img
        src={url}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          maxHeight: '70vh',
          objectFit: 'contain',
          display: loaded ? 'block' : 'none'
        }}
      />
    </div>
  );
};

export default function MultiActionAreaCard({ title,Git, description, mainImageUrl, imageUrls,previewUrl }) {
   const [imageLoaded, setImageLoaded] = React.useState(false);

   const Arrow = ({ direction, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction]: 10,
        zIndex: 2,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      {direction === 'left' ? <ArrowBackIosNewIcon fontSize="small" /> : <ArrowForwardIosIcon fontSize="small" />}
    </IconButton>
  );

  const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <Arrow direction="right" />,
      prevArrow: <Arrow direction="left" />,
  };





   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);
    
    // Responsive style for the modal
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '100%', md: '80%', lg: '70%' },
        height: { xs: '100%', md: 'auto' },
        maxHeight: '90vh',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: { xs: 2, md: 4 },
        overflowY: 'auto',
    };

  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={handleOpen}>
        {!imageLoaded && <Skeleton variant="rectangular" height={200} animation="wave" />}
        <CardMedia 
          component="img"
          height="200"
          image={mainImageUrl}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          sx={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component="a"
          href={Git}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="primary"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Slider {...sliderSettings}>
              {imageUrls?.map((url, index) => (
                <div key={index}>
                  <SliderImage url={url} alt={`${title} screenshot ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>
            {previewUrl?<a href={previewUrl}>
              {previewUrl}
            </a>:null}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  </>
  );
}

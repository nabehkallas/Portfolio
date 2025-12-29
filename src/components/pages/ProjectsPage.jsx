import React from 'react';
import { Grid} from '@mui/material'; // Import Grid correctly from @mui/material
import MultiActionAreaCard from '../common/Card'; // Assuming this is your card component


function Projects() {

 

  
  const projectsData = [
   
    {
      id: 1,
      title: 'HabitHub',
      Git: 'https://github.com/nabehkallas/HabitHub',
      description: 'is a high-performance mobile marketplace built with React Native (Expo). It serves as a proof-of-concept for a creator-economy platform, allowing users to discover bloggers, view transparent video pricing, and access exclusive promotional offers. The project demonstrates advanced frontend patterns including Server-State Management, Optimized Search, and Custom Navigation.',
      mainImageUrl: 'HabitHub/HabitHub_Logo.png', // Placeholder image
      imageUrls: ['HabitHub/GIF_1.GIF', 'HabitHub/GIF_2.GIF', 'HabitHub/GIF_3.GIF']
    },
    {
      id: 2,
      title: 'BloggerMarket',
      Git: 'https://github.com/nabehkallas/BloggerMarket',
      description: 'is a high-performance mobile marketplace built with React Native (Expo). It serves as a proof-of-concept for a creator-economy platform, allowing users to discover bloggers, view transparent video pricing, and access exclusive promotional offers. The project demonstrates advanced frontend patterns including Server-State Management, Optimized Search, and Custom Navigation.',
      mainImageUrl: 'BloggerMarket/logo.png', // Placeholder image
      imageUrls: ['GIF_1.gif', 'GIF_2.gif', 'GIF_3.gif']
    }
    , {
      id: 3,
      title: 'Dalelak',
      Git: 'https://github.com/nabehkallas/RealEstate-ReactNative',
      description: 'Dalelak is an application that is both Real estate and car trading app, products in this app are uploaded by admin only, it have a good search filter and user communucation feautere, made with react native for the frontend and laravel for the backend ',
      mainImageUrl: 'Project-1/main-1.jpg', // Placeholder image
      imageUrls: ['Project-1//1.jpg', 'Project-1//2.jpg', 'Project-1//3.jpg', 'Project-1//4.jpg', 'Project-1//5.jpg']
    },
    {
      id: 4,
      title: 'Dalelak Dashboard',
      Git: 'https://github.com/nabehkallas/AdminPanel-Laravel10_New',
      description: 'This is the Laravel Bacjend And Dashboard for Dalelak App',
      mainImageUrl: 'Project-2/main-2.webp', // Placeholder image
      imageUrls: ['Project-2/1.png', 'Project-2/2.png', 'Project-2/3.png', 'Project-2/4.png', 'Project-2/5.png']
    },
  ];
  

  return (

    <div style={{ position: 'relative',margin:100 }}>
      <Grid 
        // 1. Grid container setup
        container 
        // 2. Centering the container content (Horizontally)
        justifyContent="center" 
        // 3. Spacing between rows and columns
        rowSpacing={10} 
        columnSpacing={{ xs: 2, sm: 5, md: 20 }} 
        // Optional: Add padding instead of fixed margin for better responsiveness
        sx={{ px: '5%' }} 
      >
        
        {projectsData.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <MultiActionAreaCard 
              title={project.title}
              Git={project.Git}
              description={project.description}
              mainImageUrl={project.mainImageUrl}
               imageUrls={project.imageUrls}
            />
          </Grid>
        ))}
          
      </Grid>
     
    </div>
  );
}

export default Projects;
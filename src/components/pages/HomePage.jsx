import React from 'react';


function Home() {
  const HeroStyle={
  margin:'40px',
  fontFamily: "'Roboto', sans-serif",
  fontSize: '3rem',
  fontWeight: 700,
  color: '#333333',
  letterSpacing: '0.1em',
  }
  const HeroStyle2={
  margin:'40px',
  fontFamily: "'Roboto', sans-serif",
  fontSize: '1.6rem',
  fontWeight: 400,
  color: '#666666',
  letterSpacing: '0.1em',
  }
  const text1={
        textAlign: 'center',

    // Optional: Set a width and center the entire <p> block on the page
    width: '70%',
    margin: 'auto auto 100px auto', // 20px top/bottom, auto left/right
    padding: '10px',
    
  }

  const [isGmailHovered, setIsGmailHovered] = React.useState(false);
  const [isGithubHovered, setIsGithubHovered] = React.useState(false);

  return (
    <div>
    <p style={HeroStyle}>NABEH KALLAS</p>
    <p style={HeroStyle2}>Full-Stack Developer</p>
    <p style={text1}> Dynamic IT Engineer with a comprehensive skill set
       spanning HTML, JavaScript, PHP, C#, and SQL, proficient in
        modern frameworks like React, React Native, and Laravel. Experienced
         in both frontend and backend development for web and mobile applications.</p>
        
         <div style={{textAlign:'center', marginTop: '20px',position:'relative',bottom:'50px' }}>
          <a href="mailto:nabehkalas777@gmail.com" 
             style={{textDecoration: 'none', color: isGmailHovered ? '#007bff' : '#666666', margin: '0 10px', fontSize: '1.2rem'}}
             onMouseEnter={() => setIsGmailHovered(true)}
             onMouseLeave={() => setIsGmailHovered(false)}
          >Gmail</a>
          <a href="https://github.com/nabehkallas" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{textDecoration: 'none', color: isGithubHovered ? '#007bff' : '#666666', margin: '0 10px', fontSize: '1.2rem'}}
             onMouseEnter={() => setIsGithubHovered(true)}
             onMouseLeave={() => setIsGithubHovered(false)}
          >GitHub</a>
          </div>
    </div>
  );
}

export default Home;
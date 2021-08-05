import imgBackground from './img/crumpled-white-paperboard.jpg';

export const AppStyle = (theme) => ({
    container:{
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        backgroundImage: `url(${imgBackground})`,
        backgroundAttachment: "fixed",
        backgroundSize: "contained",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      },
    
});
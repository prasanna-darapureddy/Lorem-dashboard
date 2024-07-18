export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: {xs:'column', sm:'row'},
        justifyContent: 'space-between',
        padding:'20px',
        boxSizing: 'border-box',
        height:'100vh',
        gap:2
    },

    leftContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    },
    logo:{
        alignSelf: 'flex-start',
        fontStyle:'Poppins',
        fontSize:'20px',
        fontWeight:600,
        display:{xs:'none', md:'block'}
    },
    cardContainer:{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs:'20px', sm:'40px'},
        alignSelf: 'center',
        gap:5,
        borderRadius:'20px',
        paddingBottom: {xs:'20px', md:'100px'},
        width:{md:'100%',},    
    },

    imageContainer:{  
        display:{xs:'none', md:'block'}
    },
    signUpImg:{
        height:'100%',
        width:'100%',
    },
    lorem:{
        color:'#0089ED',
    },
    signUpHeading:{
        fontWeight:500,
        fontSize:{xs: '35px', md:'55px'}
    },
    formContainer:{
        display:'flex',
        flexDirection: 'column',
        gap:5
    },
    inputContainer:{
        display:'flex',
        flexDirection: 'column',
        gap:1
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'column',   
        gap:1,     
    },
    haveAccountContainer:{
        display: {xs:'none', md:'flex'},
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    signInBtn:{
        textTransform: 'capitalize',
    },
    mobileImgContainer:{
        display:{xs:'block', md:'none'}
    },
    mobileImgContent:{
        display:'flex',
        flexDirection: 'column',
        gap:3
    },
    mobileHaveAccountContainer:{
        display:{xs:'flex', md:'none'},
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgotPassword:{
        alignSelf:'flex-end',
        color:'#0089ED',
        fontSize:'12px'
    }

}
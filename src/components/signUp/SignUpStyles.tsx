export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: {xs:'column', sm:'row'},
        justifyContent: 'center',
        padding:'30px',
        boxSizing: 'border-box',
        height:'100vh',
    },
    contentContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:{md: '50%'},
        gap:{md:10},
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
        alignSelf: {xs:'center',},
        gap:5,
        borderRadius:'20px',
        paddingBottom: {xs:'20px', md:'120px'},
        width:{md:'100%',},
        // height:{md:'300px',}
    },

    imageContainer:{    
        display:{xs:'none', md:'flex'},
        width:{md:'50%'},
        // backgroundColor:'#000',
    
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
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap:3
    },
    mobileHaveAccountContainer:{
        display:{xs:'flex', md:'none'},
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    otpInput:{
        backgroundColor:'#ebf6fe',
        borderRadius:'20px',
        padding:'15px',
        width:'70px',
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
          },
          "& input[type=number]": {
            MozAppearance: "textfield",
        },
        textAlign:'center',
        fontSize:'20px',
    },
    inputsContainer:{
        display:'flex',
        alignItems: 'center',
        gap:2
    },
    textField:{
        width:'100%',
    }

}
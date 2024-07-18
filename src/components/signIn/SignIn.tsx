import { Box, Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Lock, Person } from '@mui/icons-material'
import { styles } from './SignInStyles'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup';

function SignIn() {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string()      
        .matches(/^[a-z0-9]/, '*Enter a valid email with lowercase letters')
        .matches(/@[a-z]/, '*Enter a valid email with @ followed by lowercase letters')
        .matches(/.[a-z]{2,4}$/, '*Enter a valid email with . followed by atleast two lowercase letters')  
        .email('*Invalid email')          
        .required('*Email is required'),
        password: Yup.string()
        .min(8, '*Password must be at least 8 characters')
        .matches(/(?=.*[A-Z])\w+/, "*Password should contain at least one uppercase character")
        .matches(/(?=.*[a-z])\w+/, "*Password should contain at least one lowercase character")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "*Password should contain at least one special character")
        .matches(/\d/, "*Password should contain at least one number")              
        .required('*Password is required'),
    });

  return (
    <>
        <Box sx={styles.bgContainer}>
            <Typography sx={styles.logo}>Logo</Typography>
            <Box sx={styles.mobileImgContent}>
            <Box sx={styles.mobileImgContainer}>
                <Box component={'img'} src='/SignIn1.svg' alt='Sign In' sx={styles.signUpImg}/>
            </Box>
            <Box sx={styles.leftContainer}>                
                <Paper elevation={2} sx={styles.cardContainer}>
                    <Box>
                        <Box>Welcome to <Box component={'span'} sx={styles.lorem}>LOREM</Box></Box>
                        <Typography sx={styles.signUpHeading}>Sign In</Typography>
                    </Box>
                    <Formik
                        initialValues={{ email:'', password:'' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            alert(values)
                        }}
                    >
                    {props => (
                    <Box component={'form'} sx={styles.formContainer} onSubmit={props.handleSubmit}>
                        <Box sx={styles.inputContainer}>
                            <Box component={'label'}>Enter your username or email adress</Box>
                            <TextField 
                                label='username or email adress'
                                name='email'
                                variant="outlined" 
                                type='text'
                                id="email"                                                                                                                                
                                onChange={props.handleChange}                            
                                onBlur={props.handleBlur}
                                onFocus={props.handleBlur}
                                value={props.values.email}
                                error={props.touched.email && Boolean(props.errors.email)}
                                helperText={props.touched.email && props.errors.email}  
                                InputProps= {{ endAdornment:  
                                    <InputAdornment position="end">
                                        <Person/>    
                                    </InputAdornment>
                                }}    
                            />
                        </Box>
                        <Box sx={styles.inputContainer}>
                            <Box component={'label'}>Enter your Password</Box>
                            <TextField 
                                label='Password'
                                name='password'
                                onChange={props.handleChange}                            
                                onBlur={props.handleBlur}
                                onFocus={props.handleBlur}
                                value={props.values.password}
                                error={props.touched.password && Boolean(props.errors.password)}
                                helperText={props.touched.password && props.errors.password} 
                                InputProps= {{ endAdornment:  
                                    <InputAdornment position="end">
                                        <Lock/>    
                                    </InputAdornment>
                                }}    
                            />
                            <Box component={'span'} sx={styles.forgotPassword}>Forgot Password</Box>
                        </Box>
                       
                        <Box sx={styles.buttonContainer}>
                            <Button variant='contained' sx={styles.signInBtn} type={'submit'}>Sign in</Button>
                            <Box sx={styles.haveAccountContainer}>
                                <Typography>No Account?</Typography>
                                <Button sx={styles.signInBtn} onClick={() => navigate('/')}>Register</Button>
                            </Box>
                        </Box>

                        <Box sx={styles.mobileHaveAccountContainer}>
                            <Typography>No Account?</Typography>
                            <Button sx={styles.signInBtn} onClick={() => navigate('/')}>Register</Button>
                        </Box>
                    </Box>
                    )}
                    </Formik>
                </Paper>
            </Box>
            </Box>
            <Box sx={styles.imageContainer}>
                <Box component={'img'} src='/SignIn1.svg' alt='Sign in' sx={styles.signUpImg}/>
            </Box>
        </Box>
    </>
  )
}
export default SignIn
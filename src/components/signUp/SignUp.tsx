import { Box, Button, InputAdornment, InputBase, Paper, TextField, Typography } from '@mui/material'
import { styles } from './SignUpStyles'
import { Email, Lock } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface IState{
    isEmailSubmitted: boolean
}

function SignUp() {
    const navigate = useNavigate()
    const [isEmailSubmited, setisEmailSubmited] = useState<IState['isEmailSubmitted']>(false)
    const [isVerified, setIsVerified] = useState<IState['isEmailSubmitted']>(false)
    
  return (
    <>
        {isEmailSubmited ? 
            <>
            {isVerified ? 
                <Box sx={styles.bgContainer}>
                <Box sx={styles.contentContainer}>
                    <Typography sx={styles.logo}>Logo</Typography>
                    <Box sx={styles.mobileImgContent}>
                        <Box sx={styles.mobileImgContainer}>
                            <Box component={'img'} src='/signup3.svg' alt='Sign Up' sx={styles.signUpImg}/>
                        </Box>                        
                        <Paper elevation={2} sx={styles.cardContainer}>
                            <Box>
                                <Box>Welcome to <Box component={'span'} sx={styles.lorem}>LOREM</Box></Box>
                                <Typography sx={styles.signUpHeading}>Sign Up</Typography>
                            </Box>
                            <Box sx={styles.formContainer}>
                                <Box sx={styles.inputContainer}>
                                    <Box component={'label'}>Enter your Password</Box>
                                    <TextField 
                                        label='Enter Password'
                                        name='password'
                                        InputProps= {{ endAdornment:  
                                            <InputAdornment position="end">
                                                <Lock/>    
                                            </InputAdornment>
                                        }}    
                                        sx={styles.textField}
                                    />                                
                                </Box>
                                <Box sx={styles.inputContainer}>
                                    <Box component={'label'}>Confirm your Password</Box>
                                    <TextField 
                                        label='confirm Password'
                                        name='password'
                                        InputProps= {{ endAdornment:  
                                            <InputAdornment position="end">
                                                <Lock/>    
                                            </InputAdornment>
                                        }}    
                                    />                                
                                </Box>
                                <Box sx={styles.buttonContainer}>
                                    <Button variant='contained' sx={styles.signInBtn} onClick={() => navigate('/signin')}>Save & Continue</Button>                                    
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={styles.imageContainer}>
                    <Box component={'img'} src='/signup3.svg' alt='Sign Up' sx={styles.signUpImg}/>
                </Box>
            </Box> 
            :            
            <Box sx={styles.bgContainer}>
                <Box sx={styles.contentContainer}>
                    <Typography sx={styles.logo}>Logo</Typography>
                    <Box sx={styles.mobileImgContent}>
                        <Box sx={styles.mobileImgContainer}>
                            <Box component={'img'} src='/signup2.svg' alt='Sign Up' sx={styles.signUpImg}/>
                        </Box>                        
                        <Paper elevation={2} sx={styles.cardContainer}>
                            <Box>
                                <Box>Welcome to <Box component={'span'} sx={styles.lorem}>LOREM</Box></Box>
                                <Typography sx={styles.signUpHeading}>Sign Up</Typography>
                            </Box>
                            <Box sx={styles.formContainer}>
                                <Box sx={styles.inputContainer}>
                                    <Box component={'label'}>Enter OTP received to your email id</Box>
                                    <Box sx={styles.inputsContainer}>
                                        {[1,2,3,4].map((num) => (
                                           <InputBase key ={num} type='number' sx={styles.otpInput}/>
                                        ))}                                      
                                    </Box>                                    
                                </Box>
                                <Box sx={styles.buttonContainer}>
                                    <Button variant='contained' sx={styles.signInBtn} onClick={() => setIsVerified(true)}>Verify</Button>
                                    <Box sx={styles.haveAccountContainer}>
                                        <Typography>Did not receive yet?</Typography>
                                        <Button sx={styles.signInBtn}>Resend OTP</Button>
                                    </Box>
                                </Box>
                                <Box sx={styles.mobileHaveAccountContainer}>
                                    <Typography>Did not receive yet?</Typography>
                                    <Button sx={styles.signInBtn}>Resend OTP</Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={styles.imageContainer}>
                    <Box component={'img'} src='/signup2.svg' alt='Sign Up' sx={styles.signUpImg}/>
                </Box>
            </Box>
            }
            </>
            :
            <Box sx={styles.bgContainer}>
                <Box sx={styles.contentContainer}>
                    <Typography sx={styles.logo}>Logo</Typography>
                    <Box sx={styles.mobileImgContent}>
                        <Box sx={styles.mobileImgContainer}>
                            <Box component={'img'} src='/Signup1.svg' alt='Sign Up' sx={styles.signUpImg}/>
                        </Box>                        
                        <Paper elevation={2} sx={styles.cardContainer}>
                            <Box>
                                <Box>Welcome to <Box component={'span'} sx={styles.lorem}>LOREM</Box></Box>
                                <Typography sx={styles.signUpHeading}>Sign Up</Typography>
                            </Box>
                            <Box sx={styles.formContainer}>
                                <Box sx={styles.inputContainer}>
                                    <Box component={'label'}>Enter your email address</Box>
                                    <TextField 
                                        label='Email address'
                                        placeholder="Enter your mail address"
                                        multiline
                                        name='email'
                                        InputProps= {{ endAdornment:  
                                            <InputAdornment position="end">
                                                <Email/>    
                                            </InputAdornment>
                                        }}    
                                    />
                                </Box>
                                <Box sx={styles.buttonContainer}>
                                    <Button variant='contained' sx={styles.signInBtn} onClick={() => setisEmailSubmited(true)}>Register</Button>
                                    <Box sx={styles.haveAccountContainer}>
                                        <Typography>Already have an Account?</Typography>
                                        <Button sx={styles.signInBtn} onClick={() => navigate('/signin')}>Sign In</Button>
                                    </Box>
                                </Box>

                                <Box sx={styles.mobileHaveAccountContainer}>
                                    <Typography>Already have an Account?</Typography>
                                    <Button sx={styles.signInBtn} onClick={() => navigate('/signin')}>Sign In</Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={styles.imageContainer}>
                    <Box component={'img'} src='/Signup1.svg' alt='Sign Up' sx={styles.signUpImg}/>
                </Box>
            </Box>
        }
    </>
  )
}

export default SignUp
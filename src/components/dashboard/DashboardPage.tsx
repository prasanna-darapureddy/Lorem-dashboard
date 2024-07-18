import { Box, Button, Checkbox, Grid, IconButton, InputAdornment, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { styles } from './DashboardStyles'
import { RiPieChart2Fill } from "react-icons/ri";
import { AccountBalanceWallet, Apps, ArrowDropDown, Dashboard, Delete, Login, MoreHoriz, Notifications, People, PersonAddAlt1, Search } from '@mui/icons-material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const rows = [
    {
        id: 1,
        invoiceId: '#AHGA68',
        customer: 'Jacob Marcus',
        date:'23/09/2022',
        paidAmount:'$100',
        actions: '',
    },
    {
        id: 2,
        invoiceId: '#AHGA68',
        customer: 'Jacob Marcus',
        date:'23/09/2022',
        paidAmount:'$100',
        actions: '',
    },
    {
        id: 3,
        invoiceId: '#AHGA68',
        customer: 'Jacob Marcus',
        date:'23/09/2022',
        paidAmount:'$100',
        actions: '',
    },
    {
        id: 4,
        invoiceId: '#AHGA68',
        customer: 'Jacob Marcus',
        date:'23/09/2022',
        paidAmount:'$100',
        actions: '',
    },
    {
        id: 5,
        invoiceId: '#AHGA68',
        customer: 'Jacob Marcus',
        date:'23/09/2022',
        paidAmount:'$100',
        actions: '',
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function DashboardPage() {
    const [notification, setNotification] = useState<null | HTMLElement>(null);
    const [profile, setProfile] = useState<null | HTMLElement>(null);
    const [deleteRow, setDeleteRow] = useState<null | HTMLElement>(null);
    const navigate = useNavigate()

    const notificationOpen = Boolean(notification);
    const profileOpen = Boolean(profile);
    const moreOpen = Boolean(deleteRow);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setNotification(event.currentTarget);      
    };

    const handleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProfile(event.currentTarget)
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDeleteRow(event.currentTarget)
    }

    const handleClose = () => {
      setNotification(null);      
    };

    const handleProfileClose = () => {
        setProfile(null)
    }

    const handleDeleteClose = () => {
        setDeleteRow(null)
    };

  return (

        <Box sx={styles.bgContainer}>
            <Box sx={styles.tabContainer}>
                <Box sx={styles.tabTopContainer}>
                    <Box sx={styles.welcomeContainer}>
                        <Typography sx={styles.welcome}>Welcome</Typography>
                        <Typography >to Lorem</Typography>
                    </Box>
                    <Box sx={styles.dashboardContainer}>
                        <Dashboard />
                        <Typography >Dashboard</Typography>
                    </Box>
                </Box>
                <Box sx={styles.tabBottomContainer}>
                    <Button variant='contained' startIcon={<Login sx={styles.loginIcon}/>} sx={styles.logoutBtn} onClick={() => navigate('/signin')}>Logout</Button>
                    <Box sx={styles.loremContainer}>
                        <Apps />
                        <Typography sx={styles.loremText}>Lorem ipsum dolor sit amet</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={styles.overViewContainer}>
                <Box sx={styles.overViewHeaders}>
                    <Typography sx={styles.overviewHeading}>Overview</Typography>
                    <Box sx={styles.infoContainer}>
                        <TextField type='text' placeholder='Search' sx={styles.searchInput}
                            InputProps= {{ endAdornment:  
                                (<InputAdornment position="end">
                                    <IconButton
                                    edge="end"
                                    >
                                    <Search sx={styles.searchIcon}/>            
                                    </IconButton>
                                </InputAdornment>) 
                            }}
                        />
                        <Button
                            id="basic-button"
                            aria-controls={notificationOpen ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={notificationOpen ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Notifications sx={styles.notificationIcon}/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={notification}
                            open={notificationOpen}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={styles.menuCard}
                        >
                            <MenuItem onClick={handleClose} sx={styles.eachMenuItem}>
                                <Box component={'img'} src={'/Avatar.svg'} alt='profile' />
                                <Box sx={styles.profileHead}>                                    
                                    <Typography>You received a payment of 100$ from Dennis Nerdry</Typography>
                                    <Typography sx={styles.lastDay}>Last Wednesday at 9:42 AM</Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={styles.eachMenuItem}>
                                <Box component={'img'} src={'/Avatar.svg'} alt='profile' />
                                <Box sx={styles.profileHead}>                                    
                                    <Typography>You received a payment of 100$ from Dennis Nerdry</Typography>
                                    <Typography sx={styles.lastDay}>Last Wednesday at 9:42 AM</Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={styles.eachMenuItem}>
                                <Box component={'img'} src={'/Avatar.svg'} alt='profile' />
                                <Box sx={styles.profileHead}>                                    
                                    <Typography>You received a payment of 100$ from Dennis Nerdry</Typography>
                                    <Typography sx={styles.lastDay}>Last Wednesday at 9:42 AM</Typography>
                                </Box>
                            </MenuItem>
                        </Menu>
    
                        
                        <Box sx={styles.adminContianer}>
                            <Box component={'img'} src={'/Profile icon.svg'} alt='profile'/>
                            <Typography >Admin </Typography>
                            <Button
                                id="basic-button"
                                aria-controls={profileOpen ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={profileOpen ? 'true' : undefined}
                                onClick={handleProfile}
                            >
                                <ArrowDropDown sx={styles.dropdown}/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={profile}
                                open={profileOpen}
                                onClose={handleProfileClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                sx={styles.menuCard}
                            >
                                <MenuItem onClick={handleClose} sx={styles.profilePopup}>
                                    <Box component={'img'} src={'/Profile icon.svg'} alt='profile'/>
                                    <Typography>Daniel</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Button variant='contained' startIcon={<Login sx={styles.loginIcon}/>} sx={styles.logoutBtn} onClick={() => navigate('/signin')}>Logout</Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Item  sx={styles.eachCard}>
                            <Box sx={styles.iconContainer}>
                                <AccountBalanceWallet sx={styles.icon}/>
                            </Box>
                            <Box sx={styles.cardContent}>
                                <Typography variant='h6' sx={styles.cardHeading}>$374k</Typography>
                                <Typography>Total Revenue</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Item  sx={styles.eachCard}>
                            <Box sx={styles.iconContainer}>
                                <RiPieChart2Fill style = {styles.reactIcon}/>
                            </Box>
                            <Box sx={styles.cardContent}>
                                <Typography variant='h6' sx={styles.cardHeading}>$175</Typography>
                                <Typography>Last month Revenue</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Item  sx={styles.eachCard}>
                            <Box sx={styles.iconContainer}>
                                <People sx={styles.icon}/>
                            </Box>
                            <Box sx={styles.cardContent}>
                                <Typography variant='h6' sx={styles.cardHeading}>102</Typography>
                                <Typography>Total Customers</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Item  sx={styles.eachCard}>
                            <Box sx={styles.iconContainer}>
                                <PersonAddAlt1 sx={styles.icon}/>
                            </Box>
                            <Box sx={styles.cardContent}>
                                <Typography variant='h6' sx={styles.cardHeading}>16</Typography>
                                <Typography>Last month customers</Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>                

                <Box>
                    <TableContainer component={Paper} sx={styles.tableContainer} >
                        <Table>
                            <TableHead>
                            <TableRow sx={styles.tableRow}>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell sx={styles.tableHeaders}>Invoice Id</TableCell>
                                <TableCell align="center" sx={styles.tableHeaders}>Customer</TableCell>
                                <TableCell align="center" sx={styles.tableHeaders}>Date</TableCell>
                                <TableCell align="center" sx={styles.tableHeaders}>Paid Amount</TableCell>
                                <TableCell align="center" sx={styles.tableHeaders}>Actions</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={styles.tableCellContent}
                                >
                                <TableCell><Checkbox /></TableCell>
                                <TableCell component="th" scope="row">{row.invoiceId}</TableCell>
                                <TableCell align="center">{row.customer}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.paidAmount}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        id="basic-button"
                                        aria-controls={moreOpen ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={moreOpen ? 'true' : undefined}
                                        onClick={handleDelete}
                                    >
                                        <MoreHoriz sx={styles.more}/>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={deleteRow}
                                        open={moreOpen}
                                        onClose={handleDeleteClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                        sx={styles.menuCard}
                                    >
                                        <MenuItem onClick={handleDeleteClose} sx={styles.deleteCard}>
                                            <Delete/> Delete
                                        </MenuItem>
                                    </Menu>  
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>

  )
}
export default DashboardPage
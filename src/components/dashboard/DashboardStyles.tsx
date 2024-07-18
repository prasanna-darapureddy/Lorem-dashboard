export const styles = {
    bgContainer: {
        backgroundColor: '#F9FAFC',
        backgroundSize: 'cover',
        display: 'flex',
        gap: 3
    },
    tabContainer: {
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: '30px',
        boxSizing: 'border-box',
        width: '15%',
    },
    overViewContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: '100%',
        gap: 5,
        boxSizing: 'border-box'
    },
    welcomeContainer: {
        borderBottom: '1px solid #0089ED',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    welcome: {
        color: '#0089ED'
    },
    dashboardContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: '#0089ED',
    },
    tabTopContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    tabBottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    loremContainer: {
        backgroundImage: 'linear-gradient(to bottom right, #0696ff, #01d8f7)',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
    },
    loginIcon: {
        color: '#fff',
    },
    logoutBtn: {
        textTransform: 'capitalize',
    },
    loremText: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    overViewHeaders: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4
    },
    searchInput: {
        width: { xs: '100%', sm: '200px', md: '300px', lg: '400px' },
        borderRadius: '15px',
        "&.MuiTextField-root": { backgroundColor: '#eaf3fb', "&::placeholder": { color: '#0696ff', opacity: 1 } },
        "& fieldset": { display: 'none' },
        "& input": { color: '#0696ff', "&::placeholder": { color: '#0696ff', opacity: 1 } }
    },
    notificationIcon: {
        color: '#0696ff',
        cursor: 'pointer',
        fontSize: '28px',
    },
    adminContianer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
    },
    dropdown: {
        color: '#0696ff',
    },
    overviewHeading: {
        fontSize: '30px',
        fontFamily: 'Poppin',
        fontWeight: 600,
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: "space-between",
        alignItems: 'center',
        gap: 3,
        width: '100%',
    },
    eachCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '15px',
        gap: 3,
    },
    iconContainer: {
        borderRadius: '50px',
        backgroundColor: '#d9eefd',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: '#0696ff',
        fontSize: '30px'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100px',
        textAlign: 'left',
    },
    cardHeading: {
        fontWeight: 600,
        fontSize: '35px',
    },
    tableHeaders: {
        fontWeight: 900,
        fontSize: '16px',
    },
    menuCard: {
        padding: '20px',
    },
    eachMenuItem: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
        gap: 2,
        borderBottom: '1px solid #c8c8c8'
    },
    profileHead: {
        display: 'flex',
        flexDirection: 'column',

    },
    lastDay: {
        color: '#c8c8c8',
    },
    profilePopup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #0696ff',
        padding: '20px',
        gap: 2
    },
    tableContainer: {
        width: { xs: '90%', sm: '100%' },
        overflowX: { xs: 'scroll', md: 'visible' },
        visibility: { xs: 'scroll', md: 'visible' },
    },
    tableCellContent: {
        '&:last-child td, &:last-child th': { border: 0 }
    },
    tableRow: {

    },
    deleteCard: {
        color: '#f15334'
    },
    more: {
        color: '#000',
    },
    searchIcon: {
        fontSize: '25px',
        color: '#0089ED'
    },
    reactIcon: {
        color: '#0089ED', fontSize: '30px'
    }
}
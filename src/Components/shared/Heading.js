import Box from '@mui/material/Box'
import './style.css'

const Heading = ({ children }) => {
    return (
        <Box sx={{ py: 2 }}>
            <div className="heading">{children}</div>
        </Box>
    );
}

export default Heading;
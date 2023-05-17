import { Typography } from "@mui/material";
export const Minesweeper = () => {
    return (
        <div>
            <Typography 
            variant='h2'
            textAlign={'center'}
            >
            Minesweeper
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/underConstruction2.png' />
            </div>
        </div>
    );
}
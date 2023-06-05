import { Typography } from "@mui/material";
export const Minesweeper = () => {
    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px'}}>
            <Typography 
            variant='h1'
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
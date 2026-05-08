import { Typography } from "@mui/material";
import { SmartImage } from "../shared/components/SmartImage";

export const Cat = () => {

    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px', color: 'white'}}>
            <Typography 
                variant='h1'
                textAlign={'center'}
                className='pageTitle pageTitleCompact'
                style={{marginBottom: '0', lineHeight: '1'}}
            >
                Cat
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SmartImage
                    style={{
                        transform: 'scale(.7)', 
                        display: 'block', 
                        position: 'relative', 
                        top: '-150px',
                        marginBottom: '-300px'
                        }} 
                    alt="George, an orange cat, looking at you from behind some leaves."
                    title="Cat"
                    src='images/georgeBehindPlant.jpg' 
                />
            </div>
            <Typography
                variant="h5"
                textAlign={'center'}
            >
                Cat
            </Typography>
        </div>
    );
}

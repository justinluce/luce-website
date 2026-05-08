import { useState } from 'react';
import './Components.css';

export const SmartImage = ({
    alt,
    id,
    className = '',
    imgClassName = '',
    wrapperClassName = '',
    style,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    return (
        <span
            id={id}
            className={`smartImage ${loaded ? 'smartImageLoaded' : ''} ${failed ? 'smartImageFailed' : ''} ${className} ${wrapperClassName}`.trim()}
            style={style}
        >
            <img
                {...props}
                alt={alt}
                className={imgClassName}
                decoding={props.decoding ?? 'async'}
                onLoad={(event) => {
                    setLoaded(true);
                    props.onLoad?.(event);
                }}
                onError={(event) => {
                    setFailed(true);
                    props.onError?.(event);
                }}
            />
        </span>
    );
};

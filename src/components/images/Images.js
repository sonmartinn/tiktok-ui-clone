import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';
// Accessing element.ref was removed in React 19. ref is now a regular prop.
// It will be removed from the JSX Element type in a future release.
// So no need to use forwardRef anymore
// Source: https://react.dev/blog/2024/12/05/react-19#improvements-in-react-19
const Image = ({ src, alt, className, fallback: customFallback = images.noImage, ref, ...props }) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;

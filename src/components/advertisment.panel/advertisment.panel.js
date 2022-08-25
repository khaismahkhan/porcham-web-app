import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import { IsMobileWidth } from '../utils/utils';
import clsx from 'clsx';
const AdvertismentPanel = (props) => {
    const { image, titleHeading, title, description, buttonTitle, width, height, bannerHeight, textAlignment, textColor } = props
    const mobileWidth = IsMobileWidth()
    return (
        <div className={clsx(!mobileWidth && "d-flex align-items-center pl-5", mobileWidth && "d-flex align-items-center pl-3")}
            style={{
                backgroundImage: image ? `url(${image})` : "url(https://moathorneby.com/photography-blog/images/Brighton-fashion-photographer-hazydays-1.jpg)",
                backgroundSize: width && height ? `${width} ${height}` : width ? `${width} 100%` : height ? `100% ${height}` : "100% 100%",
                backgroundRepeat: "no-repeat",
                height: bannerHeight ? bannerHeight : "80vh",
                justifyContent: textAlignment ? textAlignment : ""
            }}
        >
            <Box className={clsx(!mobileWidth && "w-50", mobileWidth && "w-100")} color="primary" style={{ color: textColor ? textColor : "rgb(68 0 108)" }}>

                <Typography variant={clsx(!mobileWidth && "h5", mobileWidth && "h6")} gutterBottom component="div" className="text-ellipsis-clamp-1 font-weight-bold text-uppercase h-auto">
                    {titleHeading ? titleHeading : "new collection"}
                </Typography>
                <Typography variant={clsx(!mobileWidth && "h2", mobileWidth && "h4")} gutterBottom component="div" className="text-ellipsis-clamp-3 font-weight-bolder text-capitalize">
                    {title ? title : "find your new favourite clothing"}
                </Typography>
                <Typography variant={clsx(!mobileWidth && "h5", mobileWidth && "h6")} gutterBottom component="div" className="text-ellipsis-clamp-1 led font-weight-light h-auto">
                    {description ? description : "Here to bring your life style to the next level."}
                </Typography>
                <Typography>
                    <Button variant="contained" className={clsx(!mobileWidth && "font-weight-bold p-3 pl-5 pr-5 text-uppercase", mobileWidth && "font-weight-bold p-2 pl-3 pr-3 text-uppercase")}
                       
                    >{buttonTitle ? buttonTitle : "View collection"}
                    </Button>
                </Typography>
            </Box>
        </div>
    )
}

export default AdvertismentPanel
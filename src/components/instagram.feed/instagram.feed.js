import './instagram.feed.scss';
import React from 'react'
import { Typography } from '@mui/material';
const InstagramFeed = (props) => {
    const { backgroundimage, backgroundcolor, message, brandtag, logoJustifyContent, zappLogoHeight, zappLogoWidth } = props
    return (
        <div
            className="w-100 h-100 "
            id="instagram-feed"
            style={{
                backgroundImage: backgroundimage ? `url(${backgroundimage})` : "",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: backgroundcolor ? backgroundcolor : ""
            }}
        >
            <div className="d-flex justify-content-end p-2 h-25 w-100">
                {
                    brandtag ?
                        <div className="h-100 w-25">
                            <img className="w-100 h-100" src={brandtag} />
                        </div>
                        :
                        null
                }
            </div>
            <div className="d-flex align-items-center text-center justify-content-center p-1 w-100 h-50">
                <Typography variant="body2" component="div" className="text-uppercase text-ellipsis-clamp-3 text-white ">
                    {message ? message : null}
                </Typography>
            </div>
            <div className="d-flex pb-1 p-1 h-20 w-100"
                style={{ justifyContent: logoJustifyContent ? logoJustifyContent : "center" }}
            >
                <div style={{ width: zappLogoWidth ? zappLogoWidth : "20%", height: zappLogoHeight ? zappLogoHeight : "100%", }}>
                    <img src="https://zapp.world/assets/images/zapp-logo.svg" className="h-100 w-100" />
                </div>
            </div>
        </div>
    )
}

export default InstagramFeed

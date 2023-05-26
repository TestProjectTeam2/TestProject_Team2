import React from "react";
import { Helmet } from 'react-helmet';


export default function Error() {
    return(
        <>
            <Helmet>
                <title>ERROR</title>
            </Helmet>
            <h1>Page not found</h1>
        </>
    );
}
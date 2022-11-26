import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import '../styles/globals.css'
import Loading from "../Components/Loading/Loading";



function MyApp({Component, pageProps}) {
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 5990)
    }, []);

    
    return (
        <>{loading ?
            <Loading/>
            : <Layout>
                <Component {...pageProps} />
            </Layout>
        }

        </>

    )

}

export default MyApp

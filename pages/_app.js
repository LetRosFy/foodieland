import React from 'react';
import Layout from "../Components/Layout/Layout";
import '../styles/globals.css'
import Loading from "../Components/Loading/Loading";



function MyApp({Component, pageProps}) {
    const [loader, setLoader] = React.useState(true)


    React.useEffect(() => {
        // setTimeout(() =>  setLoader(false), 3000);
        setLoader(false)

    }, [])
    return (
        <>{!loader ?

            <Layout>
                <Component {...pageProps} />
            </Layout>

         : <Loading/>
        }

        </>

    )

}

export default MyApp

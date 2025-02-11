'use client'
import { useState } from "react";
import Favicon from "react-favicon";

const App = () => {


    const [faviconUrl, setFaviconUrl] = useState(
        "https://cdn-icons-png.flaticon.com/512/0/74.png"
    );

    const toggleFavicon = () => {


        setFaviconUrl(
            (prevUrl) =>
                prevUrl ===
                "https://cdn-icons-png.flaticon.com/512/0/74.png" ?

                "https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
                :

                "https://cdn-icons-png.flaticon.com/512/0/74.png"
        );
    };

    return (
        <div>
            <Favicon url={faviconUrl} />
            <button onClick={toggleFavicon}>Toggle Favicon</button>
        </div>
    );
};

export default App;

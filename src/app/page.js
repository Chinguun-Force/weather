'use client'
import { useState } from "react";
import Favicon from "react-favicon";

const App = () => {

    // Initialize the favicon URL state 
    // with the default favicon
    const [faviconUrl, setFaviconUrl] = useState(
        "https://cdn-icons-png.flaticon.com/512/0/74.png"
    );

    // Function to toggle the favicon
    const toggleFavicon = () => {

        // Check the current favicon and
        // toggle to the opposite
        setFaviconUrl(
            (prevUrl) =>
                prevUrl ===
                "https://cdn-icons-png.flaticon.com/512/0/74.png" ?

                // Change to your second favicon file
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
                :
                // Change to your first favicon file
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

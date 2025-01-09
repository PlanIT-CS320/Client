// eslint-disable-next-line no-unused-vars
import { Dropbox } from "dropbox";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [source, setSource] = useState("/");
    const navigate = useNavigate();
    const state = {
        files: [],
    };
    const dbx = new Dropbox({
        accessToken: "",
        fetch: fetch.bind(window),
    });

    dbx.filesListFolder({
        path: "/profile-pictures",
    }).then(res => (state.files = res.result.entries));

    async function getThumbnails() {
        /*const paths = state.files.map(file => ({
            path: file.path_lower,
            size: 'w32h32'
        }));
        let res = await dbx.filesGetThumbnailBatch({
            entries: paths
        });*/
        let res = await dbx.filesDownload({
            path: "/profile-pictures/pfp.jpg",
        });
        console.log(res);
        setSource(URL.createObjectURL(res.result.fileBlob));
        console.log(source);
    }

    async function getFiles() {
        let res = await dbx.filesListFolder({
            path: "/profile-pictures",
        });
        state.files = res.result.entries;
        getThumbnails();
    }

    getFiles();

    return (
        <div>
            <h1>Welcome!</h1>
            <img src={source}></img>
        </div>
    );
}

export default Home;

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ShortTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const numberOfVideos = 4;

    const videos = [];

    for (let i = 0; i < numberOfVideos; i++) {
        videos.push(
            <div key={i} className={"video tw-relative border tw-rounded"}>
                <div className={""}>
                    <iframe
                        className="md:tw-w-full md:tw-h-screen"
                        src="https://youtube.com/shorts/gBiD2OHoY2g?si=lJGGOgKqAR3bBuUz"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ width: "100%", height: "100%" }}
                    ></iframe>
                </div>
                <div className={"tw-absolute tw-inset-x-0 tw-bottom-0"}>
                    <div className={"tw-flex"}>
                        <div className={"tw-grow tw-self-center tw-text-xs"}>12k</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" className={"tw-flex-none"}>
                    <Tab label="Content" value="1" className={"tw-w-2/4"} />
                    <Tab label="Likes" value="2" className={"tw-w-2/4"} />
                </TabList>
            </Box>
            <TabPanel value="1" className={"tw-grid tw-grid-cols-3 tw-gap-0.5 tw-p-0"}>
                {videos}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
    );
}
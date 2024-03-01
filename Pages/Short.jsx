import ShortLayout from "@/Components/Short/ShortLayout";
import {BsFillPersonFill, BsChatDotsFill, BsFillHeartFill, BsPlusCircleFill, BsShareFill, BsFillFlagFill  } from "react-icons/bs";

export default function Short() {

    const icons = [
        { icon: <BsPlusCircleFill className={"tw-fill-white"} />, className: "tw-flex tw-bg-orange-700 tw-mb-1.5 tw-h-9 tw-w-9 tw-rounded-full tw-items-center tw-justify-center tw-opacity-50 hover:tw-opacity-100" },
        { icon: <BsFillHeartFill className={"tw-fill-white"} />, className: "tw-flex tw-bg-orange-700 tw-mb-1.5 tw-h-9 tw-w-9 tw-rounded-full tw-items-center tw-justify-center tw-opacity-50 hover:tw-opacity-100" },
        { icon: <BsChatDotsFill className={"tw-fill-white"} />, className: "tw-flex tw-bg-orange-700 tw-mb-1.5 tw-h-9 tw-w-9 tw-rounded-full tw-items-center tw-justify-center tw-opacity-50 hover:tw-opacity-100" },
        { icon: <BsFillFlagFill  className={"tw-fill-white"} />, className: "tw-flex tw-bg-orange-700 tw-mb-1.5 tw-h-9 tw-w-9 tw-rounded-full tw-items-center tw-justify-center tw-opacity-50 hover:tw-opacity-100" },
        { icon: <BsShareFill className={"tw-fill-white"} />, className: "tw-flex tw-bg-orange-700 tw-mb-1.5 tw-h-9 tw-w-9 tw-rounded-full tw-items-center tw-justify-center tw-opacity-50 hover:tw-opacity-100" }
    ];

    // Create a function to generate the list items
    const generateListItems = () => {
        return icons.map((item, index) => (
            <li key={index} className={item.className}>
                {item.icon}
            </li>
        ));
    };

    const numberOfVideos = 4;

    const videos = [];

    for (let i = 0; i < numberOfVideos; i++) {
        videos.push(
            <div key={i} className={"video tw-relative border tw-rounded tw-scroll-mb-6 tw-snap-start"}>
                <div className={""}>
                    <iframe 
                        className="tw-w-full tw-h-screen"
                        src="https://youtube.com/shorts/gBiD2OHoY2g?si=lJGGOgKqAR3bBuUz" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={"tw-absolute tw-inset-x-0 tw-bottom-5"}>
                    <div className={"tw-flex tw-gap-2"}>
                        <div className={"tw-grow-0"}>
                            <div className={"tw-h-10 tw-w-10 tw-bg-slate-100 tw-rounded-full tw-m-1.5"}></div>
                        </div>
                        <div className={"tw-grow-0 tw-self-center tw-text-xs"}>Name User</div>
                        <div className={"tw-flex tw-gap-1 tw-content-center tw-self-center tw-grow-0 tw-rounded tw-bg-orange-600 tw-text-white tw-px-1 tw-py-0.5"}
                        style={{fontSize: '8px'}}>
                            <BsFillPersonFill />
                            People Tag
                        </div>
                    </div>
                    <div className={"tw-text-sm tw-m-1.5 tw-text-xs"}>
                    Biggest Double Storey House You Ever Seen 🤓 Rm99 Booking Fees To Own This Unit Right Now 🎯 
                    #propertyvlog #malaysiaproperty #propertytour #luxuryproperty #mjpropertyvlog
                    #kualalumpurproperty #kajang #terracehouse #doublestorey #semid #pajam #cornerlot #bungalow
                    </div>
                </div>
                <ul className={"tw-absolute tw-bottom-32 tw-right-0 tw-list-none tw-m-1.5 tw-items-stretch"}>
                    {generateListItems()}
                </ul>
            </div>
        );
    }

    return (
        <ShortLayout>
            {videos}
        </ShortLayout>
    );
}

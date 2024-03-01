import { Button } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import { getRoute } from "@/Routes/Router";
import { mdiUpload, mdiVideoInputSvideo } from "@mdi/js";
import Icon from "@mdi/react";
import { BsArrowBarUp, BsCameraReels  } from "react-icons/bs";

export default function AddShortOption() {
    return (
        <>
            <div className={"tw-flex tw-gap-0.5 tw-flex-col tw-text-sm"}>

                <ul className={"tw-list-none tw-p-0"}>
                    <li className={"tw-flex tw-gap-2 tw-content-center tw-mb-2 hover:tw-bg-gray-100 hover:tw-rounded"}>
                        <BsCameraReels 
                            className={"tw-bg-gray-100 tw-h-9 tw-w-9 tw-p-2 tw-rounded-full tw-items-center tw-justify-center"}
                        />
                        <p className={"tw-self-center tw-m-0"}>Create a Short</p>
                    </li>
                    <li className={"tw-flex tw-gap-2 tw-content-center hover:tw-bg-gray-100 hover:tw-rounded"}>
                        <BsArrowBarUp
                            className={"tw-bg-gray-100 tw-h-9 tw-w-9 tw-p-2 tw-rounded-full tw-items-center tw-justify-center"}
                        />
                        <p className={"tw-self-center tw-m-0"}>Create a Property Post</p>
                    </li>
                </ul>

                {/*<Link
                    href={getRoute("client.dashboard.property.home")}
                    className={"tw-w-full tw-text-center"}>
                    <Button
                        size={"xl"}
                        variant={""}
                        className={"tw-text-xs border tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-row tw-gap-1 tw-items-center tw-transition-all tw-border-orange-700 hover:tw-bg-orange-700 active:tw-scale-95 hover:tw-text-white tw-p-7"}>

                        <span>
                            Add video
                        </span>
                    </Button>
                </Link>
                <Link
                    href={getRoute("client.dashboard.property.home")}
                    className={"tw-w-full tw-text-center"}>
                    <Button
                        size={"xl"}
                        variant={""}
                        className={"tw-text-xs border tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-row tw-gap-1 tw-items-center tw-transition-all tw-border-orange-700 hover:tw-bg-orange-700 active:tw-scale-95 hover:tw-text-white tw-p-7"}
                    >
                        <span>
                            Add property
                        </span>
                    </Button>
    </Link>*/}
            </div>
        </>
    );
}
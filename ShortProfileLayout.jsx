import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Container, Nav } from "react-bootstrap";
import ShortTabs from "./ShortTabs";
import { mdiCog } from '@mdi/js';



export default function ShortProlfileLayout() {

    return (
        <>
            <Container>
                <div className={"tw-h-60 tw-pt-10"}>
                    <div className={"tw-flex"}>
                        <div className={"tw-relative tw-h-16 tw-w-16 tw-bg-slate-100 tw-rounded-full tw-m-1.5"}>
                            <div className={"tw-absolute -tw-right-1 -tw-bottom-1"}><Icon path={mdiPlusBox} size={1} /></div>
                        </div>
                        <div className={"tw-m-2.5 tw-mt-5.5"}>
                            <h5>User Name</h5>
                            <p className={"tw-text-xs"}>Description / Bio</p>
                        </div>
                    </div>
                    <div className={"tw-flex tw-gap-4 tw-text-xs tw-justify-between tw-mt-6"}>
                        <div className={"tw-grid tw-grid-cols-3 tw-gap-6 tw-text-center"}>
                            <div><h6>1</h6>Following</div>
                            <div><h6>0</h6>Follower</div>
                            <div><h6>12</h6>Liked</div>
                        </div>
                        <div className={"tw-flex tw-gap-1.5"}>
                            <Button
                                className={"border tw-rounded-full tw-bg-transparent tw-text-black tw-border-orange-600 tw-px-2.5 tw-py-0.5 tw-text-xs tw-my-2 tw-transition-all hover:tw-bg-orange-600 hover:tw-text-white active:tw-scale-95"}>
                                Profile
                            </Button>
                            <Button
                                className={"border tw-rounded-full tw-bg-transparent tw-text-black tw-border-orange-600 tw-px-2.5 tw-py-0.5 tw-text-xs tw-my-2 tw-transition-all hover:tw-bg-orange-600 hover:tw-text-white active:tw-scale-95"}>
                                <Icon path={mdiCog} size={0.75} />
                            </Button>
                        </div>

                    </div>
                </div>
                <ShortTabs />
            </Container>
        </>
    );
}
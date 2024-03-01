import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { mdiAccountCircleOutline, mdiHomeOutline, mdiCalculatorVariantOutline, mdiPlusBox, mdiVideoInputSvideo } from "@mdi/js";
import Icon from "@mdi/react";
import moment from "moment";
import { Image, Col, Nav, Button, Offcanvas } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import checkvalueLogo from "@/Assets/Image/checkvalueLogo.png";


export default function ShortLayout({ children }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={"tw-justify-center tw-w-full tw-mx-auto tw-h-screen md:tw-max-w-sm"}>
                <div className={"row tw-text-xs tw-fixed tw-my-2.5 tw-text-white tw-w-full md:tw-max-w-sm tw-m-0"}
                    style={{ zIndex: 999 }}
                >

                    <Col xs={2} md={2} className={"tw-justify-center tw-text-center tw-grow"}>Live</Col>
                    <Col xs={8} md={8} className={"tw-flex tw-flex-nowrap tw-justify-center tw-space-x-4 tw-grow"}>
                        <div>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                className={"tw-text-xs tw-bg-transparent tw-p-0 tw-border-0"}
                            >
                                Explore
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text"
                                    className={"tw-absolute tw-text-slate-500 tw-w-full tw-p-1.5 tw-bg-white tw-text-black tw-inset-x-0 tw-flex-nowrap tw-overflow-x-auto tw-scrollbar-hide"}
                                    style={{
                                        scrollbarWidth: 'none',
                                        fontSize: '10px'
                                    }}
                                >
                                    <div className={"tw-flex tw-gap-2"}>
                                        <div className={"tw-cursor-pointer"}>ForYou</div>
                                        <div className={"tw-cursor-pointer"}>Property</div>
                                        <div className={"tw-cursor-pointer"}>Entertainment</div>
                                        <div className={"tw-cursor-pointer"}>Travel</div>
                                        <div className={"tw-cursor-pointer"}>Music</div>
                                        <div className={"tw-cursor-pointer"}>Celebrity</div>
                                        <div className={"tw-cursor-pointer"}>Game</div>
                                        <div className={"tw-cursor-pointer"}>Decoration</div>
                                        <div className={"tw-cursor-pointer"}>Food</div>
                                        <div className={"tw-cursor-pointer"}>Cars</div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                        <div className={"tw-tw-cursor-pointer"}>Follow</div>
                    </Col>
                    <Col xs={2} md={2} className={"tw-place-content-center tw-grow"}><BsSearch /></Col>
                </div>

                <div className="tw-scroll-smooth tw-overflow-scroll tw-snap-mandatory tw-h-screen tw-snap-y"
                    style={{
                        scrollbarWidth: 'none',
                        height: '90%'
                    }}>
                    {children}
                </div>

            </div>
            <div
                className={"tw-w-full md:tw-w-24 md:tw-h-screen tw-py-1 tw-bg-white border-top border-bottom border-end tw-fixed md:tw-inset-y-0 md:tw-left-0 tw-inset-x-0 tw-bottom-0"}
               
            >

                <Offcanvas show={show} onHide={handleClose} placement="bottom">
                    <Offcanvas.Header closeButton className={"tw-py-3.5 tw-pb-1"}>
                        <Offcanvas.Title>Create</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ maxHeight: '500px', overflow: 'hidden' }}>
                        <AddShortOption />
                    </Offcanvas.Body>
                </Offcanvas>
                <Nav className={"tw-px-2 tw-text-xs tw-justify-center md:tw-justify-start tw-flex md:tw-flex-col lg:tw-flex-col"}>
                    <Nav.Item className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto"}>
                        <Button
                            size={"sm"}
                            variant={""}
                            className={"tw-text-xs border-0 tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-col tw-gap-2 tw-items-center tw-transition-all hover:tw-bg-gray-200 active:tw-scale-95 md:tw-py-4"}
                            style={{ fontSiz: "8px !important" }}
                        >
                            <Icon path={mdiHomeOutline} size={1} />
                            <span>
                                Home
                            </span>
                        </Button>
                    </Nav.Item>
                    <Nav.Item className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto"}>
                        <Button
                            size={"sm"}
                            variant={""}
                            className={"tw-text-xs border-0 tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-col tw-gap-1 tw-items-center tw-transition-all hover:tw-bg-gray-200 active:tw-scale-95 md:tw-py-4"}
                        >
                            <Icon path={mdiVideoInputSvideo} size={1} />
                            <span>
                                Short
                            </span>
                        </Button>
                    </Nav.Item>
                    <Nav.Item className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto"}>
                        <Button
                            onClick={handleShow}
                            size={"sm"}
                            variant={""}
                            className={"tw-text-xs border-0 tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-col tw-gap-1 tw-items-center tw-transition-all hover:tw-bg-gray-200 active:tw-scale-95 md:tw-py-4"}
                        >
                            <Icon path={mdiPlusBox} size={1.75} />
                            <span>

                            </span>
                        </Button>
                    </Nav.Item>
                    <Nav.Item className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto"}>
                        <Button
                            size={"sm"}
                            variant={""}
                            className={"tw-text-xs border-0 tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-col tw-gap-1 tw-items-center tw-transition-all hover:tw-bg-gray-200 active:tw-scale-95 md:tw-py-4"}
                        >
                            <Image src={checkvalueLogo} className={"tw-w-6 d-block d-md-block d-lg-block"} loading={"eager"} />

                            <span>
                                CheckValue
                            </span>
                        </Button>
                    </Nav.Item>
                    <Nav.Item className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto"}>
                        <Button
                            size={"sm"}
                            variant={""}
                            className={"tw-text-xs border-0 tw-w-full tw-h-full tw-rounded-xl tw-flex tw-flex-col md:tw-flex-col tw-gap-1 tw-items-center tw-transition-all hover:tw-bg-gray-200 active:tw-scale-95 md:tw-py-4"}
                        >
                            <Icon path={mdiAccountCircleOutline} size={1} />
                            <span>
                                Me
                            </span>
                        </Button>
                    </Nav.Item>

                    <Nav.Item
                        className={"tw-grow md:tw-grow-0 tw-basis-0 md:tw-basis-auto tw-hidden md:tw-flex tw-ml-auto md:tw-hidden"}>
                        <div
                            className={"text-muted tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-gap-x-2"}>
                            <span>
                                {moment().year()} © FindTeam Technology
                            </span>

                            <span className={"border-start border-2 tw-pl-2"}>
                                v1.1.3-beta
                            </span>
                        </div>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    );
}
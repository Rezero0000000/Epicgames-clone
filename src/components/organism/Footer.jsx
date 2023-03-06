import React from "react";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import ArrowUp from "../icons/ArrowUp";

const Footer = () => {
    return (
        <>
            <div className="text-[13.5px]">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Facebook/>
                        <Twitter />
                        <Youtube/>
                    </div>
                    <div className="border-2 border-[#B6B6B6] border-white pt-2 px-[0.4rem] pb-1">
                        <ArrowUp />
                    </div>
                </div>
                <div className="mt-7">
                    <div className="text-[#B6B6B6]">
                        <h1>Resources</h1>
                    </div>
                    <div className="flex grid grid-cols-2 gap-y-2 gap-x-5 mt-3">
                        <ul>
                            <li><p>Support-A-Content</p></li>
                            <li><p>Publish On Epic Games</p></li>
                            <li><p>Career</p></li>
                        </ul>
                        <ul>
                            <li><p>Company</p></li>
                            <li><p>Fan Art Policy</p></li>
                            <li><p>UX Research</p></li>
                        </ul>
                        <ul>
                            <li><p>Store EULA</p></li>
                            <li><p>Online Services</p></li>
                            <li><p>Community Rules</p></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="text-[#B6B6B6]">
                        <h1>Made By Epic Games</h1>
                    </div>
                    <div className="flex gap-5 mt-3">
                        <ul>
                            <li><p>Battle Breakers</p></li>
                            <li><p>Fortnite</p></li>
                            <li><p>Infinity Blade</p></li>
                        </ul>
                        <ul>
                            <li><p>Shadow Complex</p></li>
                            <li><p>Spyjinx</p></li>
                            <li><p>Unreal Tournament</p></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-7">
                    <p className="text-[12px] text-[#B6B6B6]">
                    © 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.
                    </p>
                </div>
                <div className="mt-7">
                    <a href="" >Terms of Service</a>
                    <a href="" className="ml-5">Privacy Policy</a>
                    <a href="" className="ml-5">Store Refund Policy</a>
                </div>
            </div>
        </>
    )
}

export default Footer;
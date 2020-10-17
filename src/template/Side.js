import React from 'react';
import { Button, SideNav, SideNavItem } from 'react-materialize';

const Side = () => {
    return (
        <SideNav trigger={<Button icon="menu" />} options={{ closeOnClick: true }}>
            <SideNavItem userView
                user={{
                    background: 'https://www.episodeinteractive.com/dcon/pv1_back_INT__MUSIC_AGENT_OFFICE_DESK_OL___DAY.jpg',
                    image: 'https://cdn0-production-images-kly.akamaized.net/RYD9QFBkl3o7DHfxF4kezIA_aFs=/0x94:1149x741/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2322535/original/018839500_1533648790-Vino_G_Bastian__19_.jpg',
                    name: 'Adi Fauzi Kusmara',
                    email: 'adi@gmail.com'
                }}
            />
            <SideNavItem href="#!icon" icon="perm_identity">
                Profile Saya
                </SideNavItem>
            <SideNavItem href="#!icon" icon="help">
                Hubungi Kami
                </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader icon='video_label'>
                Product
                </SideNavItem>
            <SideNavItem waves icon='local_hospital'>
                Kesehatan
                </SideNavItem>
            <SideNavItem waves icon='computer'>
                Komputer & Aksesoris
                </SideNavItem>
            <SideNavItem waves icon='keyboard'>
                Gaming
                </SideNavItem>
            <SideNavItem waves icon='camera_alt'>
                Kamera
                </SideNavItem>
            <SideNavItem waves icon='tag_faces'>
                Olahraga
                </SideNavItem>
            <SideNavItem waves icon='shopping_cart'>
                Fashion Pria
                </SideNavItem>
            <SideNavItem waves icon='shopping_cart'>
                Fashion Wanita
                </SideNavItem>
        </SideNav>
    );
}

export default Side;
import React from 'react';
import {TopbarContainer, Icon, CloseIcon, TopbarWrap, TopbarMenu, TopbarLinks, TopbarBtnWrap, TopbarRoute} from './TopbarElements';

const Topbar = () => {
    return (
        <TopbarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <TopbarWrap>
                <TopbarMenu>
                    <TopbarLinks to="/tienda">Tienda</TopbarLinks>
                    <TopbarLinks to="/vestimenta">Vestimenta</TopbarLinks>
                    <TopbarLinks to="/calzado">Calzado</TopbarLinks>
                    <TopbarLinks to="/seguridad">Seguridad</TopbarLinks>
                    <TopbarLinks to="/accesorios">Accesorios</TopbarLinks>
                    <TopbarLinks to="/outdoors">Outdoors</TopbarLinks>
                    <TopbarLinks to="/soporte">Soporte</TopbarLinks>
                    <TopbarLinks to="/buscador">🔍️</TopbarLinks>
                    <TopbarBtnWrap><TopbarRoute to="/ingreso">Ingreso</TopbarRoute></TopbarBtnWrap>
                </TopbarMenu>
            </TopbarWrap>
        </TopbarContainer>
    )
};

export default Topbar;
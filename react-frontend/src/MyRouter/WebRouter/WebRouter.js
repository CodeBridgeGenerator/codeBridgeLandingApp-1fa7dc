import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import NoMatch from '../NoMatch';
import { socket } from '../../services/restClient';
// Web components
import HomePage from '../../components/web_components/Homepage/Homepage';
import '../../assets/mainTheme/modal.css';

const WebRouter = (props) => {
    const [modal, setModalDisplay] = useState('none');

    useEffect(() => {
        const onConnect = () => {
            console.log('✅ Socket.IO Connected to server');
            setModalDisplay('none');
        };

        const onDisconnect = (reason) => {
            console.log('❌ Socket.IO disconnected:', reason);
            if (reason === 'transport close') {
                setModalDisplay('flex');
                socket.connect();
            }
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, [modal]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    hasServicePermission: (service) => dispatch.perms.hasServicePermission(service),
    hasServiceFieldsPermission: (service) => dispatch.perms.hasServiceFieldsPermission(service)
});

export default connect(mapState, mapDispatch)(WebRouter);
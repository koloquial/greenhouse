import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message, type, time) => {
    console.log('NOTIFY', message, type, time)
    switch(type){
        case 'info':
            return toast.info(message, {
                position:"top-left",
                autoClose: time,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        case 'error':
            return toast.error(message, {
                position:"top-left",
                autoClose: time,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        case 'success':
            return toast.success(message, {
                position:"top-left",
                autoClose: time,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        case 'warning':
        return toast.warning(message, {
            position:"top-left",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        default:
            return;
    }
}

export default notify;
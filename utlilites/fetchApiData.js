import axiosInstance from './axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const fetchApiData = async (endpoint, method = 'GET', data = null) => {
    try {
        const response = await axiosInstance({
            method,
            url: endpoint,
            data,
        });
        toast.success('API request successful');
        return response.data;
    } catch (error) {
        toast.error('API request failed');
        console.error('Error fetching API data:', error);
        throw error;
    }
};

export default fetchApiData;



/*********** HOW IT WORKS ****************/

//GET REQUEST //getAllUsers
// const fetchData = async () => {
//     try {
//         const data = await fetchApiData('products/add-product', 'GET');
//         if (data) {
//             // setData(data);
//         } else {
//             // Handle empty response
//         }
//     } catch (error) {
//         // Handle error
//     }
// };

//POST
// const postData = async () => {
//     try {
//         const formData = new FormData();
//         formData.append('key', 'value');
//         const data = await fetchApiData('user/profile/update_profile/', 'POST', formData);
//         if (data) {
//             setData(data);
//         } else {
//             // Handle empty response
//         }
//     } catch (error) {
//         // Handle error
//     }
// };

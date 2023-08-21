import { selector } from "recoil";
import { instance } from '../api/Config';

export const fetchAllGalleryData = selector({
    key: "gallerySelector",
    get: async ({ get }) => {
        try {
            const response = await instance.get('/photos', { params: {'offset': 5, 'limit': 5000} });
            return response.data.photos || [];
        } catch (error) {
            throw error;
        }
    }
});
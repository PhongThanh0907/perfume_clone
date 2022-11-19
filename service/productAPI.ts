import { Product } from "../interface/product"
import { axiosClient } from "./axiosClient"

const productAPI = {
    getProductList: () => {
        return axiosClient.get<unknown, Product[]>("/products")
    }
}

export default productAPI;
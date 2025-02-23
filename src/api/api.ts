import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IProductType } from "../types";

class Api {
  _apiInstance: AxiosInstance;
  constructor(apiInstance: AxiosInstance) {
    this._apiInstance = apiInstance;
  }

  _handleResult = (res: AxiosResponse) => {
    if (res.status !== 200) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res;
  };

  getProductTypes() {
    return apiInstance
      .get<IProductType[]>("/productTypes")
      .then(this._handleResult);
  }

  getProductTypeById(id: string) {
    return apiInstance
      .get<IProductType>(`/productTypes/${id}`)
      .then(this._handleResult);
  }

  createProductType({
    packsNumber,
    packageType,
    isArchived,
    description,
  }: IProductType) {
    return apiInstance
      .post(`/productTypes`, {
        body: JSON.stringify({
          packsNumber,
          packageType,
          isArchived,
          description,
        }),
      })
      .then(this._handleResult);
  }

  deleteProductType(id: string) {
    return apiInstance.delete(`/cards/${id}`).then(this._handleResult);
  }

  editProductType({
    id,
    packsNumber,
    packageType,
    isArchived,
    description,
  }: IProductType) {
    return apiInstance
      .patch(`/productTypes/${id}`, {
        body: JSON.stringify({
          packsNumber,
          packageType,
          isArchived,
          description,
        }),
      })
      .then(this._handleResult);
  }
}

const apiInstance = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

apiInstance.interceptors.response.use(
  function (response) {
    if (response.data[0].createdAt) {
      response.data.sort((a: IProductType, b: IProductType) => {
        return b.createdAt < a.createdAt
          ? -1
          : b.createdAt > a.createdAt
          ? 1
          : 0;
      });
      response.data.map((type: IProductType) => {
        const dateObject = new Date(type.createdAt);
        type.createdAt = dateObject.toLocaleDateString("ru-RU");
        return type;
      });
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = new Api(apiInstance);

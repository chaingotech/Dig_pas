import { Store } from "vuex";
import axiosInstance, { AUTH_TOKEN_PATH } from "./api";
import TokenService from "./token.service";

const setup = (store: Store<any>): void => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== AUTH_TOKEN_PATH && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post(AUTH_TOKEN_PATH, null, {
              params: {
                refresh_token: TokenService.getLocalRefreshToken(),
                grant_type: 'refresh_token'
              }
            });
            const { id: userId = null } = rs.data || {}
            const { accessToken, refreshToken, organizationId } = rs.data?.attributes;

            store.dispatch('auth/refreshToken', accessToken);
            TokenService.setAuthData({
              accessToken,
              refreshToken,
              organizationId,
              userId
            });

            return axiosInstance(originalConfig);
          } catch (_error) {
            window.location.href = window.location.origin + '/login'
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;

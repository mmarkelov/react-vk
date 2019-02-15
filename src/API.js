/* global document, window */

export default class VKApi {
  constructor(apiId, options = {}) {
    this.apiId = apiId;
    this.options = options;

    this.promise = null;

    this.init();
  }

  init() {
    const {
      apiId,
      options: { version, onlyWidgets }
    } = this;

    if (this.promise) return this.promise;

    this.promise = new Promise(resolve => {
      const baseUrl = `https://vk.com/js/api/openapi.js?${version}`;

      window.vkAsyncInit = () => {
        if (apiId) {
          window.VK.init({
            apiId,
            onlyWidgets
          });
        }

        resolve(window.VK);
      };

      if (!document.getElementById("vk-openapi")) {
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.id = "vk-openapi";
        script.src = baseUrl;
        script.async = true;

        document.head.appendChild(script);
      }
    });

    return this.promise;
  }
}

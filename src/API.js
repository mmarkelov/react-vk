/* global document, window */

export default class VKApi {
  constructor(apiId, options = {}) {
    this.apiId = apiId;
    this.options = options;

    this.promise = null;

    this.load();
  }

  init() {
    const {
      apiId,
      options: { onlyWidgets }
    } = this;
    if (apiId) {
      window.VK.init({
        apiId,
        onlyWidgets
      });
    }
  }

  load() {
    const {
      options: { version }
    } = this;

    if (this.promise) return this.promise;

    this.promise = new Promise(resolve => {
      if (window.VK && window.VK.init) {
        this.init();
        resolve(window.VK);
      } else {
        window.vkAsyncInit = () => {
          this.init();
          resolve(window.VK);
        };
      }

      const baseUrl = `https://vk.com/js/api/openapi.js?${version}`;

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

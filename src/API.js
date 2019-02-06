/* global document, window */
import minified from "./minified";

export default class VKApi {
  constructor(apiId, options = {}) {
    this.apiId = apiId;
    this.options = options;

    if (!apiId) {
      throw new Error("You need to set apiId");
    }

    this.promise = null;

    this.init();
  }

  init() {
    const {
      apiId,
      options: { version, onlyWidgets, unstable_useMinified }
    } = this;

    if (this.promise) return this.promise;

    this.promise = new Promise(resolve => {
      const baseUrl = `https://vk.com/js/api/openapi.js?${version}`;

      window.vkAsyncInit = () => {
        window.VK.init({
          apiId,
          onlyWidgets
        });

        resolve(window.VK);
      };

      if (document.getElementById("vk-openapi")) {
        return;
      }

      const script = document.createElement("script");

      script.type = "text/javascript";
      script.id = "vk-openapi";
      if (!unstable_useMinified) {
        script.src = baseUrl;
      } else {
        script.text = minified;
      }
      script.async = true;

      document.head.appendChild(script);
    });

    return this.promise;
  }
}


    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/polyfills-legacy.CR-5oxCn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/app-legacy.XXsBYCnT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/VaultedContact-legacy.DJs8JewY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/DeliveryMethodSelectorSection-legacy.sh05nfXd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/VaultedDeliveryAddress-legacy.BHW9s5FE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Rollup-legacy.CGPzOESE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/LegacyVaultedShippingMethods-legacy.CxE4X4ov.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/useUnauthenticatedErrorModal-legacy.C9txK7G2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/ShopPayLogo-legacy.Df_L-wKU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PurchaseOptionsAgreement-legacy.DbFnaHSP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/ShippingMethodSelector-legacy.BWFDDcPa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PickupPointCarrierLogo-legacy.5ziJJcWd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/hooks-legacy.C7VGrnCR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/VaultedPayment-legacy.DMpCBLFB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Option-legacy.CF_3KXug.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/OnePageModal-legacy.BPIelQWC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/useShowShopPayOptin-legacy.bzetfVM1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/Section-legacy.B_aK14Qh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/PayButtonSection-legacy.qq_Uxp8o.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/context-legacy.30N8bgN4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/publishMessage-legacy.eU3NgI22.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/DutyOptions-legacy.CplinQ3Y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/SubscriptionPriceBreakdown-legacy.CTFrFXvY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/StockProblemsLineItemList-legacy.CL6bYgQf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/component-ShopPayVerificationSwitch-legacy.T2KZQX2N.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.de/index-legacy.DhrM-Nvj.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0081/3305/0458/files/Home-6-Logo-Parallax_x320.png?v=1638535058"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
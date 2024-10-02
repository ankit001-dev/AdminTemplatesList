window.CRISP_READY_TRIGGER = function () {
  window.CRISP_SESSION_ID = $crisp.get("session:identifier");
  postCart();
  postCustomerID();
};

postCart = function postCart() {
  fetch("/cart.js").then(function (response) {
    return response.json();
  }).then(function (cart) {
    return fetch(window.location.origin + "/apps/crisp/website/" + window.CRISP_WEBSITE_ID + "/session/" + window.CRISP_SESSION_ID + "/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(cart)
    });
  }).catch(function (_) {
    // Ignore
  });
};

postCustomerID = function postCustomerID() {
  if (__st.cid === undefined || __st.cid === "") {
    return;
  }

  fetch(window.location.origin + "/apps/crisp/website/" + window.CRISP_WEBSITE_ID + "/session/" + window.CRISP_SESSION_ID + "/customer/id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ customer_id: __st.cid })
  }).catch(function (_) {
    // Ignore
  });
};
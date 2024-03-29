function getDefaultKeys() {
   var xmlhttpKeys = new XMLHttpRequest();
   xmlhttpKeys.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         var defaultAppKeys = this.response;
         const defaultPublicElement = document.querySelector('#input-public-key');
         const defaultPrivateElement = document.querySelector('#input-private-key');
         defaultPublicElement.value = defaultAppKeys.applicationKeys.public;
         defaultPrivateElement.value = defaultAppKeys.applicationKeys.private;
      }
   };
   xmlhttpKeys.open("GET", '/scripts/xmessAppKeys.json', true);
   xmlhttpKeys.responseType = 'json';
   xmlhttpKeys.send();
}

function getDefaultSubscription(browser) {
   var xmlhttpSub = new XMLHttpRequest();
   xmlhttpSub.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         var defaultSubscription = this.response;
         const defaultSubscriptionTextArea = document.querySelector('#push-subscription');
         defaultSubscriptionTextArea.value = JSON.stringify(defaultSubscription[browser]);
      }
   };
   xmlhttpSub.open("GET", '/scripts/xmessSubscription.json', true);
   xmlhttpSub.responseType = 'json';
   xmlhttpSub.send();
}

function getDefaultPayload() {
   var xmlhttpPayload = new XMLHttpRequest();
   xmlhttpPayload.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         var defaultPayload = this.response;
         const defaultSubscriptionTextArea = document.querySelector('#push-data');
         defaultSubscriptionTextArea.value = JSON.stringify(defaultPayload);
      }
   };
   xmlhttpPayload.open("GET", '/scripts/defaultPayload.json', true);
   xmlhttpPayload.responseType = 'json';
   xmlhttpPayload.send();
}
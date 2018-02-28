
function initialiseUI() {
   const sendBtn = document.querySelector('#js-send-push');
   sendBtn.addEventListener('click', () => {
      sendBtn.disabled = true;

      sendPushMessage()
         .catch((err) => {
            console.error(err);
            window.alert(err.message);
         })
         .then(() => {
            sendBtn.disabled = false;
         });
   });

   const getDefaultKeysBtn = document.querySelector('#get-default-keys');
   getDefaultKeysBtn.addEventListener('click', () => {
      this.disabled = true;
      getDefaultKeys();
      this.disabled = false;
   });

   const getDefaultSubChromeBtn = document.querySelector('#get-default-sub-chrome');
   getDefaultSubChromeBtn.addEventListener('click', () => {
      this.disabled = true;
      getDefaultSubscription("chrome");
      this.disabled = false;
   });

   const getDefaultSubFirefoxBtn = document.querySelector('#get-default-sub-firefox');
   getDefaultSubFirefoxBtn.addEventListener('click', () => {
      this.disabled = true;
      getDefaultSubscription("firefox");
      this.disabled = false;
   });

   const previousDetails = getDetails();
   if (previousDetails) {
      const defaultPublicElement = document.querySelector('#input-public-key');
      const defaultPrivateElement = document.querySelector('#input-private-key');
      const defaultSubscriptionTextArea = document.querySelector('#push-subscription');
      const textToSendTextArea = document.querySelector('#push-data');

      defaultPublicElement.value = previousDetails.applicationKeys.public;
      defaultPrivateElement.value = previousDetails.applicationKeys.private;
      defaultSubscriptionTextArea.value = previousDetails.subscription;
      textToSendTextArea.value = previousDetails.data;
   }

   sendBtn.disabled = false;
}

window.addEventListener('load', () => {
   initialiseUI();
});

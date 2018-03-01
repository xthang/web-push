
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

   const getDefaultSubBtn = document.getElementsByClassName('get-default-sub');
   console.log(getDefaultSubBtn[0]);
   for (i = 0; i < getDefaultSubBtn.length; i++) {
      getDefaultSubBtn[0].addEventListener('click', () => {
         this.disabled = true;
         console.log(this);
         const browsername = this.id.slice(16, this.id.length);
         getDefaultSubscription(browsername);
         console.log(browsername);
         this.disabled = false;
      })
   };

   const getDefaultPayloadBtn = document.querySelector('#get-default-payload');
   getDefaultPayloadBtn.addEventListener('click', () => {
      this.disabled = true;
      getDefaultPayload();
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

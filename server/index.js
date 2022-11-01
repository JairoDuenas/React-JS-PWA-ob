const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/efyBy3AWGp4:APA91bGnflmHg3t4foY9zThlLPwRLL7oqzzJUYHdH1ESgA12JGJwu6obQvHRdoc2R06KPoltvJjVIuuSjhXw4gdqB3Hee-MqZKyswmhAX-MAvu1WdCRkYoyiIq2PqSju0RQuUDHp0dHO',
  expirationTime: null,
  keys: {
    p256dh: 'BPblf_je6amQYoNTIPH1s6sPdY2zQTFS8n4qK2DkMfQ5gHph56HwgN32UgW7h8eqBpkLxYhkjed_XW_UEBbZgDE',
    auth: '-W4E-bToCTTLvKDeZkz03g'
  }
}

const vapidKeys = {
  publicKey: "BGEJQoN0REiZ__kh7SR3MWGUUEFc3mRQ2ACg692N_dUGKqO53S46iXDUNt56Jr9wZQpBaDMi7g4s5-3JeHOlkfI",
  privateKey: "M6dGcUgytP7Tq5gCnCqELoYXCLzaJb30w48oM_BCMYc"
}

webpush.setVapidDetails(
  'mailto:jairo@hotmail.com.',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Routes
app.get("/", async (req, res) => {
  // res.sendStatus(200).json();
  const payload = JSON.stringify({ title: "Título de notificación", message: "Mensaje de la notificación" });
  try {
    await webpush.sendNotification(pushSubscription, payload);
    await res.send("Enviado");
  } catch (error) {
    console.log(error)
  }
});

app.post("/subscription", (req, res) => {
  console.log(req.body);
  res.sendStatus(200).json();
})

app.listen(8000, () => console.log("Server listening on port 8000"))
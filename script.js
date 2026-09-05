// ここだけ変更すれば問い合わせ先メールアドレスを変更できます。
const SHOP_EMAIL = "arakisekiyuten.syaken@gmail.com";

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const subject = `中古車についてのお問い合わせ（${data.get("car")}）`;
  const body =
`お名前：${data.get("name")}
メールアドレス：${data.get("email")}
お問い合わせ車両：${data.get("car")}

お問い合わせ内容：
${data.get("message")}`;

  if (SHOP_EMAIL === "YOUR_EMAIL@example.com") {
    alert("script.js の SHOP_EMAIL に、実際の受信用メールアドレスを設定してください。");
    return;
  }
  window.location.href = `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

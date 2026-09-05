const SHOP_EMAIL = "arakisekiyuten.syaken@gmail.com";

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const d = new FormData(this);
  const subject = `車検・整備のお問い合わせ（${d.get("type")}）`;
  const body = `お問い合わせ種別：${d.get("type")}
お名前：${d.get("name")}
メールアドレス：${d.get("email")}
電話番号：${d.get("tel")}
希望日・希望時間：${d.get("schedule")}

お問い合わせ内容：
${d.get("message")}`;
  if (SHOP_EMAIL === "YOUR_EMAIL@example.com") {
    alert("script.js の SHOP_EMAIL に、実際の受信用メールアドレスを設定してください。");
    return;
  }
  window.location.href = `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


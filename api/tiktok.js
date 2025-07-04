let recentGifts = [];

export default async function handler(req, res) {
  // ✅ เปิด CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // ✅ POST: รับข้อมูลของขวัญ
  if (req.method === 'POST') {
    const { event, gift_name, amount, username } = req.body;

    const gift = {
      event,
      gift_name,
      amount,
      username,
      time: new Date().toISOString(),
    };

    recentGifts.unshift(gift);
    if (recentGifts.length > 20) recentGifts.pop();

    console.log('🎁 ได้รับของขวัญ:', gift);
    return res.status(200).json({ message: 'ok' });
  }

  // ✅ GET: ส่งข้อมูลของขวัญล่าสุด
  if (req.method === 'GET') {
    return res.status(200).json({ recent: recentGifts });
  }

  // ✅ Method อื่นไม่รองรับ
  return res.status(405).json({ message: 'Method not allowed' });
}

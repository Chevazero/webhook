let recentGifts = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { event, gift_name, amount, username } = req.body;

    const gift = {
      event,
      gift_name,
      amount,
      username,
      time: new Date().toISOString()
    };

    // บันทึกไว้ล่าสุด (ไม่เกิน 20 รายการ)
    recentGifts.unshift(gift);
    if (recentGifts.length > 20) recentGifts.pop();

    console.log('🎁 ได้รับของขวัญ:', gift);
    return res.status(200).json({ message: 'ok' });
  }

  // GET สำหรับให้หน้าเว็บดึงข้อมูลของขวัญล่าสุด
  if (req.method === 'GET') {
    return res.status(200).json({ recent: recentGifts });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

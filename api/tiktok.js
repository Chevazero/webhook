export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const event = req.body?.event || 'unknown';
  const gift = req.body?.gift_name || 'unknown';
  const amount = req.body?.amount || 0;
  const username = req.body?.username || 'anonymous';

  console.log('🎁 ได้รับของขวัญ:', { event, gift, amount, username });

  res.status(200).json({ message: 'รับข้อมูลสำเร็จ', received: req.body });
}

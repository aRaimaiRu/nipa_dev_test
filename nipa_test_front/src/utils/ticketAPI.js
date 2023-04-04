const HOSTAPI = `${process.env.HOSTAPI || ''}`;

async function GetAll(data) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });
}
export { GetAll };

const getSessionData = async (date) => {
  const year = date.format('YYYY');
  const month = date.format('MM');
  const url = `${process.env.BASE_URL}/api/sessions/group/${year}/${month}`;
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

export default getSessionData;
